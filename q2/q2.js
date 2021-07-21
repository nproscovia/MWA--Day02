const express = require("express")
require("dotenv").config()

const path= require("path");
const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.set("port", process.env.PORT)

const server2 = app.listen(process.env.PORT, function(){
    console.log("listening at port", server2.address().port);
})






