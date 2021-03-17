const http = require('http')    //Pull in a useful node package
                                //Try http.
const hostname = '127.0.0.1'    //Local host
const port = 3001               //Not assigned
let arr=["Hello ","World. ","How"," are ","you",". Welcome."]


const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type
      res.end(`<html><head>Random</head><body><h3>Random element from the array: ${arr[Math.floor(Math.random()*arr.length)]}</h3></body></html>`)    //Close the response and provide content
    }                           //No return needed, we modified the res object we got
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})