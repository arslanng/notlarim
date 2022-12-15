function alan(r){
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${Math.PI*r*r}`)
};

alan(process.argv.slice(2,3));