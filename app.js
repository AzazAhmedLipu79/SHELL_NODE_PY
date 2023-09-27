const { exec } = require("child_process");
const readline = require("readline");

let code = "";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.prompt();

rl.on("line", (input) => {
  if (input.trim() === "") {
    rl.close();
  } else {
    code += input + "\n";
  }
});

rl.on("close", () => {
  exec(`python main.py "${code}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
});
