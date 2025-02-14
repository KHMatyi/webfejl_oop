class Question{
  /**
   * @type {string}
   */
  #questionText;
  /**
   * @type {string[]}
   */
  #answers;
  /**
   * @type {string}
   */
  #rightAnswer
  /**
   * @returns {string[]}
   */
  get answers(){
    return this.#answers;
  }
  /**
   * @returns {string[]}
   */
  get questionText(){
    return this.#questionText;
  }
  /**
   * @returns {string[]}
   */
  get rightAnswer(){
    return this.#rightAnswer;
  }
  /**
   * @param {string} questionText 
   * @param {string[]} answers 
   * @param {string} rightAnswer 
   */
  constructor(questionText,answers,rightAnswer){
    this.#questionText = questionText;
    this.#answers = answers;
    this.#rightAnswer = rightAnswer;
  }

}
