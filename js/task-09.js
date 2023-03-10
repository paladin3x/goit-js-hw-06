function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн - стиль по кліку на button.change - color 
// і виводить значення кольору в span.color.

/* <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div> */

// Для генерування випадкового кольору використовуй функцію
// getRandomHexColor()


const refs = {
  bodyEl: document.querySelector("body"),
  logColorSpan: document.querySelector(".color"),
  btnChangeColor: document.querySelector(".change-color")
}

refs.btnChangeColor.addEventListener("click", (event) => {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.logColorSpan.textContent = refs.bodyEl.style.backgroundColor;
  refs.logColorSpan.style.fontSize = "32px";
})