import db from "./environment.js";

// Método eliminar

const deletePost = (id) => {

    fetch(`${db}/${id}.json`, { //agregar variable ID del objeto a eliminar
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log("Elemento eliminado", data));
    
    };