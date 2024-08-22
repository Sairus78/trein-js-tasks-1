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
