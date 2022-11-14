import db from "./environment.js";

const deleteTask = (id) => {

fetch(`${db}/${id}.json`, { //agregar variable ID del objeto a eliminar
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => console.log("Elemento eliminado", data));

};