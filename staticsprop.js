class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    createId(){
        return `123`
    }
}
const santosh = new User("santosh")

console.log(santosh.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphoine", "i2@phonegmail.com")
console.log(iphone.createId());