'use strict';

//1 ЗАДАНИЕ
console.log(document.querySelector('div'));
console.log(document.querySelector('ul'));
console.log(document.querySelectorAll('li')[1]);


//2 ЗАДАНИЕ 
//Необходимо получить все элементы "li" на странице и добавить к каждому из них класс "list-item".
let elements = document.querySelectorAll('ul> li');

for (let elem of elements) {
    console.log(elem.innerHTML)
    elem.classList.add('list-item')
    console.log(elem.className)
}


//3 ЗАДАНИЕ
//Запросить от пользователя цифру. После вывести блоки, количество которых будет равно этой цифре.

let num = +prompt('Введите цифру');

for (let i = 0; i < num; i++) {
    let body = document.querySelector('body');
    let div = document.createElement('div');
    div.className = 'square';
    div.style.background = 'pink';
    div.style.width = '150px';
    div.style.height = '150px';
    div.style.marginBottom = '20px'
    body.append(div)
}


//4 ЗАДАНИЕ
//Создайте форму с полями "Имя" и "Email" и кнопкой "Отправить"email
let body = document.querySelector('body');
let form = document.createElement('form');
form.style.display = 'flex';
form.style.flexDirection = 'column'
form.style.width = '350px'
form.style.gap = '20px'
let inputName = document.createElement('input');
inputName.style.padding = '10px 15px';
inputName.placeholder = 'Введите имя';
let inputEmail = document.createElement('input');
inputEmail.style.padding = '10px 15px';
inputEmail.placeholder = 'Введите Email';
let btn = document.createElement('button')
btn.innerHTML = 'Отправить';
btn.style.padding = '10px 15px';
form.append(inputName, inputEmail, btn)
body.append(form)


