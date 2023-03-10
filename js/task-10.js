function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і 
//  натискає кнопку Створити, після чого рендериться колекція.
//  Натисненням на кнопку Очистити, колекція елементів очищається.


// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount),
//   яка приймає один параметр - число.Функція створює стільки < div >,
//     скільки вказано в amount і додає їх у div#boxes.

// 1. Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3. Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.\

const refs = {
  btnDestroy : document.querySelector("button[data-destroy]"),
  btnCreate : document.querySelector("button[data-create]"),
  inputNumber: document.querySelector("#controls input"),
  divBoxes : document.querySelector("#boxes")
}

// Створення
refs.btnCreate.addEventListener("click", createBoxes); 
function createBoxes(amount) {

  amount = refs.inputNumber.value;
  const newBox = [];

  if (amount <= 100) {
    for (let i = 1, size = 30; i <= amount ; i += 1, size += 10)  {
    let boxCreate = document.createElement("div");
    boxCreate.style.width = `${size}px`;
    boxCreate.style.height = `${size}px`;
    boxCreate.style.border = "black solid 1px";
    boxCreate.style.borderRadius = "10px";
    boxCreate.style.backgroundColor = getRandomHexColor();
    refs.divBoxes.style.gap = "5px";
    refs.divBoxes.style.display = "flex";
    refs.divBoxes.style.flexDirection = "column";
    newBox.push(boxCreate)
    }}
  
 refs.divBoxes.append(...newBox);
}

// Знищення
refs.btnDestroy.addEventListener("click", () => {
  refs.divBoxes.innerHTML = "";
})

