// let myName = "santosh         "
// let mychannel = "sant         "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",


    getSpiderPower: function(){
        console.log(`spidy power is ${this.apiderman}`);
    }
}

Object.prototype.santosh = function(){
    console.log(`santosh is present in all objects`);
}


Array.prototype.heyHitesh = function(){
    console.log(`santosh is here`)
}
// heroPower.santosh()
// myHeros.santosh()


//inheritance

const User = {
    name : "santosh"
    // Email: "bk318710@gmail.com"
}
const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvaialble: false 
}
const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User 


// modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "santoshkumar"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);

} 
anotherUsername.trueLength()

"santosh".trueLength()
"kumar".trueLength()


   