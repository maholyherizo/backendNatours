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
                console.log(`${data2}`);
                console.log('maintenant on va lire append.txt:');
                fs.readFile('./1-node-farm/starter/txt/append.txt', 'utf-8', (err,data3)=>{
                    if (err)
                    {
                        throw err;
                    }
                    else 
                    {
                        console.log(data3);
                        fs.writeFile('./1-node-farm/starter/txt/output.txt',`${data2}\n${data3}`,err=>{
                            console.log('le fichier final a été créé et écrit avec data2 et data3')
                        });
                    }
                });
            }
        });
        console.log('Le contenu du fichier ', `${data}`+'.txt est :')
    }
});