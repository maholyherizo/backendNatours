const http = require('http');

const webserver=http.createServer( (request, response) => {
    //affichons la réponse du server 
    response.end('Hello from the server');
});

webserver.listen(8080,'127.0.0.1', ()=>{
    console.log('Ecoute sur le port 8080 de localhost');
});