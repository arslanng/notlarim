// -------------asal sayı----------------------
// const primeNumbersModule = require('./primeNumbersModule.js');
// primeNumbersModule.showPrimeNumbers(10,220);

// -------------asal sayı----------------------
// const {hello, topla, yazar} = require("../js/myModule")

// hello();
// topla(5, 27);
// console.log(yazar.title+ " " + yazar.name)

// -------------.then----------------------
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("users yüklendi", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((posts) => console.log("post yüklendi", posts));
//   });

// -------------asnc-await----------------------
// async function getData() {
//   const user = await (
//     await fetch("https://jsonplaceholder.typicode.com/users/1")
//   ).json();

//   const post = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();

//   console.log("users yüklendi", user);
//   console.log("post yüklendi", post);
// }

// getData();

// -------------asnc-await anonim----------------------
// (async()=>{
//     const user = await (
//         await fetch("https://jsonplaceholder.typicode.com/users/1")
//       ).json();

//       const post = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//       ).json();

//       console.log("users yüklendi", user);
//       console.log("post yüklendi", post);
// })();

// -------------promise----------------------
// const getUser = (userId) => {
//   return new Promise(async (resolve, reject) => {
//     const user = await (
//       await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     ).json();
//     resolve(user);
//   });
// };

// (async () => {
//   try {
//     const user = await getUser(2);
//     console.log(user);
//   } catch (err) {
//     console.log(err);
//   }
// })();

