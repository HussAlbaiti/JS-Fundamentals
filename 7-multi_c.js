const message= "C is fun";
const arg= process.argv[2];
const num = Number(arg);
if (isNaN(num)) {
  console.log("Missing number of occurrences");
}
else {
    for (let i = 0; i < num; i++) {
        console.log(message);
    }
}