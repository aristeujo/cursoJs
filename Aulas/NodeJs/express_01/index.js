let express = require('express'); // solicita a API
let app = express(); // instancia a API para ter acesso aos métodos

app.get('/', function(request, response){ // usando o verbo GET do http para receber uma mensagem
    response.send("Primeira rota com express!"); // enviando a mensagem
});

app.get('/teste', function(request, response){
    response.send("Testando outra rota...");
})

app.listen(3000, function(){ // abre a porta 3000 
    console.log("A aplicação está funcionando na porta 3000");
});