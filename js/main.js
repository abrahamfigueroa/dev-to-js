import db from "./environment.js";

// Método eliminar

const deletePost = (id) => {
  fetch(`${db}/${id}.json`, {
    //agregar variable ID del objeto a eliminar
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log("Elemento eliminado", data));
};

// Método Get all posts

const getAllPosts = () => {
  fetch(db + ".json", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      const keys = Object.keys(result);
      const idTareas = keys.reduce((prev, act) => {
        const tareaAct = result[act];
        const tareaCompleta = {
          id: act,
          ...tareaAct,
        };
        prev.push(tareaCompleta);
        return prev;
      }, []);
      console.log(idTareas);
    });
};
