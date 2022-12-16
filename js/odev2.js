const posts = [
    {author: 'yazar 1', post: 'lorem ipsum1', date: '1.1.2011'},
    {author: 'yazar 2', post: 'lorem ipsum2', date: '2.2.2012'},
    {author: 'yazar 3', post: 'lorem ipsum3', date: '3.3.2013'}
]

const listPost = ()=>{
    posts.map(x=>{
        console.log(`yazar: ${x.author} içerik: ${x.post}`);
    })
};

const addPost = (y) => {
    const promise1 = new Promise((resolve, reject)=>{
        posts.push(y);
        if(y){
            resolve(posts);
        }else{
            reject('bir hata oluştu');
        }
    })
    return promise1;
}

async function addAndList(){
    try{
        await addPost({author: 'yazar 4', post: 'lorem ipsum4', date: '4.4.2014'});
        listPost();
    }catch(error){
        console.log(error);
    }

};

addAndList();