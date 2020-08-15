// importer le module file system
const fs = require('fs');
// lire un fichier et mettre son résultat dans une var textIn
// donner l'encodage pour pouvoir supporter les accents
const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
// afficher le contenu de la variable
console.log(textIn);
console.log('**************** separation **********************')
// texte à ecrire dans un fichier 
// les guillements sont des backticks (AltGr+7 et espace).
// c'est une manière de concatener un string sous ES6 (une version meilleur de js)
 const textOut = `This is what we know about the avocado: \n${textIn}. \nThis text was created on ${Date.now().toString()}`
// ecrire dans un fichier
fs.writeFileSync('1-node-farm/starter/txt/ecriture.txt',textOut,'utf-8')
console.log(textOut)