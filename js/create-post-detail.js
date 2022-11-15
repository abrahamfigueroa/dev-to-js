import db from "./environment";

const cardCreation = (
    nombre,
    descripcion,
    imagen,
    fechaDeCreacion,
    etiquetas,
    id
  ) => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-2");
    card.setAttribute("id", id);
  
    const img = document.createElement("img"); //Imagen de la card
    img.classList.add("card-img-top");
    img.src = imagen;
  
    const cardBody = document.createElement("div"); // Este es el div del cuerpo de la card
    cardBody.classList.add("card-body");
    cardBody.setAttribute('onclick', "window.location.href='./post.html'")
  
    const creationDate = document.createElement("p"); // Fecha de creación del post
    creationDate.classList.add("card-text");
    creationDate.innerHTML = fechaDeCreacion;
  
    const name = document.createElement("h5"); // Título del post
    name.classList.add("h5", "card-title");
    name.innerHTML = "<strong>" + nombre + "</strong>";
  
    const tagsArray = document.createElement("div");
    tagsArray.classList.add("d-flex", "justify-content-start");
  
    const tags = document.createElement("p");
    tags.innerHTML = "#" + etiquetas;
    tags.classList.add("mx-2");
  
    const description = document.createElement("p"); // Descripción del post
    description.classList.add("card-text");
    description.innerHTML = descripcion;
  
    const editButton = document.createElement("a"); // Botón editar
    editButton.classList.add("btn", "btn-primary", "me-2");
    editButton.innerText = "Editar";
  
    const deleteButton = document.createElement("a"); // Boton eliminar
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.innerText = "Borrar";
    deleteButton.setAttribute("id", id);
  
    if (imagen != null) cardBody.appendChild(img); // Si el campo de imagen esta vacío, se omite añadir este elemento al DOM
    if (fechaDeCreacion != null) cardBody.appendChild(creationDate); // Si el campo de fecha de creación esta vacío, se omite añadir este elemento al DOM
    cardBody.appendChild(name);
    cardBody.appendChild(tagsArray);
    if (etiquetas != null) tagsArray.appendChild(tags);
    // cardBody.appendChild(editButton);
    // cardBody.appendChild(deleteButton);
    card.appendChild(cardBody);
    return card;
  };