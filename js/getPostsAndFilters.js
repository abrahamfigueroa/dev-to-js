import db from "./environment.js";
import { cardCreation } from "./main.js";
const orderButton = document.querySelector("#orderByButton");
let descendingOrder = true;
const thisWeek = document.querySelector("#thisWeek");
const thisMonth = document.querySelector("#thisMonth");
const thisYear = document.querySelector("#thisYear");

orderButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("boton activado");
  descendingOrder = !descendingOrder;
  cardsContainer.innerHTML = "";
  getAllPosts();
  $("#cardsContainer").load(window.location.href + " #cardsContainer");
});

export const getAllPosts = (filter) => {
  fetch(db + ".json", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      const keys = Object.keys(result);
      const allPostsArray = keys.reduce((prev, act) => {
        const postAct = result[act];
        const postCompleto = {
          id: act,
          ...postAct,
        };
        prev.push(postCompleto);
        return prev;
      }, []);
      if (descendingOrder == true) {
        for (const post of allPostsArray.reverse()) {
          const date = new Date(post.fecha);
          let month = date.getMonth();
          let year = date.getFullYear();
          
          var oneJan = new Date(date.getFullYear(),0,1);
          var numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
          var week = Math.ceil(( date.getDay() + 1 + numberOfDays) / 7);

          console.log(week);
          console.log(month);
          console.log(year);

          if ((filter = "year")) {
          }
          
          const card = cardCreation(
            post.title,
            post.description,
            post.image,
            post.fecha,
            post.tag,
            post.id
          );
          cardsContainer.appendChild(card);
        }
      } else {
        for (const post of allPostsArray) {
          const date = new Date(post.fecha);
          let month = date.getMonth();
          console.log(month);
          const card = cardCreation(
            post.title,
            post.description,
            post.image,
            post.fecha,
            post.tag,
            post.id
          );
          cardsContainer.appendChild(card);
        }
      }
    });
};

export default getAllPosts();
