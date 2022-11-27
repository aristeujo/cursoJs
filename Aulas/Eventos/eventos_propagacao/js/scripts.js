// Como criar um evento

let btn = document.getElementById('btn');

function msg(e){
    console.log("Fui clicado!");
    // console.log(e);
    e.stopPropagation(); // evita de executar eventos de fora do botão

}

btn.addEventListener('click', msg);

// Como remover evento

let btn_2 = document.getElementById('btn_2');
btn_2.addEventListener('click', function(e){
    btn.removeEventListener('click', msg);
    console.log("Evento removido com sucesso!");
    // console.log(e);
});

let p = document.querySelector('p');

p.addEventListener('click', function(){
    console.log("Evento do paragrafo1");
});

