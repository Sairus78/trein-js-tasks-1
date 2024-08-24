// function greet(name) {
//   return `Welcome ${name}!`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet('Mango')); // "Welcome Mango!"

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

// console.log(greet('Sairus'));

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }

// const student = {
//   name: 'Ivan',
//   age: 20,
//   city: 'Kyiv',
//   course: 'Programming',
// };
// const keys = [];
// const values = [];
// for (const key in student) {
//   values.push(student[key]);
//   keys.push(key);
// }

// console.log(keys);
// console.log(values);

// const car = {
//   brand: 'Toyota',
//   model: 'Camry',
//   year: 2021,
//   color: 'White',
// };

// for (const key in car) {
//   values.push(car[key]);
//   keys.push(key);
// }
// console.log(keys);
// console.log(values);

// const westPros = {
//   1: 'yellow',
//   2: 'blue',
//   3: 'green',
//   4: 'red',
//   5: 'black',
// };
// const proba = [];
// for (const key in westPros) {
//   if (key % 2 === 0) {
//     proba.push(westPros[key]);
//   }
// }
// console.log(proba);

// const weekCalories = [
//   { day: 'Monday', calories: 2500 },
//   { day: 'Tuesday', calories: 2700 },
//   { day: 'Wednesday', calories: 2200 },
//   { day: 'Thursday', calories: 3000 },
//   { day: 'Friday', calories: 2800 },
//   { day: 'Saturday', calories: 2600 },
//   { day: 'Sunday', calories: 2400 },
// ];
// const dersKre = () => {
//   return weekCalories.map(coll => {
//     return {
//       day: weekCalories.length + coll.day,
//       calories: coll.calories + 'Hvatit',
//     };
//   });
// };
// const iAmSuper = dersKre();
// console.log(iAmSuper);
// const onNight = weekCalories.map(week => {
//   return week.day + week.calories;
// });
// const onNight = weekCalories.map(week => {
//   if (week.calories > 2500) {
//     return `${week.calories} is toMatch!`;
//   }
//   return week.calories;
// });
// console.log(onNight);

// const link = document.querySelector('.link');
// console.log(link.href); // "https://goit.global"
// link.href = 'https://neo.goit.global';
// console.log(link.href); // "https://neo.goit.global"

// const image = document.querySelector('.image');
// console.log(image.src); // https://picsum.photos/id/9/320/240
// console.log(image.alt); // A laptop

// // image.src = 'https://picsum.photos/id/13/640/480';
// // image.alt = 'River bank';

// image.src =
//   'https://images.pexels.com/photos/26924196/pexels-photo-26924196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
// image.alt = 'elephant';
// console.log(image.alt);

// const el = document.querySelector('.text');
// const nested = document.querySelector('.sub-text');

// console.log(el.textContent); // "Username: Mango"
// console.log(nested.textContent); // "Mango"

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// const books = [
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
//   { title: '1984', author: 'George Orwell' },
//   { title: 'Moby Dick', author: 'Herman Melville' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
//   { title: 'Pride and Prejudice', author: 'Jane Austen' },
// ];
// const getBook = document.querySelector('.book-list');

// const fragment = document.createDocumentFragment();

// books.forEach(book => {
//   const itemEl = document.createElement('li');

//   const spanTitle = document.createElement('span');
//   spanTitle.classList.add('book-title');

//   const spanAutor = document.createElement('span');
//   spanAutor.classList.add('book-author');

//   spanTitle.textContent = book.title;
//   spanAutor.textContent = book.author;

//   itemEl.append(spanTitle, ' by ', spanAutor);
//   fragment.append(itemEl);
// });
// getBook.append(fragment);
