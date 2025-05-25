const arg1=process.argv[2];
const arg2=process.argv[3];

const num1=Number(arg1);
const num2=Number(arg2);

function add(a, b) {
  console.log(a + b);
}
add(num1, num2);
