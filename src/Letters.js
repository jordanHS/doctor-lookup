import Game from "./Game.js";
import Word from "./Word";
import "./main.js";

export default class Letter {
    constructor(letter){
        this.letter = letter; 
        this.letters = [];
        this.totalLetters = this.word.length;   //this.word.length;
        this.letterMiss = letterMiss();
    }

       letterMiss(){
        // forEach(elem, param){  //similar to the 
        for( let i = 0; i<letters.length; i++){  //TODO: letters.length from WORD.word...
            if (this.letters.every(input)){
                    letters[0] === input;
                    Game.finalWordPushedArray.push(this.letter);
                } else if (this.letters != Word.word) {
                    //if not, will display underscore
                    let underscore = "_";
                    Game.letterMissArray.push(this.letter);
                    //return validLetter/Word.push(currentLetter/word);
                    return underscore;
                } else {
                    return letter;
                }
            }

                // forEach(elem,param)/.every();
            //then set the letter araay as a letter.push(word);
        };
};
