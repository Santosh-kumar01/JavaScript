// singleton
const mysym = Symbol("key1")
const mySym = Symbol("key1")
const JsUser = {
    name: "santosh",
    "full name": "santosh kumar",
    mySym: "myKey1",
    age: 18, 
    location: "jaipur",
    email: "santosh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]

}


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "santosh@chatgpt.como"
//Object.freeze(JsUser)
JsUser.email = "santosh@microsoft.com"
//console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log('Hello Js User, ${this.name}');
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
  



// myArray = ["s", "i"]
// myArray[1]
