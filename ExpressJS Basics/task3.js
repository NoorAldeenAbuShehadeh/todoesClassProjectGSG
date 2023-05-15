import express from 'express';
const task3 = express.Router();
task3.use(express.json())
let toDos=[{id:1,title:'task1',description:'developing1',completion_status:'done'},
{id:2,title:'task2',description:'developing2',completion_status:'in progress'},
{id:3,title:'task3',description:'developing3',completion_status:'in progress'},
{id:4,title:'task4',description:'developing4',completion_status:'in progress'},
]

task3.get('/', (req, res) => {
  res.status(200).send(toDos);
})
task3.delete('/', (req, res) => {
    if(toDos.length==0){
        res.status(422).send({
            Message: "that no objects are available for deletion."
        })
    }
    else{
    const index = Math.floor(Math.random()*toDos.length);
    toDos.splice(index,1);
    res.status(204).send({
        Message: "delete item with index= "+ index
    })
}
  })

  export default task3