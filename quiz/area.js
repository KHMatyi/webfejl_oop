class Area {
    /**
     * @type {HTMLDivElement}
     */
    #div;
    /**
     * @returns {HTMLDivElement}
     */
    get div(){
        return this.#div;
    }
    /**
     * @param {Manager} manager
     * @param {string} cssClass 
     */
    constructor(cssClass, manager){
        const container = this.#getContaliner();
        this.#div = document.createElement("div");
        this.#div.className = cssClass;
        container.appendChild(this.#div);
        manager.setFinishCallback((resultText)=>{
            container.innerHTML = "";
            const resultDiv = document.createElement("div");
            resultDiv.textContent = resultText;
            resultDiv.className = "result";
            container.appendChild(resultDiv);
        })
    }
    /**
     * @returns {HTMLDivElement}
     */
    #getContaliner(){
        let container = document.querySelector(".container");
        if(!container){
            container = document.createElement("div");
            container.className = "container";
            document.body.appendChild(container)
        }
        return container;
    }
}


class QuestionArea extends Area {
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass,manager){
        super(cssClass,manager);
        manager.setNextQuestionCallback((kerdesSzoveg)=>{
            this.div.innerHTML ="";
            const questionCard = document.createElement("div");
            questionCard.textContent = kerdesSzoveg;
            this.div.appendChild(questionCard);
        })
    }
}

class AnswerArea extends Area {
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager){
        super(cssClass,manager);
        manager.setNextAnswersCallback((valaszok)=>{
            this.div.innerHTML = "";
            for(const valasz of valaszok){
                const answerCard = document.createElement("div");
                answerCard.className = "item";
                answerCard.textContent = valasz;
                answerCard.addEventListener("click", ()=>{
                    manager.nextQuestion(valasz)
                })
                this.div.appendChild(answerCard);
            }
            
        })
    }
}


