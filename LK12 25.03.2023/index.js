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
    like.addEventListener("click", e => {
        e.stopPropagation();
        if (cat.id) {
            fetch(`${path}/update/${cat.id}` {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({favorite: !cat.favorite})
            })
            .then (res => {
                if (res.status === 200) {
                    like.classList.toggle("fa-solid");
                    like.classList.toggle("fa-regular");
                }
            })
        }
    })
    card.append(like, name);
    if (cat.age >= 0) {
        const age = document.createElement("span");
        age.innerText = cat.age;
        card.append(age);
    }
    //card.addEventListener("click", e=> {
      //  deleteCard(cat.id, card)
   // });
    el.append(card);
}
/* Удаление кота при нажатии на карточку

function deleteCard(id) {
    if (id) {
        fetch(`${path}/delete/${id}`, {
            method: "delete"
        })
        .then(res => {
           // console.log(res);
           // console.log(res.status);
           if (res.ststus === 200) {
            el.remove();
           }
        })
    }
}
*/
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
    
let ids = [];
fetch(path + "ids")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        ids = [...data];
        myCat.id = ids.length ? ids[ids.length - 1] + 1 : 1;
        //addCat(myCat);
    })
    
    /*
   Добавление кота через Js

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