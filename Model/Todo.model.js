
const mongoose = require("mongoose");

const todoSchema=mongoose.Schema({
    task:{type:String,required:true},
    isCompleted:{type:Boolean,required:true},
},{
    versionKey:false
})

const TodoModel=mongoose.model("todo",todoSchema)

module.exports = {
    TodoModel
}