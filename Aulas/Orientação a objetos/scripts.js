// Criando métodos
// Métodos get e set

// let cachorro = {
//     nome: "Irina", 
//     raca: "SRD", 
//     idade: 1, 
//     latir: function(){
//         console.log("Au au au");
//     },
//     setIdade: function(idade){
//         this.idade = idade;
//     },
//     getIdade: function(){
//         return this.nome + " tem " + this.idade; 
//     }
// };

// console.log(cachorro.idade);

// console.log(cachorro.nome);

// cachorro.setIdade(7);
 
// console.log(cachorro.idade);

// console.log(cachorro.getIdade())



//Prototype
// Permite compartilhamento de propriedades e métodos

// const cachorroNovo = Object.create(cachorro);

// console.log(cachorroNovo.nome);
    
// console.log(cachorroNovo.hasOwnProperty('raca'));

// console.log(Object.getPrototypeOf(cachorroNovo) === cachorro);


// //Classes
// let cachorro = {
//     nome: "Irina", 
//     raca: "SRD", 
//     idade: 1, 
//     latir: function(){
//         console.log("Au au au");
//     },
//     setIdade: function(idade){
//         this.idade = idade;
//     },
//     getIdade: function(){
//         return this.nome + " tem " + this.idade; 
//     }
// };


// let pastor = Object.create(cachorro);

// pastor.raca = "Pastor Alemão";
// pastor.nome = "Nik";
// pastor.idade = 5;

// console.log(cachorro);
// console.log(pastor);

// //Usando construtor para criar um nome objeto/ fazer uma instância de uma classe
// function criarCachorro(nome, raca, idade){
//     let cachorro = Object.create({});
//     cachorro.raca = raca;
//     cachorro.idade = idade;
//     cachorro.nome = nome;

//     return cachorro;
// }

// let doberman = criarCachorro('Russo', 'Doberman', 2);

// console.log(doberman);

// instanciar um obj usando new

// function Cachorro (nome, idade, raca){
//     this.nome = nome;
//     this.idade = idade;
//     this.raca = raca;
// }

// let husky = new Cachorro('jack', 5, 'Husky');

// console.log(husky);

// // Criando método com prototype

// Cachorro.prototype.latir = function(){
//     console.log("au au au!");
// }
// Cachorro.prototype.setNome = function(nome){
//     this.nome = nome;
// }

// husky.setNome('john');
// husky.latir();

// console.log(husky);

//Criando classes com ES6

class Cachorro{
    constructor(raca, pata, cor){
        this.raca = raca;
        this.pata = pata;
        this.cor = cor;
    }
}

let labrador = new Cachorro('Labrador', 4, 'branco');

console.log(labrador);