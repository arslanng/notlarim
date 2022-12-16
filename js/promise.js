// const promise1 = new Promise((resolve, reject) => {
//     resolve('Veriler Alındı');
//     reject('Bağlantı Hatası');
// });

// console.log(promise1);

// promise1.then(value => {
//     console.log(value);
// });
// resolve durumundaki değeri yakalar.

// promise1.catch(error => {
//     console.log(error);
// })
// reject durumundaki değeri yakalar.

// promise1
//     .then(value => {
//         console.log(value);
//     }).catch(error => {
//         console.log(error);
//     });
// resorve ve reject durumundaki değeri yakalar.
// --------------------------------------------------------------------

const books = [
    {name: 'Kitap 1', author: 'Yazar 1'},
    {name: 'Kitap 2', author: 'Yazar 2'},
    {name: 'Kitap 3', author: 'Yazar 3'},
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};



const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        reject('bir hata oluştu'); 
    })
    return promise1;
};

addBook({name: 'Kitap 10', author: 'Yazar 10'})
    .then(() => {
        console.log('yeni liste');
        listBooks();
    }).catch((error)=>{
        console.log(error);
    });
