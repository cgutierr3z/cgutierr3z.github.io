import { test, expect } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const cvPath = 'public/cv/carlos-gutierrez-cv.pdf';

test.describe('CV público', () => {
  test('es un PDF etiquetado de una página con el contenido aprobado', () => {
    expect(existsSync(cvPath), `Falta ${cvPath}`).toBe(true);

    const info = execFileSync('pdfinfo', [cvPath], { encoding: 'utf8' });
    expect(info).toMatch(/^Tagged:\s+yes$/m);
    expect(info).toMatch(/^Pages:\s+1$/m);
    expect(info).toMatch(/^Page size:\s+612 x 792 pts \(letter\)$/m);

    const text = execFileSync('pdftotext', ['-layout', cvPath, '-'], {
      encoding: 'utf8',
    });

    expect(text).toContain('más de 50');
    expect(text).toContain('100 y 500');
    expect(text).toContain('dos tipos de CRM');
    expect(text).not.toMatch(/endpoint/i);
    expect(text).not.toMatch(/~5|cinco\s+endpoints/i);
    expect(text).toContain('Empresa confidencial');
  });
});
