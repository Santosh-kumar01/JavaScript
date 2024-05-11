// const userEmail = "santosh@kumargmail.com"
// const userEmail = ""  
const userEmail = []
if(userEmail){
    //console.log("got user email");
}else{
    //console.log("don't have user email");
}

//falsy values :
// false is also false value , 0 , -0(neagtive zero), "", null, NaN, bigInt on

//TRUE VALUES:-
//truthy values , "0", 'false', "false"," ",[],{},
//function(){}:- these function are empty function

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    //console.log("Object is empty"); 

}

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

//Nullish coalescing operator and terniary operator both are different

//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");