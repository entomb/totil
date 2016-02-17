
var Totil = require("../src/totil");

var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;



buster.testCase("is the mic on?", {
    "Who tests the tester?": function () {
        assert(true);
    }
});


buster.testCase("Simple bool values", {
    "true is true": function () {
        assert(Totil(true));
    },
    "false is false": function () {
        refute(Totil(false));
    }
});