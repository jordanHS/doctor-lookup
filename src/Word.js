//import  Letter from "./Letters.js";
//import Game from "./Game.js";

export default class Word {
    constructor(word){
        this.word = word;
        this.letter = [];
        this.guessCorrect = 0;
        this.totalLetters = this.word.length;
        this.letterMiss = this.letterMiss();
        this.printWord = this.printWord();
        this.correctWord = this.correctWord();
    } 
  
 letterMiss(input)
 {
     letter.every(function(input){
    letter[0] === input;
    })
 }
 
    printWord(){
        let that = this;
        //split method will split a string obj to array of strings
        let word = this.word.split("");
        let output = "";
        //execute a provided function once for each an array element
        word.forEach(function(letter, index) {
            //show the letters in the index and display space
            (output += that.letters[index]), display();
        });
        console.log(output + "\n");
    };
    
    // correctWord() {
         /* forEach(elem, param){ //DBL CHK param names.
            for( let i = 0; i<letters.length; i++){
                if (this.letters.every(input)){
                        letters[0] === input;
                        Game.finalWordPushedArray.push(this.letter));
                    }
                }
            }
        }*/                
    
};

//};
// Correct word ['t','e','s','t']
// track which letter they're guessing for
// compare the input (single char) to word Array(corresponding index)
// if correct letter - output that letter on the screen
//     else - output __ on the screen