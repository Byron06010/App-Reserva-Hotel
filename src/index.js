require("dotenv").config();

const app=require("./server");
require("./database");


app.listen(app.get("port"), () =>{
    console.log("server en puerto ",app.get("port"))
})