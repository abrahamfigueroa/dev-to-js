import db from "./environment";
const newTaskDescriptionInput=document.getElementById('addDescription');
const newTaskTitleInput=document.getElementById('addTitle');
const newTag=document.getElementById('addTag');
const newTaskBtn=document.getElementById('new-task__Button');

newTaskBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  
  const newPost={
    title: newTaskTitleInput.value,
    tag: newTag.value,
    description:newTaskDescriptionInput.value,
    isCompleted:false
  };
  fetch(db+".json",{
    method: 'POST', 
    headers: {"Content-Type": "applicaction/json"}, //que tipo de paquete vamos a enviar
    body:JSON.stringify(newPost),
  }).then((res)=>{
    return res.json();//return devuelve el metodo json y ese metodo intenta leer el contenido de la respuesta

  }).then((data)=>{
    console.log("recibi estos datos",data)
  }).catch((err)=>{
    console.error("ocurrio un error",err);
  })
  console.log("Nueva tarea", newPost);

  newTaskDescriptionInput.value="";
  newTaskTitleInput.value="";

});