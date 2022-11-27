// //Criando um objeto
// let cachorro = {
//     patas: 4, 
//     nome: 'Nik',
//     //Criando um métdo do objeto
//     latir: function(){
//         console.log("Au Au");
//     }
// };

// console.log(cachorro.nome);
// console.log(cachorro.patas)
// cachorro.latir();

// //Adicionando e deletando propriedades de Objetos

// let carro = {
//     marca: "FIAT", 
//     ano: 2022,
//     portas: 4,
//     motor: 1.0
// };

// console.log(carro.portas)

// delete carro.portas

// console.log(carro.portas)

// carro.tetoSolar = true;
// console.log(carro.tetoSolar)

// console.log(carro)

// //Copiando propriedades de objetos

// let carro = {
//     marca: "FIAT", 
//     ano: 2022,
//     portas: 4,
//     motor: 1.0
// };

// let adicionais = {
//     arCondicionado: true, 
//     tetoSolar: true
// };


// console.log(carro)
// Object.assign(carro, adicionais);
// console.log(carro);

// //Chaves de um objeto

// let obj = {
//     'chave1': 1,
//     'chave2': 2,
//     'chave3': 3
// };

// chaves = Object.keys(obj);

// for (let i = 0; i<3;i++){
//     console.log(chaves[i]);
// }


// //Array Push e Pop
// // Adiciona ou remove elemento ao fim do Array

// let nomes = ['Nik', 'Chorão ','Irina']

// let nomeRemovido = nomes.pop();

// console.log(nomeRemovido);

// console.log(nomes);

// nomes.push('Arroz');

// console.log(nomes)


// // Métodos Shift e Unshift
// // Adiciona ou remove elemento do começo do Array

// let carros = ['Palio', 'Audi ','BMW']

// let carroRemovido = carros.shift();

// console.log(carroRemovido);

// carros.unshift('Chevrolet');

// console.log(carros)


// // Métodos IndexOf e LastIndexOf

// let nums = [8,1,2,5,6,96,8];

// console.log(nums.indexOf(8))
// console.log(nums.lastIndexOf(8));

// //Método Slice

// let nums = [8,1,2,5,6,96,8];

// console.log(nums.slice(1,4));
// console.log(nums.slice(5,6));

// console.log(nums.slice(-2));
// console.log(nums.slice(-3));
// console.log(nums.slice(1,-3));

// // Método forEach

// let nomes = ["João", "Antônio", "Maria", "José"];

// nomes.forEach(nome =>{
//     console.log("Meu nome é " + nome);
// });

// //Métdo includes
// let nomePessoas = ["João", "Antônio", "Maria", "José"];
// console.log(nomePessoas.includes("João"));
// console.log(nomePessoas.includes("Marcos"));

// // Método Reverse
// let nums = [5,1,2,5,6,3];

// console.log(nums.reverse());

// //Método de String trim

// let texto = "\n teste \n";
// console.log(texto);
// console.log(texto.trim());

// // método padStart
// // Adiciona caracteres a String

// let sku = "34";

// console.log(sku.padStart(6, "0"));

// // Método Split
// // divide a string em um Array

// let frase = "O rato roeu a roupa do rei de Roma";

// let palavras = frase.split(" ");

// palavras.forEach(palavra =>{
//     console.log("a palavra é " + palavra);
// });


// // Método Join
// // Contrário do split, peaga um array e transforma em string

// let frase = "O rato roeu a roupa do rei de Roma";

// let palavras = frase.split(" ");

// let novaPalavra = palavras.join("-");
// console.log(novaPalavra);


// // Rest Operator
// // Converte os argumentos de uma função em array

// let num = 0;
// let num1 = 4;
// let num2 = 6;

// function imprimirNumeros(...args){
//     for (let i = 0; i< args.length; i++){
//         console.log(args[i]);
//     }
// }

// imprimirNumeros(num, num1, num2);
// imprimirNumeros(0,5,534,4,87,6);

// //Destructing Objeto
// // Permite definir variáveis que vão receber os valores das propriedades de um objeto

// let meuCarro = {
//     marca: "FIAT", 
//     ano: 2003,
//     portas: 4,
//     motor: 1.0
// };

// const {marca: vMArca, ano: vAno, motor: vMotor} = meuCarro;

// console.log(vMArca);
// console.log(vAno);
// console.log(vMotor);


// // Destructing Array
// // Permite definir variáveis que vão receber os valores das propriedades de um Array

// let frutas = ["Maçã", "Manga", "Abacaxi"];

// let [frutaA, frutaB, frutaC] = frutas;

// console.log(frutaA);
// console.log(frutaC);

// //JSON

// let pessoa = {
//     "nome":"João", 
//     "idade":15
// }

// console.log(pessoa.idade)

//Conveter JSON para String ou vice-versa

let pessoa = {
    "nome":"João", 
    "idade":15,
    "profissão": "engenheiro"
}

let pessoaTexto = JSON.stringify(pessoa); //converte JSON para String

console.log(pessoaTexto);
console.log(pessoaTexto.split(":"));

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
console.log(pessoaJSON.nome);
