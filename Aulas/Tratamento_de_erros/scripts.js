// function checarNumero(num){
//     let number = Number(num);
//     if(Number.isNaN(number)){
//         console.log("Passe só números!");
//     }
//     else{
//         return number;
//     }
// }

// checarNumero(5);
// checarNumero("dcds");

// //Exceptions

// function saudacao(nome){
//     if(typeof nome != 'string'){
//         throw new Error("O parâmetro nome deve ser uma string");
//     }
//     else{
//         console.log(`Olá ${nome}!`);
//     }
// }

// saudacao("João");

// saudacao(1);

// // Try e Catch

// try{

//     let a = 2 + b;

// }catch(error){
//     console.log("Algo está errado: " + error)
// }

// Try e Catch e Finally

try{
    let a  = b + 3;
}catch(e){
    console.log(e);
}finally {
        console.log("Executou");
}