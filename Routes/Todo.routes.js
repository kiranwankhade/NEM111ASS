const express =  require("express");

const {TodoModel} = require("../Model/Todo.model.js")

const todoRouters = express.Router()

todoRouters.get("/",async(req,res)=>{
    let query = req.query;
    try{
        const todo = await TodoModel.find(query);
        res.send(todo)
        console.log("getTodo",todo)
    }catch(err){
        res.end({"msg":"Can not get Data","error":err.message})
    }
    // res.send("All the users data will be sent")
})

todoRouters.post("/create",async(req,res)=>{
    try{
        const todo =  new TodoModel(req.body);
        console.log('todo:', todo)
        await todo.save();
        res.send({"msg":"User has been registered"})
    }catch(err){
        res.end({"msg":"Can not register","error":err.message})
    }
})

todoRouters.patch("/:todoId",async (req,res)=>{
    const todoID=req.params['todoId']
    console.log('todoID:', todoID)
    const payload=req.body;

    try{
        const query=await TodoModel.findByIdAndUpdate({_id:todoID},payload)
        console.log('query:', query)
        res.send({"msg":"User has been Updated"})
    }catch(err){
        console.log(err)
        res.send({"err":"something went wrong"})
    }
    })
    

todoRouters.delete("/:todoId",async(req,res)=>{
    const todoID=req.params['todoId']
    try{
        await TodoModel.findByIdAndDelete({_id:todoID})
        res.send(`User with user id ${todoID} has been deleted from the database`)
    }catch(err){
        console.log(err)
        res.send({"err":"something went wrong"})
    }
})


module.exports = {
    todoRouters
}