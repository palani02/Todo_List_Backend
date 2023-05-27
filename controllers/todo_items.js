const getAllToDoItems = (req,res)=>{
    res.send("List of all to-do List");
}

 const createANewToDoItems = (req,res)=>{
    res.json(req.body)
 }
 const getAToDoItem =(req,res)=>{
    res.send(`The Id is ${req.params.id}`)
 }
const updateAToDoItem = (req,res)=>{
    res.send(`Updating item with id ${req.params.id}`)
}
const deleteAToDoItem = (req,res)=>{
    res.send(`Deleting item with id${req.params.id}`)
}
module.exports = {getAllToDoItems,createANewToDoItems,updateAToDoItem,deleteAToDoItem,getAToDoItem}