const exec = require('child_process').exec;
const server = exec('npm run serve:release');
let retries = 3;
let testsCode = null;
server.stderr.on('data', function(data) {
	console.log(data);
});

server.stdout.on('data', function(data) {
	console.log(data);
});

const tests = exec('npm run e2e:release');

tests.stderr.on('data', function(data) {
	console.log(data);
});

tests.stdout.on('data', function(data) {
  console.log(data);
});

tests.on('close', function(code) {
	testsCode = code;
	console.log('closing code: ' + code);
	console.log('serverPID: ' + server.pid);

	let killServer = exec('taskkill /PID ' + server.pid + ' /T /F', killTheServer);

});

function killTheServer(error, stdout, stderr) {

	if (error) {
		console.error(`exec error: ${error}`);

		if(retries < 3) {
			retries++;
			console.log(`Failed to kill the process. Retrying, attempt ${retries} of 3`);
			console.log('serverPID: ' + server.pid);
			exec('taskkill /PID ' + server.pid + ' /T /F', killTheServer);
		}
	}

	console.log(`stdout: ${stdout}`);
	console.log(`stderr: ${stderr}`);

	process.exit(testsCode);

}
