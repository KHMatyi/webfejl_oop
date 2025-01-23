class ArrayList{
    #len;
    #bigD;
    get Count() {
        return this.#len;
    }
    #init(){
        this.#len = 0;
        this.#bigD = {};
    }
    constructor() {
        this.#init()
    }
    Add(element){
        this.#bigD[this.#len] = element;
        Object.defineProperty(this, this.#len, {
            get:function(){
                return element;
            },
            set:function(v){
                this.#bigD[this.#len] = v;
            },
            defineProperty: true,
            enumerable: true,
        });
        this.#len++;
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