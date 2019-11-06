 // importer le module file system
 const fs = require('fs');
 // lire un fichier et mettre son résultat dans une var textIn
 const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
 // afficher le contenu de la variable
 console.log(textIn);