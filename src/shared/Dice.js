class Dice{
    constructor(){

    }

    roll(){
        const minFace = 1;
        const maxFace =6;
        const faceValue =  Math.floor(Math.random() * (maxFace-minFace+1) + minFace);
        return faceValue;
    }
}

module.exports = Dice;