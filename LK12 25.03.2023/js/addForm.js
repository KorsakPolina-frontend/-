addBtn.addEventListener("click", e => {
    mdBox.style.display = "flex";
})
mdClose.addEventListener("click", e => {
    mdBox.style = null;
})
//заполнение формы новыми котами и добавление их в базу и отображение на странице
addForm.addEventListener("submit", e => {
    e.preventDefault();
    const body = {};
    for (let i = 0; i < addForm.elements.length; i++) {
        const inp = addForm.elements[i];
        console.log(inp);
        console.log(inp.name);
        if (inp.name) {
            if (inp.type === "checkbox") {
                body[inp.name] = inp.checked;
            } else {
                body[inp.name] = inp.value;
            }
           }
    }
    console.log(body);
    fetch(path + "/add", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(res => {
        if (res.ok) {
            addForm.reset();//очистка формы от данных после нажатия добавить
            mdBox.style = null;//закрытие формы после нажатия добавить
            createCard(body);//добавление кота без перезагрузки страницы
        } else {
            return res.json();
        }
    })
    .then(err => {
        console.log(err);//если кот с таким id существует
        if (err && err.message) {
            alert(err.message);//вывести сообщение
        }
    });
});