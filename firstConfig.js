import { execSync } from 'child_process';
import fs from 'fs';

const executeCommandInTerminal = (command) => {
  console.log(`Starting ${command}...`);

  execSync(command, { stdio: 'inherit' });
};

const removeDir = (path) => {
  console.log(`Removing ${path}...`);

  fs.rmSync(path, { recursive: true, force: true });
};

console.log(
  'This is config script for the first initialization of new project.',
);

// Remove config dirs
removeDir('.vscode');
removeDir('.idea');
removeDir('.husky');
removeDir('.angular');

// Install modules
executeCommandInTerminal('npm install');

// Configure husky
executeCommandInTerminal('npm run configure-husky');

// Remove current git dir
removeDir('.git');

// Init new git
executeCommandInTerminal(
  'git init && git add . && git commit -m "initial commit"',
);

console.log('Configuration has been completed.');
