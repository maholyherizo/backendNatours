## I. Installation et introduction  de nodejs
### 1. Installation de nodejs:
- desinstaller la version de NodeJs sur votre machine

```bash
patou@pc-pa:~$ aptitude search nodejs
  i   nodejs           - evented I/O for V8 javascript     
  v   nodejs-abi-46    -                               
  p   nodejs-dbg       - evented I/O for V8 javascript (debug)
  p   nodejs-dev       - evented I/O for V8 javascript (development files)
  p   nodejs-legacy    - evented I/O for V8 javascript (legacy symlink)    

```
(i) signifie que le package est installé. Donc il faut le desinstaller par:

```bash
patou@pc-pa:~$ sudo apt-get remove nodejs
```
- télécharger NodeJs sur le site officiel (https://nodejs.org), décompressez-le dans /opt et renommer le répertoire en nodejs.
Rajouter ensuite ce chemin dans .profile et .bashrc (nous utiliserons la version 12.x.x.x en date du 29/10/2019).
Ce qu'on rajoute dans .profile est le PATH vers nodejs/bin (il en est de même pour .bashrc).

**export PATH="$PATH:$JAVA_HOME/bin:/opt/jin-2.14.1-unix/jin-2.14.1:/opt/smartgit/bin:/opt/eclipse:/opt/firefox<span style="color:red">:/opt/nodejs/bin </span>"**

il faut ensuite tester nodejs si on l'a bien installé. Cela se fait par:

```bash
patou@pc-pa:~$ node -v
```
```bash
v12.13.0
```

### 2. Qu'est-ce que NoDEJs?
Nodejs est un environnement d'execution de Javascript muni des librairies de code Javascript.
Cela signifie qu'avec Node, on n'a plus besoin d'un navigateur pour executer Js mais on peut l'executer comme un programme en C++ ou en Python. Cela permet d'utiliser le js en tant que langage server-side (comme php ou python)


### 3. Resumé sur fonctionalités et cas d'utilisation de NodeJs

Presentation de NodeJs

![Alt](img/nodejs_pro_cons.png "Title")


##  II. Apprentissage de NodeJS
Pour commencer, nous allons apprendre NodeJS. Beaucoup de chose seront difficile au début (ou ne seront pas explicable) mais notre objectif est d'abord de coder en NodeJS. Plus tard, ces éléments seront clarifiés.

### 1. Téléchargement des sources des projets

Pour commencer, télécharger sur votre PC les codes sources de départ. Pour cela, forker le projet github suivant: (https://github.com/ajocelynpatrick/complete-node-bootcamp.git).

Ensuite choisissez un emplacement sur votre PC. Pour ma part, j'ai créé le répertoire  /home/patou/Documents/bizna/pasFini/ et je mettrai mon code source dedans (vous pouvez également le mettre sur le bureau). Pour cela, il faut :

```bash
patou@pc-pa:~$ cd /home/patou/Documents/bizna/pasFini/
patou@pc-pa:~/Documents/bizna/pasFini$ git clone https://github.com/ajocelynpatrick/complete-node-bootcamp.git
Cloning into 'complete-node-bootcamp'...
remote: Enumerating objects: 372, done.
Receiving objects:  93% (349/372), 41.04 MiB | 1.47 MiB/s
```
pour vérifier qu'on a bien descendu le dépôt git, il faut:

  ```zsh
    patou@pc-pa:~/Documents/bizna/pasFini$ ls
    backendNatours  complete-node-bootcamp  DjangoProj  OmniFood
  ```

on retrouve bien <span style="background-color:green">complete-node-bootcamp</span>


### 2. Interaction avec la ligne de commande NodeJS
Dans la suite, nous allons utiliser VSCode comme IDE.
Nous allons utiliser la ligne de commande fourni dans VSCode (mais on peut égalment utiliser la console linux car c'est la même ligne de commande).

- <u>Premier programme sous NodeJS</u>

  Pour écrire notre premier programme Node, nous allons utiliser la ligne de commande node en tapant ``"node"`` à la ligne de commande (utiliser soit la console soit le terminal sous vscode)

    ```bash
       patou@pc-pa:~$ node
       Welcome to Node.js v12.13.0.
       Type ".help" for more information.
       >
       > const name ='Patrick'
       undefined
       > 7+3
       10

       > .exit
    ```
Ce genre de ligne de commande s'appelle REPL (Read Eval Printing Loop)

**<u>Astuces</u>**
 - <u>Dans le code node suivant </u>:

```js
    > 24+2
    26
    > _+4  
    30

```

  '\_" signifie le résultat de l'opération précédent

 - <u>Tester la touche "tabulation"</u>
Afficher les méthodes d'une classe donnée (exemple de la classe String)

```js
> String.
String.__defineGetter__      String.__defineSetter__      String.__lookupGetter__      String.__lookupSetter__      String.__proto__
String.hasOwnProperty        String.isPrototypeOf         String.propertyIsEnumerable  String.toLocaleString        String.valueOf

String.apply                 String.arguments             String.bind                  String.call                  String.caller
String.constructor           String.toString              

String.fromCharCode          String.fromCodePoint         String.length                String.name                  String.prototype
String.raw

```

### 3. Premier programme en javascript sous vscode

Dans cette section nous allons créer un programme en js sous vscode. Importer le répertoire de notre projet sous vscode (comme on le ferait sous Atom ou Brackets <=> Open Folder).

Vous devriez avoir une interface comme dans la figure ci-dessous:

![Alt](img/vscode_projet.png "Title")

Ensuite créer un fichier index.js dans le projet (enregistrer dans le répertoire principal pour le moment)

Le contenu de notre fihier index.js sera comme suit:

```js
    const hello = "Hello";
    console.log(hello);
```
Sauvegarder le fichier. Normalement, nous devions executer ce code dans navigateur (en utilisant une page web pour le charger). Cependant, avec NodeJs, nous allons le lancer comme un executable ou un script.

Ouvrer un terminal, il est intéressant de savoir que vscode peut aussi ouvrir un terminal (pour moi Alt+T ouvre un terminal sur le projet)

``` bash
patou@pc-pa:~/Documents/bizna/pasFini/backendNatours$ node index.js
Hello
```

### 4. Documentation de NodeJs

Afin de pouvoir mieux se former sur NodeJs, voici la documentation officielle (https://nodejs.org/dist/latest-v12.x/docs/api/synopsis.html)

Par exemple, on retrouve dans la section REPL (chercher plus bas dans le menu de gauche), la documentation sur le REPL
(https://nodejs.org/dist/latest-v12.x/docs/api/repl.html). Les sections qu'on voit dans le menu de gauche sont appelé des modules. Pour utiliser un module, il faut l'importer.

Exemple d'import du module fs (https://nodejs.org/dist/latest-v12.x/docs/api/fs.html)

```js
const fs = require('fs');
```

### 5. Lecture d'un fichier en Javascript
Nous allons utiliser le module FS (File System) avec sa fonction `readFileSync()`. Cette fonction permet de lire un fichier de manière synchrone (c'est à dire que le code ne continue pas tant que la lecture n'est pas fini).


Nous allons d'abord copier le répertoire Node-Farm des exemples dans notre répertoire des projets et surtout supprimer le répertoire final et ne garder que starter.

Vous devriez avoir le projet ci-dessous

![Alt](img/prj_rajout_nodefarm.png "vscode_proj")

Ensuite nous allons modifier notre fichier index.js. Nous allons:

- effacer le contenu complet du fichier
- importer le module file system
  ```js
  const fs = require('fs')
  ```
- lire le texte input.txt qui est dans le répertoire txt de node-farm. Pour cela, nous allons utiliser la fonction `readFileSync()` et récupérer son retour dans une variable appelé `textIn`.

Notre code devrait ressembler à ceci:

```js
 // importer le module file system
const fs = require('fs');
// lire un fichier et mettre son résultat dans une var textIn
const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
// afficher le contenu de la variable
console.log(textIn);
```

L'execution du code nous donne:

```bash
patou@pc-pa:~/Documents/bizna/pasFini/backendNatours$ node index.js
The avocado 🥑 is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content 😄
```

### 6. Ecriture/Creation d'un fichier en Javascript

Nous allons maintenant modifier le même programme dans `index.js` et créer un texte que nous allons écrire dans un nouveau fichier texte.

```js
// texte à ecrire dans un fichier 
// les guillements sont des backticks (AltGr+7 et espace).
// c'est une manière de concatener un string sous ES6 (une version meilleur de js)
const textOut = `This is what we know about the avocado: \n${textIn}. \nThis text was created on ${Date.now().toString()}`
// ecrire dans un fichier ecriture.txt dont on donne le chemin relatif (ou complet)
fs.writeFileSync('1-node-farm/starter/txt/ecriture.txt',textOut,'utf-8')
console.log(textOut)
```
### 7. Challenge et apprentissage:

Pour se familiariser aux variables en js, lire la doc et faire le challenge Day 1 de javascript sur hackerrank.
https://www.hackerrank.com/challenges/js10-let-and-const/

![Alt](img/hackerrank_chall.png "challenge1")











cxc
