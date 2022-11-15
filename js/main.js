import db from "./environment.js";
const cardsContainer = document.querySelector("#cardsContainer");

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
      for (const post of idTareas) {
        const card = cardCreation(post.title, post.description);
        cardsContainer.appendChild(card);
      };
    });
};

getAllPosts();

const cardCreation = (nombre, descripcion, imagen, fechaDeCreacion, etiquetas) => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-2");
  
    const img = document.createElement("img"); //Imagen de la card
    img.classList.add("card-img-top");
    img.src = imagen;
  
    const cardBody = document.createElement("div"); // Este es el div del cuerpo de la card
    cardBody.classList.add("card-body");
  
    const creationDate = document.createElement("p"); // Fecha de creación del post
    creationDate.classList.add("card-text");
    creationDate.innerHTML = fechaDeCreacion;
  
    const name = document.createElement("h5"); // Título del post
    name.classList.add("h5", "card-title");
    name.innerHTML = "<strong>"+nombre+"</strong>";
  
    // const tagsArray = document.createElement("div");
    // tagsArray.classList.add("d-flex justify-content-start");
    
    // const tags = document.createElement("p");
    // tags.innerHTML = etiquetas;
  
    const description = document.createElement("p"); // Descripción del post
    description.classList.add("card-text");
    description.innerHTML = descripcion;
  
    const editButton = document.createElement("a"); // Botón editar
    editButton.classList.add("btn", "btn-primary", "me-2");
    editButton.innerText = "Editar";
  
    const deleteButton = document.createElement("a"); // Boton eliminar
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.innerText = "Borrar";
  
    if(imagen!=null)cardBody.appendChild(img); // Si el campo de imagen esta vacío, se omite añadir este elemento al DOM
    if(fechaDeCreacion!=null)cardBody.appendChild(creationDate); // Si el campo de fecha de creación esta vacío, se omite añadir este elemento al DOM
    cardBody.appendChild(name);
    cardBody.appendChild(description);
    // cardBody.appendChild(tagsArray);
    // if(etiquetastags!=null) tagsArray.appendChild(tags);
    cardBody.appendChild(editButton);
    cardBody.appendChild(deleteButton);
    card.appendChild(cardBody);
  
    return card;
  };