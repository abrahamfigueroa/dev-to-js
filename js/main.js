import db from "./environment.js";
const cardsContainer = document.querySelector("#cardsContainer");
const deletePostButton = document.querySelector("#deletePostButton");

// Método eliminar

// deletePostButton.addEventListener("click", (e) => {
//   const deletePost = (id) => {
//     fetch(`${db}/${id}.json`, {
//       //agregar variable ID del objeto a eliminar
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => console.log("Elemento eliminado", data));
//   };
// });

// Método Get All Posts

const getAllPosts = () => {
  fetch(db + ".json", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      const keys = Object.keys(result);
      const idPosts = keys.reduce((prev, act) => {
        const postAct = result[act];
        const postCompleto = {
          id: act,
          ...postAct,
        };
        prev.push(postCompleto);
        return prev;
      }, []);
      console.log(idPosts);
      for (const post of idPosts.reverse()) {
        const card = cardCreation(
          post.title,
          post.description,
          post.image,
          post.fecha,
          post.tag
        );
        cardsContainer.appendChild(card);
      }
    });
};

getAllPosts(); // Mandamos llamar al método getAllPosts quien obtiene los datos de firebase y los usa para construir las cards mediante cardCreation

// Card Creation Method

const cardCreation = (
  nombre,
  descripcion,
  imagen,
  fechaDeCreacion,
  etiquetas
) => {
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
  name.innerHTML = "<strong>" + nombre + "</strong>";

  const tagsArray = document.createElement("div");
  tagsArray.classList.add("d-flex", "justify-content-start");

  const tags = document.createElement("p");
  if (etiquetas[0] != "#") {
    tags.innerHTML = "#" + etiquetas;
  } else tags.innerHTML = etiquetas;
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

  if (imagen != null) cardBody.appendChild(img); // Si el campo de imagen esta vacío, se omite añadir este elemento al DOM
  if (fechaDeCreacion != null) cardBody.appendChild(creationDate); // Si el campo de fecha de creación esta vacío, se omite añadir este elemento al DOM
  cardBody.appendChild(name);
  cardBody.appendChild(tagsArray);
  if (etiquetas != null) tagsArray.appendChild(tags);
  cardBody.appendChild(editButton);
  cardBody.appendChild(deleteButton);
  card.appendChild(cardBody);

  return card;
};
