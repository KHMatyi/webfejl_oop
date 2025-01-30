class ArrayList{
    #len;
    #bigD;
    #arrayTable
    get Count() {
        return this.#len;
    }
    #init(){
        this.#len = 0;
        this.#bigD = {};
    }
    /**
     * 
     * @param {TableHTMLArray} array 
     */
    constructor(array = undefined) {
        this.#init();
        this.#arrayTable = array;
    }
    Add(element){
        this.#bigD[this.#len] = element;
        Object.defineProperty(this, this.#len, {
            get:()=>{
                return element;
            },
            set:(v)=>{
                this.#bigD[this.#len] = v;
            },
            defineProperty: true,
            enumerable: true,
        });
        this.#len++;
        if (this.#arrayTable) {
            this.#arrayTable.addPersonRow(element);
        }
    }
    Clear(){
        this.#init()
        for (const property in this) {
            delete this[property];
        }
    }
    Contains(v){
        for (let i = 0; i < this.#len ; i++){
            if (this.#bigD[i] == v){
                return true;
            }
        }
        return false;
    }
}

class TableHTMLArray extends HTMLElement{
    #tbody
    #thead
    constructor(){
        super();
        
    }
    /**
     * @param {{nev:String,eletkor:number}} v 
     */
    addPersonRow(v){
        const tr = document.createElement("tr");
        this.#tbody.appendChild(tr);
        const td1 = document.createElement("td");
        tr.appendChild(td1);
        const td2 = document.createElement("td");
        tr.appendChild(td2);
        td1.innerHTML = v.nev
        td2.innerHTML = v.eletkor
    }
    connectedCallback(){
        const t = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("body");
        t.appendChild(thead);
        t.appendChild(tbody);
        this.#tbody = tbody
        this.#thead = thead
        this.appendChild(t);
    }
}
customElements.define("array-table",TableHTMLArray);
const ta = new TableHTMLArray();
document.body.appendChild(ta);
ta.connectedCallback()
ta.addPersonRow({nev:"hehe",eletkor:23})

const al = new ArrayList(ta);
al.Add({nev:"hehe2",eletkor:24})

function valami(){
    al.Add({nev:"hehe2",eletkor:24});
}
