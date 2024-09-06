# JS is single threaded programming, then how can we write non- blocking code?
- We use Node which provides thread pool. So mai thread will allocate I/O operations to these thread.
- For these async operations Node uses library known as--> Libuv



# non-blocking code so that other code that doesn't need to wait can run callback
setTimeout(()=>{
    console.log("I have to wait for 8 sec!")
},8000)
console.log("hello world!!")
- output: Hello world!! I have to wait for 8 sec!