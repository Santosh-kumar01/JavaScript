let a = 1090
// const b = 20
// var c = 30
if(true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("INNER: ", a)
}

//these are scope {}
//console.log(a);
//console.log(b);
// console.log(c);

function one(){
    const username = "santosh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
//one()

if(true){
    const username = "santosh"
    if(username === "santosh"){
        const website = "  youtube"
        console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

//******************************interesting ****************//
function addone(num){
    return num + 1
}
console.log(addone(5))

//console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}

