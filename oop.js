const  user = {
    username: "santosh",
    loginCount : 8,
    signedIn: true,


    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.group(`Username:${username}`);
        console.log(this);
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.LoginCount = loginCount;
    this .isLoggedIn = isLoggedIn

    this.greating = function(){
        console.log(`welcome ${this.username}`);

    }

    return this
}
const userOne = new User("santosh",52, true)
const userTwo =  new User("kumar",4,false)
console.log(userOne.constructor);
console.log(userOne);
console.log(userTwo);  

