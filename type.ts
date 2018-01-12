let isThisVideoDone:boolean = false;
let myNumber:number = 4;
let myName:string = "shanu";
let greeting:string = "hello, "+myName;
let greeting1:string = 'hello, ${myName}';
let count:Array<number> = [1,2,3,4];
let anything:any = 4;
anything = "bhanu";
anything = false;

function greeter(name:string):void{
console.log("hello"+name);
}

let joystick = 1;
enum Directions{Up, Down, Left, Right};