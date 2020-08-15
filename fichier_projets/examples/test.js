const fs=require('fs');

console.log("Debut");

fs.readFile('./1-node-farm/starter/txt/start.txt','utf-8', (err,data)=>{
    if (err){
        throw err;
    }
    else 
    {
        console.log(data);
    }
});

console.log("fin");