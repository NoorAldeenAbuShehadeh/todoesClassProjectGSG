const showData= document.getElementById('showdata')
async function fetchData(){
    const response = await fetch("https://dummyjson.com/users/5/todos");
    let data = await response.json();
    const toDoes= await data;
    for(let i=0;i<toDoes.todos.length;i++){
        const ul = document.createElement("ul");
        const txtul = document.createTextNode("ToDo: "+(i+1) );
        ul.appendChild(txtul)
        const {id,completed,todo,userId} = toDoes.todos[i];

        const li = document.createElement("li");
        const txt = document.createTextNode("userId: " +userId);
        li.appendChild(txt);
        ul.appendChild(li);

        const li2 = document.createElement("li");
        const txt2 = document.createTextNode("id: "+id);
        li2.appendChild(txt2);
        ul.appendChild(li2);

        const li3 = document.createElement("li");
        const txt3 = document.createTextNode("todo: "+todo);
        li3.appendChild(txt3);
        ul.appendChild(li3);

        const li4 = document.createElement("li");
        const txt4 = document.createTextNode("is completed: "+completed);
        li4.appendChild(txt4);
        ul.appendChild(li4);

        showData.appendChild(ul)
    }
    console.log(toDoes.todos)
}

fetchData();