import express from 'express'
import cors from "cors"
import task2 from './ExpressJS Basics/task2.js'
import task3 from './ExpressJS Basics/task3.js'
import task4 from './ExpressJS Basics/task4.js'
import todoes from './ExpressJS Advance/todoes.js'
const app = express()
app.use(cors({
  origin:"*",
}))
const port = 5500
app.use(express.json())

// app.use('/',task2) // ExpressJS Basics task 2
// app.use('/',task3) // ExpressJS Basics task 3
// app.use('/',task4) // ExpressJS Basics task 4

app.use('/todos',todoes)// ExpressJS Advance task 2

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  



  /** Advance CRUD---------------------------------------------------------- */

  /*
  import express from 'express'
const app = express()
const port = 3000
app.use(express.json())
let toDos=[{id:1,title:'task1',description:'developing1',completion_status:'done'},
{id:2,title:'task2',description:'developing2',completion_status:'in progress'},
{id:3,title:'task3',description:'developing3',completion_status:'in progress'},
{id:4,title:'task4',description:'developing4',completion_status:'in progress'},
]

app.get('/todos', (req, res) => {
  if(toDos.length > 0)
    res.status(204).send(toDos);
})

app.get('/todos/:id', (req, res) => {
    let id = +req.params.id;
    const item = toDos.find(element => element.id===id)
    if(item){
        res.send(item);
    }else{
        res.send({
            Message: "No item have id ="+id
        });
    }
    
  })

app.delete('/todos/:id', (req, res) => {
    let id = +req.params.id;
    const index = toDos.findIndex(element => element.id===id)
    if(index>=0){
        toDos.splice(index,1);
        res.send({
            Message: "item deleted successfully"
        })
    }else{
        res.send({
            Message: "this item not found"
        })
    }
  })

  app.post('/todos', (req, res) => {
    const {id,title,description,completion_status} = req.body
    let item = {id,title,description,completion_status}
    toDos.push(item)
    res.send({
        Message:"item added",
        item
    })
  })


  
  app.put('/todos/:id', (req, res) => {
    let id = +req.params.id;
    const index = toDos.findIndex(element => element.id===id)
    const {title,description,completion_status} = req.body
    if(index>=0){
    if(title)toDos[index].title=title
    if(description)toDos[index].description=description
    if(completion_status)toDos[index].completion_status=completion_status
    const item=toDos[index];
    res.send({
        item
    })}
    else{
        res.send({
            Message: "this item not found"
        })
    }
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  
  */