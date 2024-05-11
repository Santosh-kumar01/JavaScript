const user = {
    username: "santosh",
    price: 999,
    welcomeMessage: function(){
        console.log('${this.username}, welcome to website');
        console.log(this);

    }
}

// user.welcomeMessage 
// user.username = "santo"
// user.welcomeMessage()
// console.log(this);

// function water(){
//     let username = "santosh"
//     console.log(this);
// }
// water()

const water = () => {
    let username = "santosh"
   // console.log(this.username)
   console.log(this)
}

water()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2 ) => ({username: "santosh"})

console.log(addTwo(3,4))

//const myArray = [2,5,7,9,39]

//myArray.forEach()



