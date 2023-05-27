const express = require('express')
const app = express()
const PORT = 3500
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const todo_items = require('./routes/todo_items')
app.get('/',(req,res)=>{
    res.send("Its working")
})
app.use('/api/v1/todo_items',todo_items)
app.listen(PORT,console.log('Server runs at http://localhost:3500'))