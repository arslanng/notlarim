function showPrimeNumbers(lownumber, highnumber){
    for(let i = lownumber; i<=highnumber; i++){
       let isPrime = true;
       for (let j = 2; j <= i; j++){
        if (i%j===0 && j !==i){
            isPrime = false
        }
       } 
       if(isPrime){
        console.log(i);
       }
    }
}

function deneme(){
    console.log('deneme');
};

module.exports = {showPrimeNumbers, deneme}; // Bu işlem ile fonksiyonu diğer dosyaların kullanımına açıyoruz.
