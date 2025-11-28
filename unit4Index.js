const http = require("http");
const fs = require("fs");
const url = require("url");
const server = (req, res) => {
    res.writeHeader(200,{"Content-type": "text/html"});
    if(req.url === "/"){
      res.write("Welcome to our server"); 
      res.end();
    }

    else if(req.url === "/about"){
        res.write("Created by NODE.JS");
        res.end();
    } 

    if(req.url === "/rfile"){
        fs.readFile("indexPromise.js","utf-8",(error, data) => {
            if(error){
                console.log(error);
            }else{
                res.write(<pre>${data}</pre>);
                res.end();
            }
        });
    }

    if(req.url === "/wfile"){
        let fileData = `This is created by fs module`;
        fs.writeFile("data.txt", fileData, (error) => {
            if(error){
                console.log(error);
            }else{
                res.write("File written successfully");
                res.end();
            }
        });
    }
    
    if(req.url === "/copyfile"){
        fs.copyFile("indexCallBack.js", "indexCallBackCopy.js", (error) => {
            if(error){
                console.log(error);
            }else{
                res.write("File copied successfully");
                res.end();
            }
        });
    }

    const filename = req.url.split('/')[2];
    if(req.url === `/delfile/${filename}`){
        fs.unlink(filename, (error) => {
            if(error){
                console.log(error);
            }else{
                res.write(`File deleted successfully:${filename}`);
                res.end();
            }
        });
    }

    const paramQuery = url.parse(req.url, true);
    let dirname = paramQuery.query.name;
    if(req.url === `mkdir?dir=${dirname}`){
        fs.mkdir(dirname,{recursive:true, force:true}, (error) => {
            if(error){
                console.log(error);
            }else{
                res.write(`Directory created: ${dirname}`);
                res.end();
            }
        });
    }
}

http.createServer(server)
    .listen(3000, (error) => {
    if(error){
        console.log(error);
    }
    console.log("server is running on port 3000");
});

