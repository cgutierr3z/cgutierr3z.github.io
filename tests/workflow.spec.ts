import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';

const workflowFiles = [
  '.github/workflows/deploy.yml',
  '.github/workflows/ci.yml',
];

const permissionsBlock = (yaml: string): string => {
  const lines = yaml.split('\n');
  const start = lines.findIndex((line) => line.trim() === 'permissions:');
  if (start === -1) return '';

  const baseIndent = lines[start].search(/\S/);
  const block: string[] = [];

  for (const line of lines.slice(start + 1)) {
    if (!line.trim()) {
      if (block.length > 0) break;
      continue;
    }

    if (line.search(/\S/) <= baseIndent) break;
    block.push(line.trim());
  }

  return block.join('\n');
};

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
    const jobsStart = yaml.indexOf('\njobs:\n');
    const buildStart = yaml.indexOf('\n  build:\n');
    const deployStart = yaml.indexOf('\n  deploy:\n');

    expect(jobsStart).toBeGreaterThan(-1);
    expect(buildStart).toBeGreaterThan(jobsStart);
    expect(deployStart).toBeGreaterThan(buildStart);

    const header = yaml.slice(0, jobsStart);
    const build = yaml.slice(buildStart, deployStart);
    const deploy = yaml.slice(deployStart);
    const headerPermissions = permissionsBlock(header);
    const buildPermissions = permissionsBlock(build);

    expect(headerPermissions).toBe('contents: read');
    expect(header).not.toMatch(/pages:\s*write/);
    expect(header).not.toMatch(/id-token:\s*write/);

    expect(buildPermissions).toBe('contents: read');
    expect(build).not.toMatch(/pages:\s*write/);
    expect(build).not.toMatch(/id-token:\s*write/);

    expect(deploy).toMatch(/pages:\s*write/);
    expect(deploy).toMatch(/id-token:\s*write/);
    expect(deploy).toMatch(/environment:\s*\n\s*name:\s*github-pages/);
  });

  test('el workflow de CI no puede desplegar', async () => {
    const yaml = await readFile('.github/workflows/ci.yml', 'utf8');
    const jobsStart = yaml.indexOf('\njobs:\n');
    const header = yaml.slice(0, jobsStart);
    const headerPermissions = permissionsBlock(header);

    expect(headerPermissions).toBe('contents: read');
    expect(header).not.toMatch(/pages:\s*write/);
    expect(header).not.toMatch(/id-token:\s*write/);
    expect(yaml).toMatch(/pull_request:/);
    expect(yaml).not.toMatch(/pages:\s*write/);
    expect(yaml).not.toMatch(/id-token:\s*write/);
    expect(yaml).not.toMatch(/deploy-pages/);
    expect(yaml).not.toMatch(/environment:\s*\n\s*name:\s*github-pages/);
  });
});
