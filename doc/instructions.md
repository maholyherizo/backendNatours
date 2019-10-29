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

