//using express
const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors')

//create an instance of express
const app=express()
app.use(express.json()) //middleware
app.use(cors())

//sample in-memory storage for todo items
//let todos=[] //ithuku badila mongo db use panna porom

//connecting mongo db
mongoose.connect('mongodb://localhost:27017/todo')
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err)
})

//creating schema
const todoSchema=new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
    }
})

//creating model
const todoModel=mongoose.model('Todo',todoSchema)

//create a new todo item
app.post('/todos',async (req,res)=>{
    const {title,description}=req.body;
    //const newTodo={
    //    id:todos.length+1,
    //    title,
    //    description
    //}
    //todos.push(newTodo)
    // console.log(todos)
    try {
        const newTodo = new todoModel({title,description})
        await newTodo.save()
        res.status(201).json(newTodo)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            session: false,
            message: "pls add title"
        });
    }
})

//get all items
app.get('/todos',async (req,res)=>{
    try {
        const todos=await todoModel.find()
        res.status(201).json(todos)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            session: false,
            message: `Error in fetching data ${error}`
        });
    }
})

//update items
app.put('/todos/:id',async(req,res)=>{
    try { 
        const {title,description}=req.body;
        const id=req.params.id

        const updatedtodo = await todoModel.findByIdAndUpdate(
            id, //id of the todo list item
            {title,description}, //title and description change
            {new: true } //to see updated value in thunder client
        )
        if(!updatedtodo){
            return res.status(404).json({
                session:false,
                message: 'id not found'
            })
        }
        res.status(201).json({updatedtodo})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            session: false,
            message: `Error: ${error}`
        });
    }
})

app.patch('/todos/:id',async(req,res)=>{
    try { 
        const {title,description}=req.body;
        const id=req.params.id

        const updatedtodo = await todoModel.findByIdAndUpdate(
            id, //id of the todo list item
            {title,description}, //title and description change
            {new: true } //to see updated value in thunder client
        )
        if(!updatedtodo){
            return res.status(404).json({
                session:false,
                message: 'id not found'
            })
        }
        res.status(201).json({updatedtodo})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            session: false,
            message: `Error: ${error}`
        });
    }
})

//delete items
app.delete('/todos/:id',async(req,res)=>{
    try{
    const id= req.params.id
    await todoModel.findByIdAndDelete(id)
    res.status(204).end()
    }catch(err){
        console.log(err.message)
        res.status(500).json({
            session: false,
            message: `Error: ${err}`
        });
    }
})

//start the server
const port=8000;
app.listen(port,()=>{
    console.log("server listening")
})