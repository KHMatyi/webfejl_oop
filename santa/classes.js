
class Factory{
 // TODO 1, 2, 3, 4, 9, 10
    constructor(){
        this.manólist = []; 
        this.részleglista = ['plastic',"paper"];
    }

    addmaó(manó){
        this.manólist.push(manó);
        createRow(manó);
        appendToSelector(this.createId())
    }
    createId(){
        return this.manólist.length;
    }
    addRészleglista(részleg){
        this.részleglista.push(részleg);
        részlegfeltöltő();
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
        refreshProductList(this);
    }
    getName(){
        return this.vezetéknév + ' ' + this.keresztnév;
    }
}

