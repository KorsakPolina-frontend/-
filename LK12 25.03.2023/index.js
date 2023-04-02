let myCat = {
    name: "Арбуз",
    age: 3,
    image: "https://proprikol.ru/wp-content/uploads/2019/08/kartinki-nyashnye-kotiki-27.jpg",
    favorite: false
}

let myCat2 = {
    name: "Персик",
    favorite: true
}

const box = document.querySelector(".container");
function createCard(cat, el = box) {
    const card = document.createElement("div");
    card.className = "card";
    if (!cat.image){
    card.classList.add("default");
    } else {
        card.style.backgroundImage = `url(${cat.image})`;
    }
    const name = document.createElement("h3");
    name.innerText = cat.name
        const like = document.createElement("i");
    like.className = "fa-heart card__like";
    like.classList.add(cat.favorite ? "fa-solid" : "fa-regular");
    card.append(like, name);
    if (cat.age >= 0) {
        const age = document.createElement("span");
        age.innerText = cat.age;
        card.append(age);
    }
    el.append(card);
}

createCard(myCat);
createCard(myCat2);

const user = "polinakorsak"
const path = `https://cats.petiteweb.dev/api/single/${user}`;

fetch(path + "/show")
    .then(function(res) {
        console.log(res);
        if (res.statusText === "OK") {
            return res.json();
        }
    })
    .then(function(data) {
        console.log(data);
        for (let c of data) {
            createCard(c, box)
        }
    })

    /*
   добавление кота через Js
   myCat.id = 11
    function addCat(cat) {
        fetch(path + "/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
            body: JSON.stringify(cat)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        }) 
    }
    addCat(myCat)
    */