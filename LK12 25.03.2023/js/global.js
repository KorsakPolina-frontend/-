const box = document.querySelector(".container");
const addBtn = document.querySelector(".add-btn");
const mdBox = document.querySelector(".modal-container");
const mdClose = mdBox.querySelector(".modal-close");
const addForm = document.forms.add;

let user = localStorage.getItem("cat01");
if (!user) {
    user  = prompt("Ваше уникальное имя: ", "polinakorsak");
    localStorage.setItem("cat01", user);
}

const path = `https://cats.petiteweb.dev/api/single/${user}`;

let cats = localStorage.getItem("cats-data") //массив с котами
console.log(cats);

