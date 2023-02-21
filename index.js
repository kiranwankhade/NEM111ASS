const express =  require("express");
const { connection } = require("./db");

require('dotenv').config()

const app = express();

const {todoRouters} = require("./Routes/Todo.routes")


app.use(express.json());

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.use("/mongofull",todoRouters);


app.listen(process.env.port, async()=>{
    try{
        await connection
        console.log("connection");
     }catch(err){
        console.log("not connected");
        console.log(err);
    }
    console.log(`Server is running on port ${process.env.port}`)
})