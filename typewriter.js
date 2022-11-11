const sentence = "hello there from lighthouse labs";
let timer = 0
for (const char of sentence) {
  timer += 500
  setTimeout(() => {
    // print the char here
    // console.log(timer)
    process.stdout.write(char);
  }, timer); // <= 1s delay to make it noticeable. Can dial it down later
}
setTimeout(() => {
  // console.log()
  process.stdout.write('\n');
}, timer)
