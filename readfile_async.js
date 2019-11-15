const fs=require('fs')

fs.readFile ('./1-node-farm/starter/txt/input.txt', 'utf-8', function(err, data) {
    if (err) {
      throw err;
    }
    console.log(data);
  });

  console.log('debut de lecture de fichier ....');