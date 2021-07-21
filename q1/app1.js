const express = require("express")
require("dotenv").config()
const app = express();

app.set("port" , process.env.PORT);


const server = app.listen(process.env.PORT ,function(){
    console.log("listening to port", server.address().port);
})


