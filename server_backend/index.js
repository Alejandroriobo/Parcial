console.log("estoy funcionando")

const htpp = require("http");
const app = require("./app");

const server = htpp.createServer(app);

server.listen(80, ()=>{
    console.log("Server Up, Port:",80);
})