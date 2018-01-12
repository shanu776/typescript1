class Greeter{
    fistname = "shanu";
    sayHello(){
        setInterval(()=>{
            console.log("hello,"+this.fistname);
        },500);
    }
}

class Greeter1{
    fistname = "shanu";
    sayHello(){
        let self = this;
        setInterval(()=>{
            console.log("hello,"+self.fistname);
        },500);
    }
}

let greet = new Greeter();
greet.sayHello();