interface UserInterface {
    name: string,
    age: number,
    logInfo: () => void,
    id?: any
}

const User: UserInterface = {
    name: 'userName',
    age: 30,
    logInfo() {
        console.log(this.name + '' + this.age)
    }
}

interface Hello {
    sayHello : () => void
}

class MyCalss implements Hello {
    constructor(private name: string, private age: number) {}

    sayHello() {
        console.log(this.name + ' Hello');
    }
}

//// GENERIC

const arr:Array<number> = [1,2,3,4,5,6,7,8,9];


interface MyInterface {
    id: number,
    name:string,
    age:number
}

const  users:Array<MyInterface> = [
    {id: 1, name: 'One', age: 30},
    {id: 2, name: 'One1', age: 31}
];

const  users1:MyInterface[] = [
    {id: 1, name: 'One', age: 30},
    {id: 2, name: 'One1', age: 31}
];


