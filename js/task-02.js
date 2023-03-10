/**
 * Напиши скрипт, який для кожного елемента масиву ingredients:

1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
2.Додасть назву інгредієнта як його текстовий вміст.
3.Додасть елементу клас item.
4.Після чого, вставить усі <li> за одну операцію у список ul#ingredients. */

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  linkIngradients: document.querySelector("#ingredients"),
}


// Cпосіб 1
const createHtmlSkelet = ingredients.map((element) =>
  `<li class="item">${element}</li>`)
  .join(" ");
// refs.linkIngradients.innerHTML = createHtmlSkelet;
// console.log(refs.linkIngradients);



// Спосіб 2
const potatoes = document.createElement("li");
const mushrooms = document.createElement("li");
const garlic = document.createElement("li");
const tomatos = document.createElement("li");
const herbs = document.createElement("li");
const condiments = document.createElement("li");

potatoes.classList.add("item");
mushrooms.classList.add("item");
garlic.classList.add("item");
tomatos.classList.add("item");
herbs.classList.add("item");
condiments.classList.add("item");

potatoes.textContent = "potatoes";
mushrooms.textContent = "mushrooms";
garlic.textContent = "garlic";
tomatos.textContent = "tomatos";
herbs.textContent = "herbs";
condiments.textContent = "condiments";
// refs.linkIngradients
//   .append(potatoes, mushrooms, garlic, tomatos, herbs, condiments);
 


// Спосіб 3
const completedDomList = [];
  
ingredients.map( element => {
    let li = document.createElement("li");
    li.classList.add("item");
    li.textContent = element;
  completedDomList.push(li);
});

refs.linkIngradients.append(...completedDomList);
console.log(refs.linkIngradients);






