// Лічильник складається зі спану і кнопок,
//  які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const refs = {
    counterValue : document.querySelector("#value"),
    linkDecrement : document.querySelector(`button[data-action="decrement"]`),
    llinkIncrement : document.querySelector(`button[data-action="increment"]`)
}

refs.llinkIncrement.addEventListener('click', increment);
refs.linkDecrement.addEventListener('click', decrement)
refs.counterValue.value = Number(0);

function increment() {
    refs.counterValue.textContent ++;
}

function decrement() {
    refs.counterValue.textContent --;
}