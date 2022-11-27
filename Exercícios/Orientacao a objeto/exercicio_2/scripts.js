class Carrinho{
    constructor(itens, quantidadeTotal, valorTotal) {
        this.itens = itens;
        this.quantidadeTotal = quantidadeTotal;
        this.valorTotal = valorTotal;       
    }

    adicionarItem(item){

        let contador = 0;

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].quantidade += item.quantidade;
                contador = 1;
            }
        }

        if (contador == 0){
            console.log("Item novo adicionado!");
            this.itens.push(item);
        }

        this.quantidadeTotal += item.quantidade;
        this.valorTotal += item.preco*item.quantidade;
    }

    removeItem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                let obj = this.itens[itemCarrinho];

                let index = this.itens.findIndex(function(obj){return obj.id == item.id})

                this.quantidadeTotal -= this.itens[itemCarrinho].quantidade;
                this.valorTotal -= this.itens[itemCarrinho].preco*this.itens[itemCarrinho].quantidade;
                
                this.itens.splice(index, 1);

                console.log("Item removido!");
            }

        }
    }
}

let carrinho = new Carrinho([
{
    id: 1, 
    nome: "Camisa", 
    quantidade: 2,
    preco: 50
}, 
{
    id: 2, 
    nome: "meia", 
    quantidade: 5, 
    preco: 5
}
], 7, 135);

console.log(carrinho);

carrinho.adicionarItem({id: 1, nome:"camisa", quantidade: 1, preco: 50});
carrinho.adicionarItem({id:3, nome:"calca", quantidade: 1, preco: 90});
console.log(carrinho);

carrinho.removeItem({id:2, nome:"meia", quantidade: 1, preco: 5});

console.log(carrinho);

carrinho.removeItem({id:4, nome:"meia", quantidade: 1, preco: 5});


