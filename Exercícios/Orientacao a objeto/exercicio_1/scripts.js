
class Banco{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.saldo = 0;
    }

    deposito(valor){
        this.saldo += valor;
        console.log("Você depositou R$ " + valor);
    }

    saque(valor){
      
        if(this.saldo < valor){
            console.log("Saldo insuficiente!");
        } 
        
        else{
            this.saldo -= valor;
            console.log("Você sacou R$ " + valor);
        }
    }

    verSaldo(){
        console.log("O seu saldo é R$ " + this.saldo);
    }
}

let usuario1 = new Banco("João Aristeu", 18);

usuario1.verSaldo();
usuario1.deposito(500);
usuario1.verSaldo();

console.log(usuario1);

usuario1.saque(200);

usuario1.saque(400);

console.log(usuario1);