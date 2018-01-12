"use strict";
function greed(firstname, lastname) {
    console.log("firstname is " + firstname + " lastname is " + lastname);
}
function greednotreq(firstname, lastname) {
    if (lastname === void 0) { lastname = "empty"; }
    console.log("firstname is " + firstname + " lastname is " + lastname);
}
greed("shanu");
greednotreq("shanu", "singh");
