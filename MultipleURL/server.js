const http=require('http');

const server= http.createServer((req, res)=>{
    res.write("Welcome to NodeJS server!!");
    if(req.url==="/product"){
     return res.end("This is product page.")
    } else if (req.url==="/user"){
     res.end("This is user page.")
    }
    // res.end("End of response!.") --> This will cause an error because we can't modify response after res.end without return statement.
})

server.listen(3100,()=>{
    console.log("Server listens to port 3100!!")
})