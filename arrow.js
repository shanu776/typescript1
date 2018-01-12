"use strict";
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.fistname = "shanu";
    }
    Greeter.prototype.sayHello = function () {
        var _this = this;
        setInterval(function () {
            console.log("hello," + _this.fistname);
        }, 500);
    };
    return Greeter;
}());
var Greeter1 = /** @class */ (function () {
    function Greeter1() {
        this.fistname = "shanu";
    }
    Greeter1.prototype.sayHello = function () {
        var self = this;
        setInterval(function () {
            console.log("hello," + self.fistname);
        }, 500);
    };
    return Greeter1;
}());
var greet = new Greeter();
greet.sayHello();
