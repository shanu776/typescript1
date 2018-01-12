abstract class Animal{
    public name:string

    constructor(myName:string){
        this.name=myName;
    }

    walk(distance:number){
       console.log("my name is "+this.name+" and i am walking "+distance+" meter"); 
    }


}

class Snake extends Animal{
    constructor(myName:string){
        super(myName);
    }

    walk(distance:number){
        console.log("snake don't realy walk");
    }
}


let snk = new Snake("Kaa");
snk.walk(10);