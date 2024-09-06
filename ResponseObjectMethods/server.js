import http from "http";

const server=http.createServer((req, res)=>{
 res.write("This is coming from NodeJS server.")
 if(req.url==="/first"){
   return res.end("This is first response.")
 }
 res.end("This is default response.")
})

server.listen(3200, ()=>{
    console.log("Server listens to port 3200!!")
})