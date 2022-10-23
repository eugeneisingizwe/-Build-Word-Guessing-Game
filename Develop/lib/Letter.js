//The Letter class is resposible for displaying either an underscore or the underlying for each letter in the word
class Letter {
    constructor(char) {

        //if a character is not a number or a letter, make it visible right away
        //save the underlying character
        this.visible = !/[a-z1-9]/i.test(char);
        this.char = char;
    }

    //Returns either an underscore or the underlying character depending on this "this.visible"
    // because we call this function toString, when we call this.Letters.join in 
    //word.js, javaScript automically use the value we retn here 

    toString() {
        if (this.visible === true){
            return this.char;
        }
            return "_";
    }

    getSolution(){
        return this.char;
    }

    guess(charGuess) {
        if (charGuess.toUpperCase() === this.char.toUpperCase()) {
          this.visible = true;
          return true;
        }

        //otherwise return false
        return false;
    }

  
}

module.exports = Letter;
