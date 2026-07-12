import { copyFileSync, rmSync } from 'node:fs';

copyFileSync('dist/template.html', 'index.html');
rmSync('dist/template.html');
