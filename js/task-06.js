// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

{/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/> */}

// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const refs = {
    linkInput: document.querySelector("#validation-input"),
}
const attributesLength = refs.linkInput.getAttribute('data-length');


refs.linkInput.addEventListener("focus", () => {
    refs.linkInput.classList.remove("valid");
    refs.linkInput.classList.remove("invalid");
});

refs.linkInput.addEventListener("blur", (event) => {
    let inputValue = (event.currentTarget.value).trim();
    inputValue.length === Number(attributesLength)
        ? refs.linkInput.classList.add("valid")
        : refs.linkInput.classList.add("invalid")
})


