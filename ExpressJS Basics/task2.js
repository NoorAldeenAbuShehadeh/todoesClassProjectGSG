import express from 'express';
const task2 = express.Router();

let toDos=[{id:1,title:'task1',description:'developing1',completion_status:'done'},
{id:2,title:'task2',description:'developing2',completion_status:'in progress'},
{id:3,title:'task3',description:'developing3',completion_status:'in progress'},
{id:4,title:'task4',description:'developing4',completion_status:'in progress'},
]
task2.use(express.json())

task2.get('/', (req, res) => {
  res.send(toDos);
})
task2.delete('/', (req, res) => {
    if(toDos.length==0){
        res.send({
            Message: "that no objects are available for deletion."
        })
    }
    else{
    const index = Math.floor(Math.random()*toDos.length);
    toDos.splice(index,1);
    res.send({
        Message: "delete item with index= "+ index
    })
}
  })

  export default task2