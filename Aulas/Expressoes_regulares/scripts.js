// Criando uma expressão regular
// Existem as duas formas abaixo

// let reg1 = new RegExp("test");
// let reg2 = /test/;

// //Verificando padrões com regex

// console.log(reg1.test("sdatestando"));
// console.log(/cao/.test("construcao"));
// console.log(reg2.test("aviao"));

//Conjuntos

const reg1 = /[123456]/;

console.log(reg1.test("temos 12"));
console.log(reg1.test("temos 5"));

const reg2 = /[0-11]/;
console.log(reg2.test("5"));
console.log(reg2.test("temos"));

