// Immendiately Invoked Function Expressions(IIFE)

(function water(){
    console.log('DB CONNECTED');

})();

// function water(){
//     console.log('DB CONNECTED');

// }
// water()

(function H2O(){
    console.log('DB CONNECTED TWO');
} )();

( (name) => {
    console.log('DB CONNECTED TWO ${name}');
} )('santosh')
