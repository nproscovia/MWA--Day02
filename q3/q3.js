

const express= require("express"); 
require("dotenv").config()

const app= express();
app.set("port" , process.env.PORT);
const routes1= require("./api/routes"); 


app.use("/api", routes1);

const server = app.listen(process.env.PORT ,function(){
    console.log("listening to port", server.address().port);
})
