import { execSync } from 'child_process';
import fs from 'fs';
import * as readline from 'readline';

const REQUIRED_NODEJS_VERSION = 'v18.17.1';
const GIT_REGEX = new RegExp(
  /((http|git|ssh|http(s)|file|\/?)|(git@[\w\.]+))(:(\/\/)?)([\w\.@\:/\-~]+)(\.git)(\/)?/,
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const executeCommandInTerminal = (command) => {
  console.log(`Starting ${command}...`);

  execSync(command, { stdio: 'inherit' });
};

const removeDir = (path) => {
  console.log(`Removing ${path}...`);

  fs.rmSync(path, { recursive: true, force: true });
};

console.log('Checking you node.js version...');

if (process.version !== REQUIRED_NODEJS_VERSION) {
  console.log(`Error! Please install node.js ${REQUIRED_NODEJS_VERSION}!`);
  process.exit(1);
}

console.log(`You node.js version is ${REQUIRED_NODEJS_VERSION}`);

console.log(
  'This is config script for the first initialization of new a project.',
);

rl.question(
  'Give me a link to you repository.\nFor example: https://gitlab.extrawest.com/andrii.zhyhariev/angular-app-starter.git\nYour link: ',
  (answer) => {
    if (!answer || !GIT_REGEX.test(answer)) {
      console.log('Process interrupted.\nYour git link is not valid!');

      process.exit(1);
    }

    const gitLink = answer;

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

    // Add remote
    executeCommandInTerminal(`git remote add origin ${gitLink}`);

    console.log('Configuration has been completed.');

    process.exit(0);
  },
);
