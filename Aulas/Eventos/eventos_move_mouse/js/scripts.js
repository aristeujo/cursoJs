// imprime as coordenadas do mouse em x e y

// window.addEventListener("mousemove", function(e){
//     console.log(e.x);
//     console.log(e.y);
// })

// // evento por Scroll

// window.addEventListener("scroll", function(e){
//     if(window.pageYOffset > 1000){
//         console.log("Iniciou!!");
//     }
// })

// // Evento por foco

// let input = document.querySelector("input");

// input.addEventListener("focus", function(){
//     console.log("Entrou no input");
// });

// input.addEventListener("blur", function(){
//     console.log("Saiu do input");
// });

// // Debounce

let timeout;

window.addEventListener("mousemove", function(e){
    clearTimeout(timeout);
    timeout = this.setTimeout(function(){
        console.log(e.x);
    }, 100);
});