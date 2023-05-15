import express from "express";
const todoes = express.Router();

let toDos = [
  {
    id: 1,
    title: "task1",
    description: "developing1",
    completion_status: "done",
  },
  {
    id: 2,
    title: "task2",
    description: "developing2",
    completion_status: "in progress",
  },
  {
    id: 3,
    title: "task3",
    description: "developing3",
    completion_status: "in progress",
  },
  {
    id: 4,
    title: "task4",
    description: "developing4",
    completion_status: "in progress",
  },
];

todoes.get("/", (req, res) => {
  if (toDos.length > 0) res.status(200).send(toDos);
  else
    res.status(204).send({
      Message: "No content",
    });
});

todoes.get("/:id", (req, res) => {
  let id = +req.params.id;
  const item = toDos.find((element) => element.id === id);
  if (item) {
    res.status(200).send(item);
  } else {
    res.status(204).send({
      Message: "No item have id =" + id,
    });
  }
});

todoes.delete("/:id", (req, res) => {
  let id = +req.params.id;
  const index = toDos.findIndex((element) => element.id === id);
  if (index >= 0) {
    toDos.splice(index, 1);
    res.status(200).send({
      Message: "item deleted successfully",
    });
  } else {
    res.status(404).send({
      Message: "this item not found",
    });
  }
});

todoes.post("/", (req, res) => {
  const { id, title, description, completion_status } = req.body;
  let item = { id, title, description, completion_status };
  toDos.push(item);
  res.status(200).send({
    Message: "item added",
    item,
  });
});

todoes.put("/:id", (req, res) => {
  let id = +req.params.id;
  const index = toDos.findIndex((element) => element.id === id);
  const { title, description, completion_status } = req.body;
  if (index >= 0) {
    if (title) toDos[index].title = title;
    if (description) toDos[index].description = description;
    if (completion_status) toDos[index].completion_status = completion_status;
    const item = toDos[index];
    res.status(200).send({
      item,
    });
  } else {
    res.status(404).send({
      Message: "this item not found",
    });
  }
});

export default todoes;
