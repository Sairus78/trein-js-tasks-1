// const colors = [
//   { name: 'Red', code: '#FF0000' },
//   { name: 'Green', code: '#00FF00' },
//   { name: 'Blue', code: '#0000FF' },
//   { name: 'Yellow', code: '#FFFF00' },
//   { name: 'Purple', code: '#800080' },
//   { name: 'Orange', code: '#FFA500' },
// ];
// const ulList = document.querySelector('.color-list');
// const fragment1 = document.createDocumentFragment();

// colors.forEach(color => {
//   const liEl = document.createElement('li');

//   const spanElName = document.createElement('span');
//   spanElName.textContent = color.name;
//   spanElName.style.fontStyle = 'italic';

//   const codeEl = document.createElement('span');
//   codeEl.textContent = color.code;

//   codeEl.style.backgroundColor = color.code;
//   codeEl.style.color = '#FFFFFF';
//   liEl.append(spanElName, ' its this code ', codeEl);
//   fragment1.append(liEl);
//   liEl.style.padding = '10px';
// });
// ulList.append(fragment1);

// Фільтрація активних користувачів: Створіть функцію getActiveUsers, яка приймає масив об'єктів користувачів і повертає масив тільки з активними користувачами (де active дорівнює true).

// const users = [
//   { id: 1, name: 'Alice', age: 30, active: true },
//   { id: 2, name: 'Bob', age: 25, active: false },
//   { id: 3, name: 'Charlie', age: 35, active: true },
// ];

// function getActiveUsers(users) {
//   // Ваш код тут
//   return users.filter(user => user.active);
// }
// function getActiveUsers(users) {
//   return users.filter(user => user.active);
// }
// console.log(getActiveUsers(users));
// Очікується: [ { id: 1, name: 'Alice', age: 30, active: true }, { id: 3, name: 'Charlie', age: 35, active: true } ]

// Перетворення віку користувачів: Напишіть функцію getUserAges, яка приймає масив об'єктів користувачів і повертає масив віків всіх користувачів.

// const users = [
//   { id: 1, name: 'Alice', age: 30, active: true },
//   { id: 2, name: 'Bob', age: 25, active: false },
//   { id: 3, name: 'Charlie', age: 35, active: true },
// ];

// function getUserAges(users) {
//   return users.map(user => user.age);
// }

// console.log(getUserAges(users));
// // Очікується: [ 30, 25, 35 ]

// Перевірка мінімального віку: Реалізуйте функцію hasUserBelowAge, яка приймає масив об'єктів користувачів та число age. Функція повинна повернути true, якщо в масиві є хоча б один користувач, чий вік менше age.

// function hasUserBelowAge(users, age) {
//   // Ваш код тут
//   return users.some(user => user.age < age);
// }

// const users = [
//   { id: 1, name: 'Alice', age: 30, active: true },
//   { id: 2, name: 'Bob', age: 25, active: false },
//   { id: 3, name: 'Charlie', age: 35, active: true },
// ];

// console.log(hasUserBelowAge(users, 28));
// // Очікується: true
// console.log(hasUserBelowAge(users, 20));
// // Очікується: true
// console.log(hasUserBelowAge(users, 24));
// // Очікується: false
// Вимоги до завдання:
// Відправлення форми:

// Відправлення форми form.registration-form має відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Перевірка заповнення полів:

// Якщо при сабміті є незаповнені поля, виводити alert з повідомленням: 'All form fields must be filled in'.
// Не додавай атрибут required до інпутів; валідація повинна виконуватися за допомогою JavaScript.
// Перевірка пароля:

// Якщо поля "Password" і "Confirm Password" не збігаються, виводити alert з повідомленням: 'Passwords do not match'.
// Збір даних форми:

// Якщо користувач заповнив усі поля правильно і відправив форму, збери значення полів в об'єкт з чотирма властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях.
// Для доступу до елементів форми використовуй властивість elements.
// Обробка даних:

// При сабміті форми виведи об'єкт із введеними даними в консоль.
// Після цього очисть значення полів форми за допомогою методу reset.

const loginForm = document.querySelector('.registration-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const { username, email, password, confirmPassword } = loginForm.elements;

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (
    !usernameValue ||
    !emailValue ||
    !passwordValue ||
    !confirmPasswordValue
  ) {
    alert('All form fields must be filled in');
    return;
  }
  if (passwordValue !== confirmPasswordValue) {
    alert('Passwords do not match');
    return;
  }
  const formData = {
    username: usernameValue,
    email: emailValue,
    password: passwordValue,
    confirmPassword: confirmPasswordValue,
  };
  console.log(formData);

  loginForm.reset();
});
