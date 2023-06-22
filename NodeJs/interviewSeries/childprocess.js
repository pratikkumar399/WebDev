const { spawn } = require('child_process');
const cp = require('child_process');
// Spawn a child process to execute a command
const childProcess = spawn('ls', ['-l', '-a']);

// Capture the output of the child process
childProcess.stdout.on('data', (data) => {
    console.log(`Child process output:\n${data}`);
});

// Handle any error that occurs in the child process
childProcess.on('error', (err) => {
    console.error('Child process error:', err);
});

// Handle the child process exit event
childProcess.on('exit', (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
});

const output = cp.execSync('node chaining.js');
console.log(output.toString());

