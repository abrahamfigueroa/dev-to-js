import db from "./environment.js";
import { cardCreation } from "./main.js";
const orderButton = document.querySelector("#orderByButton");
let descendingOrder = true;
const thisWeek = document.querySelector("#thisWeek");
const thisMonth = document.querySelector("#thisMonth");
const thisYear = document.querySelector("#thisYear");

orderButton.addEventListener("click", (e) => {
  e.preventDefault();
  descendingOrder = !descendingOrder;
  cardsContainer.innerHTML = "";
  getAllPosts();
  $("#cardsContainer").load(window.location.href + " #cardsContainer");
});

thisWeek.addEventListener("click", (e) => {
  e.preventDefault();
  const filter = "week";
  cardsContainer.innerHTML = "";
  getAllPosts(filter);
  $("#cardsContainer").load(window.location.href + " #cardsContainer");
});

thisMonth.addEventListener("click", (e) => {
  e.preventDefault();
  const filter = "month";
  cardsContainer.innerHTML = "";
  getAllPosts(filter);
  $("#cardsContainer").load(window.location.href + " #cardsContainer");
});

thisYear.addEventListener("click", (e) => {
  e.preventDefault();
  const filter = "year";
  cardsContainer.innerHTML = "";
  getAllPosts(filter);
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
          // Obteniendo la fecha, semana, mes y año del post
          const date = new Date(post.fecha);
          const monthPost = date.getMonth();
          const yearPost = date.getFullYear();
          const oneJanPost = new Date(date.getFullYear(), 0, 1);
          const numberOfDaysPost = Math.floor(
            (date - oneJanPost) / (24 * 60 * 60 * 1000)
          );
          const weekPost = Math.ceil(
            (date.getDay() + 1 + numberOfDaysPost) / 7
          );

          // Obteniendo la fecha, semana, mes y año de hoy
          const currentdate = new Date();
          const oneJan = new Date(currentdate.getFullYear(), 0, 1);
          const numberOfDays = Math.floor(
            (currentdate - oneJan) / (24 * 60 * 60 * 1000)
          );
          const week = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
          const month = date.getMonth();
          const year = date.getFullYear();
          if ((filter = "week")) {
            if (weekPost == week) {
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
          if ((filter = "month")) {
            if (monthPost == month) {
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
          if ((filter = "year")) {
            if (yearPost == year) {
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
      } else {
        for (const post of allPostsArray) {
          // Obteniendo la fecha, semana, mes y año del post
          const date = new Date(post.fecha);
          const monthPost = date.getMonth();
          const yearPost = date.getFullYear();
          const oneJanPost = new Date(date.getFullYear(), 0, 1);
          const numberOfDaysPost = Math.floor(
            (date - oneJanPost) / (24 * 60 * 60 * 1000)
          );
          const weekPost = Math.ceil(
            (date.getDay() + 1 + numberOfDaysPost) / 7
          );

          // Obteniendo la fecha, semana, mes y año de hoy
          const currentdate = new Date();
          const oneJan = new Date(currentdate.getFullYear(), 0, 1);
          const numberOfDays = Math.floor(
            (currentdate - oneJan) / (24 * 60 * 60 * 1000)
          );
          const week = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
          const month = date.getMonth();
          const year = date.getFullYear();
          if ((filter = "week")) {
            if (weekPost == week) {
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
          if ((filter = "month")) {
            if (monthPost == month) {
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
          if ((filter = "year")) {
            if (yearPost == year) {
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
      }
    });
};

export default getAllPosts();
