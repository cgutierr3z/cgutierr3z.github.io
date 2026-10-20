import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';

const workflowFiles = [
  '.github/workflows/deploy.yml',
  '.github/workflows/ci.yml',
];

test.describe('endurecimiento de workflows', () => {
  test('todas las acciones están fijadas a un SHA completo', async () => {
    for (const file of workflowFiles) {
      const yaml = await readFile(file, 'utf8');
      const uses = [...yaml.matchAll(/^\s*uses:\s+(\S+)/gm)].map(
        (match) => match[1].replace(/['"]/g, ''),
      );

      expect(uses.length, `${file} no declara acciones`).toBeGreaterThan(0);

      for (const action of uses) {
        expect(
          action,
          `${file}: la acción "${action}" no está fijada a un SHA`,
        ).toMatch(/^[^@\s]+@[0-9a-f]{40}$/);
      }
    }
  });

  test('el deploy separa permisos entre build y deploy', async () => {
    const yaml = await readFile('.github/workflows/deploy.yml', 'utf8');
    const buildStart = yaml.indexOf('\n  build:\n');
    const deployStart = yaml.indexOf('\n  deploy:\n');

    expect(buildStart).toBeGreaterThan(-1);
    expect(deployStart).toBeGreaterThan(buildStart);

    const build = yaml.slice(buildStart, deployStart);
    const deploy = yaml.slice(deployStart);

    expect(build).not.toMatch(/pages:\s*write/);
    expect(build).not.toMatch(/id-token:\s*write/);
    expect(deploy).toMatch(/pages:\s*write/);
    expect(deploy).toMatch(/id-token:\s*write/);
    expect(deploy).toMatch(/environment:\s*\n\s*name:\s*github-pages/);
  });

  test('el workflow de CI no puede desplegar', async () => {
    const yaml = await readFile('.github/workflows/ci.yml', 'utf8');

    expect(yaml).toMatch(/pull_request:/);
    expect(yaml).not.toMatch(/pages:\s*write/);
    expect(yaml).not.toMatch(/id-token:\s*write/);
    expect(yaml).not.toMatch(/deploy-pages/);
    expect(yaml).not.toMatch(/environment:\s*\n\s*name:\s*github-pages/);
  });
});
