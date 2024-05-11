 //const tinderUser = new Object()
 const tinderUser = {}
 tinderUser.id = " 123santo"
 tinderUser.name = "santosh"
 tinderUser.isLoggedIn = false
 //console.log(tinderUser)
 const regularUser = {
    email : "santo@kumar.com",
    fullname: {
        userfullname: {
            firstname : "santosh",
            lastname: "kumar"
        }
    }
 }
 //console.log(regularUser.fullname.userfullname.firstname);
 const obj1 = {1:"a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}
 const obj4 = {5: "a", 6:"b"}
 //const obj3 = {obj1 , obj2}
 //const obj3 = Object.assign({}, obj1, obj2, obj4)
 const obj3 = {...obj1, ...obj2,...obj4}
 //console.log(obj3);

 const Users = [
    {
        id: 1,
        email: "S@ntosh.com"
    },
    {
        id: 1,
        email: "S@ntosh.com"
    },
    {
        id: 1,
        email: "S@ntosh.com"
    },
 ]


 Users[1].email
//  console.log(tinderUser);
//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));
//  console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "santosh"
 }

 //course.courseInstructor

 const {courseInstructor} = course
 console.log(courseInstructor);

 //const navbar = ({companany}) => { // react
    //({companany}) these are de-structuring

 //}

// navbar(companany = " santosh")


//jSON API
  
// {
//     "name": "santosh",
//     "coursename": "Js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
 