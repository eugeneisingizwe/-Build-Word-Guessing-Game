const Letter = require("./Letter");

class Word {
    //word.split - splots word into array of letters
    //.map -instantiate a new "letter" for each character and return an arry
    // referred to with the instance vairable. "letters"
    constructor(word) {
        this.Letters = word.split("").map(char => new Letter(char));
    }

    getSolution(){
        return this.Letters
        //iterate over ech letter and return the solution for each
        // to form an array of solved letters 
        .map(letter => letter.getSolution())
        .join("");//create string a from the array of solved letters 
    }

    //setting "toString ()" as method lets is concatenate it like we would a string!
    toString(){
        return this.Letters.join("");// see letter.protoype.toString in Letter.js
    }

    guessLetter(char){
        //checks to see if any of the letters in the arrau match the user's guess and updates "foundLetter"
        let foundLetter = false;
        this.Letters.forEach(letter => {
            if (letter.guess(char)){
                foundLetter = true;
            }
        });
        //return whether we found a letter
        return foundLetter;
    }

    //returns true if all letters in the word have been guessed
    guessedCorrectly(){
        //The "every" method returns true if the callback function returns true for every element in the array
        return this.Letters.every(letter => letter.visible); 
    }

  
}

module.exports = Word;
