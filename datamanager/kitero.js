const obj = {}

const sum = (a,b)=>{
    return a + b;
}
console.log(sum(1,1));

obj.calculate2= (bemenet) => {
    return bemenet(1,2)
}
obj.calculate2((a,b)=>{
    return a + b;
});

obj.calculate3 = (a,b,callback) =>{
    return callback(a,b);
}
obj.calculate3(1,1,(a,b)=>{
    return a+b;
})
const theFn = ()=>{
    const szam = 10;
    const val = obj.calculate3(2,7,(a,b)=>{
        return a*b+szam;
    })
    return val;
}
console.log(theFn())