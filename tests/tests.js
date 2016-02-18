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

buster.testCase("Objects", {
    "not empty": function () { 
        assert(Totil({a:1}));   
        assert(Totil({a:1,b:2,c:3}));   
    },
    "empty object": function () {
        refute(Totil({}));  
        refute(Totil(new Object()));  
        refute(Totil());  
    },
    "primitives": function () { 
        refute(Totil(new Object(false))); 
        refute(Totil(new Object(0)));
        assert(Totil(new Object(true))); 
        assert(Totil(new Object(123))); 
        assert(Totil(new Object("something"))); 
    }
});


buster.testCase("Strings", {
    "not empty": function () { 
        assert(Totil("something"));     
        assert(Totil(" "));     
        assert(Totil("1"));     
    },
    "empty strings": function () {
        refute(Totil(""));  
        refute(Totil("0"));  
        refute(Totil("false"));  
    },
    "primitives": function () { 
        refute(Totil(new String())); 
        refute(Totil(new String(""))); 
        refute(Totil(new String("0"))); 
        refute(Totil(new String(0))); 
        refute(Totil(new String(false))); 
        refute(Totil(new String("false")));  
        
        assert(Totil(new String("someting"))); 
        assert(Totil(new String("true"))); 
        assert(Totil(new String("1"))); 
        assert(Totil(new String(1))); 
        assert(Totil(new String(true))); 
        assert(Totil(new String("true"))); 
    }
});

buster.testCase("Numbers", {
    "true numbers": function () { 
        assert(Totil(1));     
        assert(Totil(2));     
        assert(Totil(3));     
        assert(Totil(0.1));  
        assert(Totil(0.00000000001));  
        assert(Totil(0.000000000000000000000001));  
        assert(Totil(0.00000000000000000000000000000000000001));  
    },
    "false numbers": function () {
        refute(Totil(0));  
        refute(Totil(-0));  
        refute(Totil(1/0));  
        refute(Totil(NaN));  
    },
    "primitives": function () { 
        assert(Totil(new Number(1)));     
        assert(Totil(new Number("2")));     
        assert(Totil(new Number(3,4,5)));     
        assert(Totil(new Number(0.1)));
        assert(Totil(new Number(0.000000000000000000000001)));

        refute(Totil(new Number("0"))); 
        refute(Totil(new Number(0))); 
        refute(Totil(new Number())); 
        refute(Totil(new Number(NaN))); 
        refute(Totil(new Number(1/0))); 
        refute(Totil(new Number(0.0))); 
        refute(Totil(new Number(-0)));  
    }
});