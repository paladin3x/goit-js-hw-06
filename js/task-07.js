//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
//     перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const refs = {
    inputControler: document.querySelector("#font-size-control"),
    spanText: document.querySelector("span#text")
}

refs.inputControler.addEventListener("input", (event) => {
    let valueControler = event.currentTarget.value;

    refs.spanText.style.fontSize = `${valueControler}px`; 

    // Зміна кольору))
     if (valueControler > 48)
    { refs.spanText.style.color = "green" } 
    else { refs.spanText.style.color = "red"}
})

