const {createServer} = require('http');

let server = createServer(function(resquest, response){
    response.writeHead(200, {"Content-Type": "text/html"}); 
    response.write(`
        <h1>Hello World, server!</h1>
        <div> 
            <p>Primeira pagina com Node.js</p>
            <button>Botao de teste</button>
        </div>
        `);
        response.end(); // finaliza a resposta
});

server.listen(8000);
console.log("Ouvindo a porta 8000!");