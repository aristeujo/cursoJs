class Banco{
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }

    deposito(tipo,valor){
        if(tipo == "Poupanca"){
            this.saldoPoupanca += valor;
            console.log("Você depositou R$ " + valor + " na Conta Poupança.");
        }

        if(tipo == "Corrente"){
            this.saldoCorrente += valor;
            console.log("Você depositou R$ " + valor + " na Conta Corrente.");
        }

    }

    saque(tipo,valor){
        if(tipo == "Poupanca"){
            if(this.saldoPoupanca < valor){
                console.log("Saldo insuficiente!");
            } 

            else{
                this.saldoPoupanca -= valor;
                console.log("Você sacou R$ " + valor + " da Conta Poupança.");
            }

        }

        if(tipo == "Corrente"){
            if(this.saldoCorrente < valor){
                console.log("Saldo insuficiente!");
            } 

            else{
                this.saldoCorrente -= valor;
                console.log("Você sacou R$ " + valor + " da Conta Corrente.");
            }
        }
    }

        transferir(valor){
            if (this.saldoPoupanca > valor){
            this.saldoPoupanca -= valor; 
            this.saldoCorrente += valor;
            }

            else{
                console.log("Saldo insuficiente!");
            }
        }
    
    jurosAniversario(){
        let juros = (this.saldoPoupanca*this.jurosPoupanca)/100;

        this.saldoPoupanca += juros;
    }
}

let contaNormal = new Banco(100,50,0.2);

contaNormal.deposito("Poupanca", 150);
console.log(contaNormal);

contaNormal.saque("Corrente", 100);
console.log(contaNormal);

contaNormal.transferir(60);
console.log(contaNormal);

contaNormal.jurosAniversario();

console.log(contaNormal);

// Crianda uma nova classe que é herdeira da classe Banco
class Banco2 extends Banco{
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        super(saldoCorrente, saldoPoupanca, jurosPoupanca*2);
    }
}

let contaNova = new Banco2(120,150,1);

console.log(contaNova);

contaNova.jurosAniversario();
contaNova.saque("Poupanca", 60);

console.log(contaNova);