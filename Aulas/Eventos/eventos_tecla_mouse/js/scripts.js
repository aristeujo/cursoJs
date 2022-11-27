window.addEventListener("keydown", function(e){

    if(e.key == "Enter"){
        console.log("Pressionando a tecla ENTER");
    } else if(e.key == "x"){
        console.log("Pressionando a tecla X");
    }

});

window.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        console.log("Soltando a tecla ENTER");
    } else if(e.key == "x"){
        console.log("Soltando a tecla X");
    }
});

// eventos para botão do mouse

let btn_mouse = document.querySelector("#btn");

btn_mouse.addEventListener("mousedown", function(){
    console.log("Apertou o botão do mouse!");
});

btn_mouse.addEventListener("mouseup", function(){
    console.log("Soltou o botão do mouse!");
});

let btn_mouse_2 = document.querySelector("#btn_2");

btn_mouse_2.addEventListener("dblclick", function(){
    console.log("Deu duplo click no botão!");
});

btn_mouse_2.addEventListener("contextmenu", function(e){
    e.preventDefault();
    console.log("Acionando evento com botão direito!");
});