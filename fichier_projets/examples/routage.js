
const http = require('http');
const url = require('url');


const webserver=http.createServer( (request, response) => {
    // pour pouvoir analyser l'url, nous allons d'abord l'afficher.
    console.log(request.url);
    //affichons la réponse du server 
    response.end('Hello from the server');
});

webserver.listen(8080,'127.0.0.1', ()=>{
    console.log('Ecoute sur le port 8080 de localhost');
});