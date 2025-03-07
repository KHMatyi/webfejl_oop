const fv1 = (a,b) => {
    return a + b;
}

function fv2(a,b,cb){
    let v1 = cb(a,2)
    let v2 = cb(b,4)
    return cb(v1,v2);
}

console.log(fv1(5,7));
console.log(fv2(5,7,(a,b)=> a+b))
console.log(fv2(5,7,fv1))

const fv3 = (operator) => {
    if (operator === "-"){
        return (a,b) => a-b;
    }
    if (operator === "x*2"){
        const multi = 2;
        return (a,b) => multi*(a+b);
    }
}
console.log(fv3("-")(5,7))
console.log(fv2(5,7,fv3("-")))
console.log(fv2(5,7,fv3("x*2")))

