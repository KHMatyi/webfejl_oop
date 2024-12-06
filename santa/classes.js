
class Factory{
 // TODO 1, 2, 3, 4, 9, 10
    constructor(){
        this.manólist = []; 
    }

    addmaó(manó){
        this.manólist.push(manó);
        createRow(manó);
    }
}

class Companion{
    constructor(id, keresztnév, vezetéknév, részleg, produckts = []){
        this.id = id;
        this.keresztnév = keresztnév;
        this.vezetéknév = vezetéknév;
        this.részleg = részleg;
        this.produckts = produckts;
    }
    addProduct(produckt){
        this.produckts.push(produckt);
    }
    getName(){
        return this.vezetéknév + ' ' + this.keresztnév;
    }
}