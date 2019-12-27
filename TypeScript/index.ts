let str :string = 'Hello TS';
let nb :number = 44;
let isAct :boolean = false;

let strArray :string[] = ['A', 'B', 'C'];
let numArray :Array<number>= [1,2,3];

/// function

function loginfo(name: string, age: number):void {
    console.log('info:  ${name}, ${age}');
}

loginfo('Username', 25);


function calc(a: number, b: number | string): number | string {
    if(typeof b === 'string') {
        return b +=b;
    }
    return a+b;
}
calc(5,5);

