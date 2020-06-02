const timerArray= process.argv.slice(2).sort((a,b) => a - b);
console.log(timerArray)
// sorts user input command line argument

if (timerArray === []) {
  // no arguments passed
  process.end(1);
} else {
  for (let timer of timerArray) {
    if (Number(timer)) {
      setTimeout(() => process.stdout.write('\x07'), Number(timer)*1000);
    }

  }
}
