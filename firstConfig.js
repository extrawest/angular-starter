import { execSync } from 'child_process';

console.log(
  'This is config script for the first initialization of new project.',
);

execSync('npm install', { stdio: [0, 1, 2] });
execSync('npm run configure-husky', { stdio: [0, 1, 2] });
