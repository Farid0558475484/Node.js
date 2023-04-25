// console.log(global);
console.log(process.env);

const userName = "Farid";
const sayHi = (userName) => `Hello, my name is  ${userName}`;

module.exports = {
  userName,
  sayHi,
};
