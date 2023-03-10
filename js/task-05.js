// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//  підставляє його поточне значення в span#name - output.Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */

const refs = {
    linkInputNameEnter: document.querySelector("#name-input"),
    linkNameLogInSpan: document.querySelector("#name-output")    
}


refs.linkInputNameEnter.setAttribute("pattern", "[a-z]{2,15}")
refs.linkInputNameEnter.addEventListener('input', (event) => {
    refs.linkNameLogInSpan.textContent = event.currentTarget.value;
    if (refs.linkInputNameEnter.value === "") {
         refs.linkNameLogInSpan.textContent = "Anonymous"
    }
})




