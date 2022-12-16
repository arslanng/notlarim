function getData(data) {
    return new Promise((resolve, reject) => {
        console.log('Veriler alınmaya çalışılıyor..');
        if (data) {
            resolve('Veriler alındı');
        } else {
            reject('Veriler alınamadı')
        }
    })
}

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log('Veriler düzenleniyor..');
        if (receivedData) {
            resolve('Veriler düzenlendi')
        } else {
            reject('Veriler düzenlenemedi')
        }
    })
}

// cleanData fonksiyonu getData fonksiyonundan sonra çalışmak zorunda

// getData(true)
//     .then(result => {
//         console.log(result);
//         return cleanData(true)
//     }).then(result =>{
//         console.log(result)
//     }).catch(error => {
//         console.log(error)
//     });

// Async - Await

// async function processData(){
// try{
//     const receivedData = await getData(false); // devam etmek için bunu bekle.
//     console.log(receivedData);
//     const cleanedData = await cleanData(true); // devam etmek için bunu bekle.
//     console.log(cleanedData);
// } catch(error) {
//     console.log(error)
// }
// }


// processData();


// ------------------------------------------------
const books = [
    { name: 'Kitap 1', author: 'Yazar 1' },
    { name: 'Kitap 2', author: 'Yazar 2' },
    { name: 'Kitap 3', author: 'Yazar 3' },
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
        // reject('bir hata oluştu');
    })
    return promise1;
};

// addBook({ name: 'Kitap 10', author: 'Yazar 10' })
//     .then(() => {
//         console.log('yeni liste');
//         listBooks();
//     }).catch((error) => {
//         console.log(error);
//     });

async function showBook(){
    try{
        await addBook({ name: 'Kitap 12', author: 'Yazar 12' });
        listBooks(); 
    }catch(error){
        console.log(error);
    }
};

showBook();