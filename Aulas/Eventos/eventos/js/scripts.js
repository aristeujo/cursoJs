// Como criar um evento

let btn = document.getElementById('btn');

function msg(e){
    console.log("Fui clicado!");
    console.log(e);
}

btn.addEventListener('click', msg);

// Como remover evento

let btn_2 = document.getElementById('btn_2');
btn_2.addEventListener('click', function(e){
    btn.removeEventListener('click', msg);
    console.log("Evento removido com sucesso!");
    console.log(e);
});

