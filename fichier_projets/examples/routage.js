
const http = require('http');
const url = require('url');


const webserver=http.createServer( (request, response) => {
    // pour pouvoir analyser l'url, nous allons d'abord l'afficher.
    console.log(request.url);
    const pathName = request.url;
    //  || est l'opérateur OU en javascript
    // === est l'operateur de comparaison de chaine de caractère en js
    // doc officiel https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_de_comparaison
    response.setHeader("Content-Type", "application/json; charset=utf-8");

    if (pathName === '/' || pathName === '/overview')
    {
        //affichons la réponse du server 
        response.end('Ceci est l\'OVERVIEW');
    }
    else if (pathName==='/product')
    {
        //affichons la réponse du server 
        response.end('Ceci est le PRODUCT');
    }
    else 
    {
        response.end('Page non trouvé');
    }

});

webserver.listen(8080,'127.0.0.1', ()=>{
    console.log('Ecoute sur le port 8080 de localhost');
});