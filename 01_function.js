


function sayMyName(){
    console.log("S");
    console.log("A"); 
    console.log("N");
    console.log("T");
    console.log("O");
    console.log("S");
    console.log("H");


}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)



// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    
    // return result
    return number1 + number2

   
}
const result = addTwoNumbers(4, 7)
// console.log("Result: ", result);

function loginUserMessage(username){
    return '${username} just logged in'
}
//console.log(loginUserMessage("santosh"))
//console.log(loginUserMessage())

// function calculateCartPrice(val1, val2, ...num1){
//     return num1

// }
//console.log(calculateCartPrice(400, 300, 700, 4000)) 
const user = {
    username: "santosh",
    price: 999

}
function handleObject(anyobject){
    console.log('Username is ${anyobject.Username} and price is ${anyObject.Price}');
}

handleObject(user)

handleObject({
    username: "sam",
    price: 490
})



const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200, 400, 2000,4500]));















