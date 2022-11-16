import db from "./environment.js";
import { cardCreation } from "./main.js";
const orderButton = document.querySelector("#orderByButton");
const thisWeek = document.querySelector("#thisWeek");
const thisMonth = document.querySelector("#thisMonth");
const thisYear = document.querySelector("#thisYear");
let descendingOrder = true;

orderButton.addEventListener("click", (e) => {
  e.preventDefault();
  descendingOrder = !descendingOrder;
  getAllPosts();
  $("#cardsContainer").load(window.location.href + " #cardsContainer");
});

thisWeek.addEventListener("click", (e) => {
  e.preventDefault();
  getAllPosts("week");
  $("#cardsContainer").load(window.location.href + " #cardsContainer");
});

thisMonth.addEventListener("click", (e) => {
  e.preventDefault();
  getAllPosts("month");
  $("#cardsContainer").load(window.location.href + " #cardsContainer");
});

thisYear.addEventListener("click", (e) => {
  e.preventDefault();
  getAllPosts("year");
  $("#cardsContainer").load(window.location.href + " #cardsContainer");
});

export const getAllPosts = (filter) => {
  cardsContainer.innerHTML = "";
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
          if (filter == "week") {
            cardsContainer.innerHTML = "";
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
              console.log("Filtrando por semana");
            }
          }
          if (filter == "month") {
            cardsContainer.innerHTML = "";
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
              console.log("Filtrando por mes");
            }
          }
          if (filter === "year") {
            cardsContainer.innerHTML = "";
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
              console.log("Filtrando por año");
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
          if (filter === "week") {
            cardsContainer.innerHTML = "";
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
              console.log("Filtrando por semana, invertida");
            }
          }
          if (filter === "month") {
            cardsContainer.innerHTML = "";
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
              console.log("Filtrando por mes, invertido");
            }
          }
          if (filter === "year") {
            cardsContainer.innerHTML = "";
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
              console.log("Filtrando por año, invertido");
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
