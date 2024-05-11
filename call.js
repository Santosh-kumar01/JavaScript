function SetUsername(Username){
    this.Username = Username
    console.log("called");
}

function createUser(Username, email, password){
    SetUsername.call(this, Username) 
    // this.Username = Username
    this.email = email
    this.password = password

}

const chai = new createUser("chai", "chai@gmail.com", "123")
console.log(chai);
