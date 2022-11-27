// Acessando elementos do DOM

console.log(document.getElementById('titulo-principal'));
console.log(document.getElementById('paragrafo-principal'));

console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('itens-azuis'));
console.log(document.getElementsByClassName('itens-vermelhos'));
console.log(document.getElementsByClassName('itens'));

console.log(document.querySelector('#container-principal h1'));
console.log(document.querySelector('div div p'));
console.log(document.querySelector('ul .itens-azuis'));

// Alterando o DOM com insertBefore()

let novoElemento = document.createElement('p');

let texto = document.createTextNode("texto do paragrafo dentro do container-principal\n"); 

novoElemento.appendChild(texto); // Adiciona um texto ao atributo texto do novo elemento

let elementoAlvo = document.querySelector('#titulo-principal'); // elemento de referência, ou seja, o q vem depois do novo elemento adicionado
let elementoPai = document.querySelector('#container-principal'); // elemento pai

elementoPai.insertBefore(novoElemento, elementoAlvo);

// Alterando o DOM com appendChild

let novoElemento_1 = document.createElement('p');
let texto_1 = document.createTextNode("\nTexto do novo elemento adicionado ao fim do elemento pai");

novoElemento_1.appendChild(texto_1); // adicionando um texto ao atributo texto do novo elemento

let p = document.querySelector('#paragrafo-box'); // elemento de referência
let pai = p.parentNode; // retorna quem é o elemento pai da referência

pai.appendChild(novoElemento_1); // adiciona o novo elemento ao fim do elemento pai

// // Alterando o DOM com o replaceChild

// let novoElemento_2 = document.createElement('p');
// let texto_2 = document.createTextNode("\nTexto do elemento");

// novoElemento_2.appendChild(texto_2); // adicionando um texto ao atributo texto do novo elemento

// let heading = document.querySelector("#titulo-principal"); // Seleciona o elemento a ser alterado
// let paiHeading = heading.parentNode;

// paiHeading.replaceChild(novoElemento_2, heading); // altera o tipo do elemento, nesse caso, de h1 para p

// Atributos

let a = document.querySelector('footer a');

console.log(a.getAttribute('href'));

let link = "https://www.youtube.com";

a.setAttribute('href', link);

console.log(a.getAttribute('href'));

a.textContent = "Link Youtube";

// Alterando o CSS

let elemento = document.querySelector('#titulo-principal');
 
setTimeout(() => {
    elemento.style.color = 'green';
    elemento.style.backgroundColor = 'yellow';
    elemento.style.width = '200px';

}, 2000);
