"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(myName) {
        this.name = myName;
    }
    Animal.prototype.walk = function (distance) {
        console.log("my name is " + this.name + " and i am walking " + distance + " meter");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(myName) {
        return _super.call(this, myName) || this;
    }
    Snake.prototype.walk = function (distance) {
        console.log("snake don't realy walk");
    };
    return Snake;
}(Animal));
var snk = new Snake("Kaa");
snk.walk(10);
