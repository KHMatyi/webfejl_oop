/**
 * @typedef {{nev:String ,eletkor:Number}} Person
 * @typedef {Person[]} Persons
 * @callback UpdateCallback(Persons)
 */
class DataManager{
    /**
     * @type {Person[]}
     */
    #array;
    /**
     * @type {UpdateCallback}
     */
    #updateCallback;
    /**
     * @param {Person[]} array
     */
    constructor(array = []){
        this.#array = array;
        this.#updateCallback = ()=>{};
    }
    /**
     * @param {UpdateCallback} callback 
     */
    setUpdateCallback(callback){
        this.#updateCallback = callback;
        this.#updateCallback(this.#array);
    }
    /**
     * 
     * @param {Person} p 
     */
    add(p){
        this.#array.push(p);
        this.#updateCallback(this.#array)
    }
    /**
     * @param {String} name 
     */
    filterName(name){
        const results = [];
        for (const i of this.#array){
            if (i.nev.includes(name)){
                results.push(i);
            }
        }
        this.#updateCallback(results)
    }
    /**
     * 
     * @param {Number} age 
     */
    filterAge(age){
        const results = [];
        for (const i of this.#array){
            if (i.eletkor == age){
                results.push(i);
            }
        }
        this.#updateCallback(results)
    }
}
class DataTable{
    /**
     * 
     * @param {DataManager} dataManager 
     */
    constructor(dataManager){
        const table = document.createElement("table");
        document.body.appendChild(table);
        const tbody = document.createElement("tbody");
        table.appendChild(tbody);

        dataManager.setUpdateCallback((Persons)=>{
            tbody.innerHTML = "";
            for (const i of Persons){
                const tr = document.createElement("tr");
                tbody.appendChild(tr);
                
                const td1 = document.createElement("td");
                tr.appendChild(td1);
                const td2 = document.createElement("td");
                tr.appendChild(td2);
                td1.innerHTML = i.nev;
                td2.innerHTML = i.eletkor;
            }
        });
    }
}

const data = [{nev:"jani",eletkor:34},{nev:"hehe",eletkor:334}]
const dm = new DataManager(data);
const dt = new DataTable(dm);