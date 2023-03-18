import { execSync } from 'child_process';
import rimraf from 'rimraf';

const executeCommandInTerminal = (command) =>
  execSync(command, { stdio: 'inherit' });

console.log(
  'This is config script for the first initialization of new project.',
);

// Install modules
executeCommandInTerminal('npm install');

// Configure husky
executeCommandInTerminal('npm run configure-husky');

// Remove config dirs
rimraf.sync('.vscode');
rimraf.sync('.idea');
rimraf.sync('.husky');
rimraf.sync('.angular');

// Remove current git dir
rimraf.sync('.git');

// Init new git
executeCommandInTerminal(
  'git init && git add . && git commit -m "initial commit"',
);
