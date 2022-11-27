let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let botoes = document.querySelectorAll("#Botoes-container button");
let mensagemContainer =  document.querySelector("#mensagem");
let mensagemTexto = document.querySelector("#mensagem p");

let segundoJogador; // para escolha do modo de jogo

// contador de jogadas
let jogador1 = 0;
let jogador2 = 0;

// adicionando o evento de click aos boxes

for (let i = 0; i < boxes.length; i++){
    // Quando clicar na caixa
    boxes[i].addEventListener("click", function(){

    let elemento = checaJogador(jogador1,jogador2);

        // Verifica se ja houve uma jogada
        if(this.childNodes.length == 0){

            let cloneElemento = elemento.cloneNode(true);
            this.appendChild(cloneElemento);

            // console.log(segundoJogador);

            if(jogador1 == jogador2){
                jogador1++;

                if(segundoJogador == "ia-jogador"){
                    jogador2++;
                    pcJogando();
                }
            } 
            
            else{
                jogador2++;
            }
            checaVencedor();
        }

    });
}

// Evento dos botões

for(let i = 0; i < botoes.length; i++){
    botoes[i].addEventListener("click", function(){

        segundoJogador = this.getAttribute("id");

        for(let j = 0; j < botoes.length; j++){
            botoes[j].style.display = 'none';
        }

        setTimeout(() => {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);

    });
}


// verifica de quem é a vez de jogar
function checaJogador(jogador1, jogador2){
    if (jogador1 == jogador2){
        // jogador 1 na vez
        elemento = x;
    } else{
        // jogador 2 na vez
        elemento = o;
    }

    return elemento;
}

function checaVencedor(){

    //Variáveis que recebem cada um dos 9 blocos do tabuleiro
    let bloco1 = document.getElementById("bloco-1");
    let bloco2 = document.getElementById("bloco-2");
    let bloco3 = document.getElementById("bloco-3");
    let bloco4 = document.getElementById("bloco-4");
    let bloco5 = document.getElementById("bloco-5");
    let bloco6 = document.getElementById("bloco-6");
    let bloco7 = document.getElementById("bloco-7");
    let bloco8 = document.getElementById("bloco-8");
    let bloco9 = document.getElementById("bloco-9");

    // Ganhar na horizontal
    // Verificando se há elementos na primeira horizontal

    if(bloco1.childNodes.length > 0 && bloco2.childNodes.length > 0 && bloco3.childNodes.length > 0){
        let bloco1Child = bloco1.childNodes[0].className;
        let bloco2Child = bloco2.childNodes[0].className;
        let bloco3Child = bloco3.childNodes[0].className;

        if(bloco1Child == 'x' && bloco2Child == 'x' && bloco3Child == 'x'){
            // console.log("o x ganhou na primeira horizontal!");
            mostraResultado('x');
        }

        if(bloco1Child == 'o' && bloco2Child == 'o' && bloco3Child == 'o'){
            // console.log("o o ganhou na primeira horizontal!");
            mostraResultado('o');
        }
    }

    // Verificando se há elementos na segunda horizontal

    if(bloco4.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco6.childNodes.length > 0){
        let bloco4Child = bloco4.childNodes[0].className;
        let bloco5Child = bloco5.childNodes[0].className;
        let bloco6Child = bloco6.childNodes[0].className;

        if(bloco4Child == 'x' && bloco5Child == 'x' && bloco6Child == 'x'){
            // console.log("o x ganhou na segunda horizontal!");
            mostraResultado('x');
        }

        if(bloco4Child == 'o' && bloco5Child == 'o' && bloco6Child == 'o'){
            // console.log("o o ganhou na segunda horizontal!");
            mostraResultado('o');
        }
    }

    // Verificando se há elementos na terceira horizontal

    if(bloco7.childNodes.length > 0 && bloco8.childNodes.length > 0 && bloco9.childNodes.length > 0){
        let bloco7Child = bloco7.childNodes[0].className;
        let bloco8Child = bloco8.childNodes[0].className;
        let bloco9Child = bloco9.childNodes[0].className;

        if(bloco7Child == 'x' && bloco8Child == 'x' && bloco9Child == 'x'){
            // console.log("o x ganhou na terceira horizontal!");
            mostraResultado('x');
        }

        if(bloco7Child == 'o' && bloco8Child == 'o' && bloco9Child == 'o'){
            // console.log("o o ganhou na terceira horizontal!");
            mostraResultado('o');
        }
    }

    // Ganhar na vertical
    // Verificando se há elementos na primeira vertical

    if(bloco1.childNodes.length > 0 && bloco4.childNodes.length > 0 && bloco7.childNodes.length > 0){
        let bloco1Child = bloco1.childNodes[0].className;
        let bloco4Child = bloco4.childNodes[0].className;
        let bloco7Child = bloco7.childNodes[0].className;

        if(bloco1Child == 'x' && bloco4Child == 'x' && bloco7Child == 'x'){
            // console.log("o x ganhou na primeira vertical!");
            mostraResultado('x');
        }

        if(bloco1Child == 'o' && bloco4Child == 'o' && bloco7Child == 'o'){
            // console.log("o o ganhou na primeira vertical!");
            mostraResultado('o');
        }
    }

    // Verificando se há elementos na segunda vertical

    if(bloco2.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco8.childNodes.length > 0){
        let bloco2Child = bloco2.childNodes[0].className;
        let bloco5Child = bloco5.childNodes[0].className;
        let bloco8Child = bloco8.childNodes[0].className;

        if(bloco2Child == 'x' && bloco5Child == 'x' && bloco8Child == 'x'){
            console.log("o x ganhou na segunda vertical!");
            mostraResultado('x');
        }

        if(bloco2Child == 'o' && bloco5Child == 'o' && bloco8Child == 'o'){
            console.log("o o ganhou na segunda vertical!");
            mostraResultado('o');
        }
    }

    // Verificando se há elementos na terceira vertical

    if(bloco3.childNodes.length > 0 && bloco6.childNodes.length > 0 && bloco9.childNodes.length > 0){
        let bloco3Child = bloco3.childNodes[0].className;
        let bloco6Child = bloco6.childNodes[0].className;
        let bloco9Child = bloco9.childNodes[0].className;

        if(bloco3Child == 'x' && bloco6Child == 'x' && bloco9Child == 'x'){
            // console.log("o x ganhou na terceira vertical!");
            mostraResultado('x');
        }

        if(bloco3Child == 'o' && bloco6Child == 'o' && bloco9Child == 'o'){
            // console.log("o o ganhou na terceira vertical!");
            mostraResultado('o');
        }
    }

    // Ganhar na diagonal
    // Verificando se há elementos na primeira diagonal

    if(bloco1.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco9.childNodes.length > 0){
        let bloco1Child = bloco1.childNodes[0].className;
        let bloco5Child = bloco5.childNodes[0].className;
        let bloco9Child = bloco9.childNodes[0].className;

        if(bloco1Child == 'x' && bloco5Child == 'x' && bloco9Child == 'x'){
            // console.log("o x ganhou na primeira diagonal!");
            mostraResultado('x');
        }

        if(bloco1Child == 'o' && bloco5Child == 'o' && bloco9Child == 'o'){
            // console.log("o o ganhou na primeira diagonal!");
            mostraResultado('o');
        }
    }

    // Verificando se há elementos na segunda diagonal

    if(bloco3.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco7.childNodes.length > 0){
        let bloco3Child = bloco3.childNodes[0].className;
        let bloco5Child = bloco5.childNodes[0].className;
        let bloco7Child = bloco7.childNodes[0].className;

        if(bloco3Child == 'x' && bloco5Child == 'x' && bloco7Child == 'x'){
            // console.log("o x ganhou na segunda diagonal!");
            mostraResultado('x');
        }

        if(bloco3Child == 'o' && bloco5Child == 'o' && bloco7Child == 'o'){
            // console.log("o o ganhou na segunda diagonal!");
            mostraResultado('o');
        }
    }

    // Deu velha

    let contador = 0;

    for(let i = 0; i < boxes.length; i++){
        if (boxes[i].childNodes[0] != undefined){
            // console.log(boxes[i].childNodes);
            contador++;    
        }
    }

    if(contador == 9){
        // console.log("Deu velha!");
        mostraResultado('b');
    }
    }

    // Informa o vencedor

    function mostraResultado(simbolo){

        let placarX = document.querySelector("#placar-1");
        let placarO = document.querySelector("#placar-2");
        let msg = "";

        if(simbolo == "x"){
            placarX.textContent = parseInt(placarX.textContent) + 1;
            msg = "Jogador 1 venceu!"
        } 
        else if (simbolo == 'o')
        {
            placarO.textContent = parseInt(placarO.textContent) + 1;
            msg = "Jogador 2 venceu!"
        }
        else{
            msg = "Deu velha!"
        }

        mensagemTexto.innerHTML = msg;
        mensagemContainer.classList.remove("hide");

        // remove mensagem da tela

        setTimeout(function(){
            mensagemContainer.classList.add("hide")
        }, 3000);

        // Zera as jogadas
        jogador1 = 0;
        jogador2 = 0;

        // Limpa tabuleiro
        let boxesToRemove = document.querySelectorAll(".box div"); // todos caxinhas q ja foram preenchidas
        for(let i = 0; i < boxesToRemove.length; i++){
            // console.log(boxesToRemove[i]);
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
        }

    }

    function pcJogando(){
        let cloneO = o.cloneNode(true);
        counter = 0; // conta quantas podem ser preenchidas
        filled = 0; // conta quantas ja foram preenchidas

        for (let i = 0; i < boxes.length; i++){

            let randomNumber = Math.floor(Math.random()*5);
            // console.log(randomNumber);

            if(boxes[i].childNodes[0] == undefined){
                if(randomNumber <= 1){
                    boxes[i].appendChild(cloneO);
                    counter++;
                    break;
                }

                else filled++; 
                
            }
        }

            if (counter == 0 && filled < 9){
                pcJogando();
            }
        
    }
    