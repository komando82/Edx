enum DiceNumbers {
    One,
    Two,
    Three,
    Four,
    Five,
    Six
}

interface ElementSet {
    div: Element
}

class Dice {
    div: Element;
    constructor(div: Element){
        this.div = div;
    }
}

class DiceRoller extends Dice {

    static DiceNumbers = DiceNumbers;
    constructor(div: Element) {
        super(div);
        (this.div as HTMLElement).style.width = squareSize;
        (this.div as HTMLElement).style.height = squareSize;
        (this.div as HTMLElement).style.border = squareBorder;
        (this.div as HTMLElement).style.display = squareDisplay;
        (this.div as HTMLElement).style.margin = squareMargin;
        (this.div as HTMLElement).style.textAlign = squareAlign;
        (this.div as HTMLElement).style.lineHeight = squareSize;
        (this.div as HTMLElement).style.fontSize = squareFontSize;
    }

    changeNumber (number: number) : boolean{
        (this.div as HTMLElement).textContent = DiceNumbers[number];
        return true;
    }
}

let getRandomIntInclusive: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let elementSets : Array<ElementSet> = [];
let color: string;

// Square styles in variables
let squareSize: string = "100px";
let squareBorder: string = "10px solid black";
let squareDisplay: string = "inline-block";
let squareMargin: string = "0 20px 0 0";
let squareAlign: string = "center";
let squareFontSize: string = "24px";

for (let index: number = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div')
    })
}

let diceArray: Array<DiceRoller> = [];

elementSets.map( (elem, index) => {
    let numberChangeClass = new DiceRoller(elem.div);
    diceArray.push(numberChangeClass);

    numberChangeClass.changeNumber(getRandomIntInclusive(0, 5));
    
    document.body.appendChild(elem.div);
});

let button: HTMLElement = document.createElement('button');

// Button styles in variables
button.innerText = "Roll the Dice";
button.style.padding = "5px 20px";
button.style.fontSize = "20px";
button.style.cursor = "pointer";

document.body.appendChild(button);

button.onclick = (event) => {
    diceArray.map( (elem, index) => {
        elem.changeNumber(getRandomIntInclusive(0, 5));
    });
}
