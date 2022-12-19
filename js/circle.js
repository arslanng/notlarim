function circleArea(r){
    let alan = r*r*Math.PI;
    console.log(alan);
};

function circleCircumference(r){
    let cevre = 2*Math.PI*r;
    console.log(cevre);
}

module.exports = {circleArea, circleCircumference};