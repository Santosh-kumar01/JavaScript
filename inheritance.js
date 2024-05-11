class User{
    constructor(Username){
        this.Username = Username
    }
    logMe(){
        console.log(`USERNAME is ${this.Username}`);
    }
}



class Teacher extends User{
    constructor(Username, email, password){
        super(Username)
        this.email = email;
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const santosh = new Teacher("santosh", "santosh@gmail.com", "12345")
santosh.addCourse() 

const coder = new User("coder")
coder.logMe()

console.log(coder instanceof User);

