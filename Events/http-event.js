import http from "http";

const server=http.createServer((req, res)=>{
    if(req.method==="POST"){
        console.log(req.body)
        let body="";

        // data event listener to get data in chunks and store them one by one inside body.
        req.on("data",(chunk)=>{
          body+= chunk.toString();
        });

        // end event listener to check if we have recieved all chunks and nothing is left
        req.on("end",()=>{
            console.log(body);
            res.end("Data is recieved!");
        })
    } else{
        console.log("function end here!");
        res.end("Welcome to noje js")
    }
})

server.listen(3100,()=>{
    console.log("Server is listening on port 3100!")
})