
class FormController{
    /**
     * @type {Manager}
     */
    #manager;
    /**
     * @type {FormField[]}
     */
    #formFieldArray;
    /**
     * 
     * @param {{id:string, lable:string, type:string, optional?:boolean}[]} fieldConfiguration 
     * @param {Manager} manager 
     */
    constructor(fieldConfiguration, manager){
        this.#formFieldArray = [];
        this.#manager = manager;
        const form = document.createElement("form");
        document.body.appendChild(form);
        for(const field of fieldConfiguration){
            const formField = new FormField(field.id, field.label, field.type, field.optional);
            this.#formFieldArray.push(formField);
            form.appendChild(formField.getDivElement())
        }
        const sendButton = document.createElement("button");
        sendButton.textContent = "Elkuld";
        form.appendChild(sendButton);    
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if(this.#validateAllFields()){
                const value = this.#getValueOpject();
                const student = new Student(value.studentname, value.studentaverage, value.studentcomment, value.studentbad)
                manager.add(student);
                e.target.reset();
            }
            
        })
    }

    #validateAllFields(){
        let valid = true;
        for(const formField of this.#formFieldArray){
            if(!formField.optional){
                if(formField.value === ""){
                    formField.error = "Mető kitöltése kötelező";
                    valid = false;
                }
            }
        }
        return valid;
    }
    /**
     * 
     * @returns {{studentname:string,studentaverage:string,studentcomment:string,studentbad:string}}
     */
    #getValueOpject(){
        const result = {};
        for(const formField of this.#formFieldArray){
            result[formField.id] = formField.value;
        }
        return result;
    }
}


class FormField{
    /**
     * @type {string}
     */
    #id;
    /**
     * @type {string}
     */
    #type;
    /**
     * @type {boolean}
     */
    #optional;
    /**
     * @type {HTMLInputElement}
     */
    #inputField;
    /**
     * @type {HTMLSpanElement}
     */
    #errorField;
    /**
     * @type {HTMLLabelElement}
     */
    #labelElement;

    get id(){
        return this.#id;
    }

    /**
     * @returns {string | boolean}
     */
    get value(){
        if(this.#type === "checkbox"){
            return this.#inputField.checked;
        }
        return this.#inputField.value;
    }

    get optional(){
        return this.#optional;
    }


    
    set error(value){
        this.#errorField.textContent = value;
    }

    constructor(id,labelContent, type, opional=false){
        this.#id = id;
        this.#type = type;
        this.#optional = opional;
        this.#labelElement = Gomszab.makeLabel(id, labelContent);
        this.#inputField = Gomszab.makeInput(id, type);
        this.#errorField = Gomszab.makeErrorField();
        
    }

    getDivElement(){
        const div = Gomszab.makeDiv([this.#labelElement,this.#inputField,this.#errorField]);
        return div;
    }
}
