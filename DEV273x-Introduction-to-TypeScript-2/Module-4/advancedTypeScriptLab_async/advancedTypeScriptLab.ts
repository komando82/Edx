class genericClass<T> {
    val : T;
    setVal(val : T) {
        this.val = val;
    }
    getVal() : T {
        return this.val;
    }
}

let element1 = new genericClass<Element>();
let element2 = new genericClass<HTMLElement>();
let element3 = new genericClass<Element>();

element1.setVal(document.createElement('div'));
element2.setVal(document.createElement('div'));
element3.setVal(document.createElement('div'));

let elementArray = [
    element1.getVal(),
    element2.getVal(),
    element3.getVal(),
]

function isHTMLElement(x: any): x is HTMLElement {
    return x.style !== undefined;
}

function convertElement(elem : Element | HTMLElement): HTMLElement {
    if (!isHTMLElement(elem)) {
        return <HTMLElement>elem;
    }
    else {
        return elem;
    }
}

function standardizeElements(elemArray: Array<any>) : Array<HTMLElement> {
    for (let elem of elemArray) {
        convertElement(elem)
    }
    return elemArray;
}

let standardElements = standardizeElements(elementArray);

class Rotater {
    rotate (elem: HTMLElement) {
        elem.style.transform = "rotate(-315deg)"
    }
    rotateBack (elem: HTMLElement) {
        elem.style.transform = ""
    }
}

class Mover {
    move (elem: HTMLElement) {
        elem.style.transform = "translateX(50px)"
    }
    moveBack (elem: HTMLElement) {
        elem.style.transform = ""
    }
}

@animated
class movingElement implements Rotater, Mover {
    rotate: (elem: HTMLElement) => any
    move: (elem: HTMLElement) => any
    moveBack: (elem: HTMLElement) => any
    rotateBack: (elem: HTMLElement) => any
    animated: false;
    
    element: HTMLElement
    constructor(elem: HTMLElement) {
        elem.onmousedown = () => {
            this.move(elem);
        }
        elem.onmouseup = () => {
            this.moveBack(elem);
        }
        elem.onmouseover = () => {
            this.rotate(elem);
        }
        elem.onmouseout = () => {
            this.rotateBack(elem);
        }
        if (this.animated) {
             elem.style.transition = "transform .5s ease"
        }
        this.element = elem;
    }
}

function applyMixins(derivedClass: any, baseClasses: any[]) {
    baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}

applyMixins(movingElement, [Mover, Rotater])

for (let elem of standardElements) {
    elem.style.width = "60px"
    elem.style.height = "60px"
    elem.style.margin = "5px"
    let elemClass = new movingElement(elem);
    
    getAvatar_Async(elemClass.element);
}

function animated(constructor: Function) {
    constructor.prototype.animated = true;
    return constructor;
}

async function getAvatar_Async (elem: HTMLElement) {
    let uiName = await fetch('https://uinames.com/api/');
    let avatarName = await uiName.json();
    alert('Hi! My name is ' + avatarName.name);
    let avatar = 'https://robohash.org/set_set3/'+ avatarName.name +'?size=60x60' 
    elem.style.backgroundImage = 'url("' + avatar + '")';
    document.body.appendChild(elem);
}

