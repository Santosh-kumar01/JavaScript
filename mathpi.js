const descripter =  Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
// console.log(Math.PI);

// Math.PI = 5
// console.log(Math.PI);

const sanshiv = {
    name: 'har har mahadev',
    price: 500,
    isAvailable: true,
    ordersanshiv: function(){
        console.log("sanshiv");
    }
}
console.log(Object.getOwnPropertyDescriptor(sanshiv, "name"));

Object.defineProperty(sanshiv,'name',{
    // writable: false,
    enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(sanshiv, "name"));

for (const [key, value] of Object.entries (sanshiv)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);

    }
    
    
}