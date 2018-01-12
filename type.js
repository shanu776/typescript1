"use strict";
var isThisVideoDone = false;
var myNumber = 4;
var myName = "shanu";
var greeting = "hello, " + myName;
var greeting1 = 'hello, ${myName}';
var count = [1, 2, 3, 4];
var anything = 4;
anything = "bhanu";
anything = false;
function greeter(name) {
    console.log("hello" + name);
}
var joystick = 1;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
;
