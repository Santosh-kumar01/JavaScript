// ES6 

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}sbd`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const santosh =  new User("santosh", "santosh@gmail.com", "123")

// console.log(santosh.encryptPassword());
// console.log(santosh.changeUsername());


// behind the scene


function User(username, email, password){
    this.username = username;
     this.email = email;
     this.password = password;
} 

User.prototype.encryptPassword = function(){
    return `${this.password}sbd`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const santosh = new User("santosh", "santosh@gamil.com", "123")


console.log(santosh.encryptPassword());
console.log(santosh.changeUsername());



