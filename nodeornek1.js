const fs=require('fs');

fs.writeFile('merhaba.txt',"Merhaba",function(err){
    //console.log(err);
    if (err==null)
    console.log("Dosya yazma işlemi başarılı.");
});

fs.readFile('merhaba.txt',{encoding:"utf8"},(err,data)=>{
    if (err==null){
    console.log(data);
    }
});
