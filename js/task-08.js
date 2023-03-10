// *Напиши скрипт управління формою логіна.

/* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form> */

// 1.Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2.Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3.Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//  що всі поля повинні бути заповнені.
// 4.Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
//  де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
// 5.Для доступу до елементів форми використовуй властивість elements.
// 6.Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const refs = {
    linkForm: document.querySelector(".login-form"),
    linkBtnForm: document.querySelector("button")
}

refs.linkForm.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        alert("Порожній рядок? Введіть ваші дані)");
        return;
    }

    console.log(`email: ${email.value} password: ${password.value}`);
    event.currentTarget.reset();
}
