const fs=require('fs');

fs.readFile('./1-node-farm/starter/txt/start.txt','utf-8', (err,data)=>{
    if (err){
        throw err;
    }
    else 
    {
        console.log('Lecture de start.txt est fait. Les données lues sont : ', data);
        console.log ('on va lire le fichier ' , `${data}`+'.txt');
        fs.readFile('./1-node-farm/starter/txt/'+`${data}`+'.txt','utf-8', (err,data2)=>{
            if (err){
                throw err;
            }
            else 
            {
                console.log(data2);
            }
        });
        console.log('Le contenu du fichier ', `${data}`+'.txt est :')
    }
});