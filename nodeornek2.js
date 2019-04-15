const http=require('http');
const fs=require('fs');
const myserver=http.createServer((req,res)=>{
console.log("requesr geldi");
if(req.url=="/"){
res.writeHead(200,{contentType:'text/html',encoding:'utf8'});
res.write("merhaba");
res.end();
}else if(req.url==="/About"){// 3 tane eşittir type kontrolüde yapar
    fs.readFile('about.html',(err,data)=>{
        res.writeHead(200,{contentType:'text/html',encoding:'utf8'});
        res.write(data);
        res.end();
    })

}
})
myserver.listen(1200);