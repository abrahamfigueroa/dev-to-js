//const body = document.querySelector("body");
const cardsContainer = document.querySelector("#cardsContainer");
//body.appendChild(const cardsContainer = document.querySelector("#cardsContainer");
//content.classList.add("d-flex", "flex-wrap");

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

const json = [
  {
    nombre: "Spider-Man",
    descripcion:
      "Fue mordido por una araña radioactiva, el estudiante de secundaria Peter Parker ganó la velocidad, la fuerza y los poderes de una araña. Adoptando el nombre de Spider-Man, Peter esperaba comenzar una carrera usando su nueva",
    img: null,
    creationDate: "18:00 hrs, 29/08/1990"
  },
  {
    nombre: "Batman",
    descripcion:
      "Bruce Wayne (también llamado Bruno Díaz en Hispanoamérica) es un filántropo, multimillonario y el presidente corporativo de Empresas Wayne. En secreto, él encarna a Batman, el héroe enmascarado que lucha contra el mundo del hampa y del crimen organizado en Ciudad Gótica combatiendo a peligrosos criminales que amenazan la paz de sus conciudadanos.",
    img: "https://phantom-marca.unidadeditorial.es/7cbe0f2332db668e5b9732d66f5828a4/resize/660/f/webp/assets/multimedia/imagenes/2022/09/17/16634404898386.jpg",
  },
  {
    nombre: "Superman",
    descripcion:
      "El bebé Kal-El llegó a la Tierra desde el planeta moribundo Krypton y fue encontrado por una pareja de granjeros que lo nombró Clark Kent y lo crió como propio. Descubriendo sus enormes poderes, le inculcaron fuertes valores morales y lo inspiraron a convertirse en un héroe.",
    img: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/09/man-of-steel-henry-cavill-superman-image.jpg?resize=780%2C587&quality=60&strip=all&ssl=1",
  },
  {
    nombre: "Wolverine",
    descripcion:
      "Es un mutante que posee sentidos afinados a los animales, capacidades físicas mejoradas, poderosa capacidad de regeneración conocida como un factor de curación, y tres garras retráctiles en cada mano. Wolverine ha sido representado de diversas formas como miembro de los X-Men, Alpha Flight, Fuerza-X y Los Vengadores.",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2017/11/wolverine-cabello-kevin-feige-marvel-peliculas-x-men.jpg",
  },
  {
    nombre: "Hulk",
    descripcion:
      "Bruce Banner, un científico que estuvo expuesto a cantidades extremas de radiación gamma que alteró la estructura de su ADN y provocó que se convirtiera en un monstruo gigante de increíble poder cada vez que se enfada..",
    img: "https://i.blogs.es/fed263/el-increible-hulk/1366_521.jpeg",
  },
  {
    nombre: "Capitán América",
    descripcion:
      'Después de semanas de pruebas, a Rogers se le administró el suero del Supersoldado. Dándole parte del compuesto de modo intravenoso y otra parte oralmente, Rogers fue bombardeado por "vita-rayos", una combinación especial de longitudes de onda exóticas (en 1941) de radiación diseñadas para estabilizar y acelerar el efecto del suero en su cuerpo.',
    img: "https://soydecine.com/wp-content/uploads/capitan-america-peliculas.jpg",
  },
  {
    nombre: "Iron Man",
    descripcion:
      "Tony Stark es un inventor de armamento brillante que es secuestrado en el extranjero. Sus captores son unos terroristas que le obligan a construir una máquina destructiva pero Tony se construirá una armadura para poder enfrentarse a ellos y escapar.",
    img: "https://spoiler.bolavip.com/_next/image?url=https%3A%2F%2Fbolavip.com%2F__export%2F1640876849305%2Fsites%2Fbolavip%2Fimg%2F2021%2F12%2F30%2Firon_crop1640876793337.jpg_225295896.jpg&w=2048&q=75",
  },
  {
    nombre: "Black Panther",
    descripcion:
      "T'Challa es coronado rey de Wakanda tras la muerte de su padre, pero su soberanía es cuestionada por un adversario que planea abandonar las políticas aislacionistas del país e iniciar una revolución mundial.",
    img: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/07/black-panther-ryan-coogler-scaled.jpg?fit=2560%2C1708&quality=50&strip=all&ssl=1",
  },
  {
    nombre: "Black Widow",
    descripcion:
      "Natasha nació en Stalingrado (ahora Volgogrado), Rusia. La primera y más conocida Viuda Negra, es una agente rusa entrenada como espía, artista marcial y francotiradora, y equipada con un arsenal de armas de alta tecnología, que incluye un par de armas energéticas montadas en la muñeca",
    img: "https://dam.smashmexico.com.mx/wp-content/uploads/2020/09/Los-mas-importantes-personajes-que-veras-en-Black-Widow-1.jpg",
  },
  {
    nombre: "Falcon",
    descripcion:
      "Es el compañero habitual del Capitán América en su lucha contra el crimen, e incluso toma brevemente el uniforme y la identidad del Capitán América cuando se creía que Rogers había muerto.Más tarde, otra vez como Falcon, Wilson recibe la ayuda de Black Panther, quien crea un arnés para Wilson, dándole la habilidad de volar. Cuando Rogers abandona brevemente su identidad como el Capitán América, otros tratan de tomar el manto, incluyendo a un joven llamado Roscoe, cuyo mentor es Falcon",
    img: "https://i.blogs.es/0bf59e/samwilson/1366_2000.jpg",
  },
];

for (const datos of json) {
  const card = cardCreation(datos.nombre, datos.descripcion, datos.img, datos.creationDate);
  cardsContainer.appendChild(card);
};