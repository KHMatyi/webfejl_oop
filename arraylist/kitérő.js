function fun(param){
    console.log(param.nev)
}

function funa(){
    console.log(this.nev)
}
fun({nev: "hehe?"})
funa()
const körte = funa.bind({nev: "andrás"})
körte()
funa()
funa = funa.bind({nev: "andrás"})
funa()

const funb = function(param){
    console.log(param.nev)
}
const func = (param)=>{
    console.log(param.nev)
}

const obj = {
    fun: (param)=>{
        console.log(param.nev)
    }, 
    funa: (param) => {
        console.log(param.eletkor)
    }, 
}

obj.funa({eletkor: 2})