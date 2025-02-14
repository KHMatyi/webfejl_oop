/**
 * @callback NextQuestionCallback
 * @param {string} kerdes
 * 
 * @callback NextAnswersCallback
 * @param {string[]} valaszok
 * 
 * @callback FinishCallback
 * @param {string} result
 */

class Manager{
    /**
     * @type {Question[]}
     */
    #array;

    /**
     * @type {number}
     */
    #currentQuestionNumber;
    /**
     * @type {Object}
     */
    #selectedAnswer;
    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback;
    /**
     * @type {NextAnswersCallback}
     */
    #nextAnswersCallback;
    /**
    * @type {FinishCallback}
    */
    #finishCallbak;
    /**
     * 
     * @param {Question[]} array 
     */
    constructor(array = []){
        this.#array = array;
        this.#currentQuestionNumber = 0;
        this.#selectedAnswer = [];
    }
    /**
     * @param {NextQuestionCallback} callback 
     */
    setNextQuestionCallback(callback){
        this.#nextQuestionCallback = callback;
    }
    /**
     * @param {NextAnswersCallback} callback 
     */
    setNextAnswersCallback(callback){
        this.#nextAnswersCallback = callback;
    }
    /**
     * @param {FinishCallback} callback 
     */
    setFinishCallback(callback){
        this.#finishCallbak = callback;
    }

    nextQuestion(answer){
        this.#selectedAnswer[this.#currentQuestionNumber] = answer;
        this.#currentQuestionNumber++;
        if(this.#currentQuestionNumber < this.#array.length){
            const nextQuestion = this.#array[this.#currentQuestionNumber];
            this.#nextQuestionCallback(nextQuestion.questionText);
            this.#nextAnswersCallback(nextQuestion.answers);
        } else {
            let counter = 0;
            for(const index in this.#array){
                if(this.#array[index].rightAnswer === this.#selectedAnswer[index]){
                    counter++;
                }
            }
            const result  = `Akerdessor végetért: ${this.#array.length}/${counter}`
            this.#finishCallbak(result);
        }
    }

    start(){
        this.#nextQuestionCallback(this.#array[0].questionText);
        this.#nextAnswersCallback(this.#array[0].answers);
    }
}

