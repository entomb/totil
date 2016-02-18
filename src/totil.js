

var evaluate = function(input){
    switch(typeof input){

        case 'undefined': return false;

        case 'object': 
            if(input.constructor != Object) return evaluate(input.valueOf());
            for(any in input) return true; 
            return false;
        break;
        case 'string': 
            if(input==="1")     return true;
            if(input==="true")  return true; 
            if(input==="0")     return false; 
            if(input==="false") return false; 
            if(input==="")      return false; 
             
            return (input.length>0);
        break; 
        case 'number':  
             if(input==0) return false;
             if(input==1) return true;
             if(input==Infinity) return false;

            return !!input;
        break; 
    }

    return !!input;
}


module.exports = evaluate