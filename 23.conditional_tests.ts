
//Write a series of conditional tests.

//creating car variable.
let car:string = 'subaru' ;

//  =    hum kisi value ko set kar rahay hain.
//  ==   hum kisi value ko check kar rahay hain.
//  ===  hum kisi value ko uski data type kay sath check kar arhay hain. 

//Test No.1.
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');


//Test No.2.
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');


// != Not Equal To.
//Test No.3.
console.log("Is car != 'Honda'? I predict True.");
console.log(car != 'Honda');

//Test No.4.
console.log("Is car !== 'Ford'? I predict True.");
console.log(car !== 'Ford');

//Test No.5.
console.log("Is car. Uppercase == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');


//Test No.6.
console.log("Is car == 'SUBARU'? I predict False.");
console.log(car == 'SUBARU');


//Test No.7.
console.log("Is car === 'SUBARU'? I predict False.");
console.log(car === 'SUBARU');


//Test No.8.
console.log("Is car === 'Train'? I predict False.");
console.log(car === 'Train');


//Test No.9.
console.log("Is car === 'Bus'? I predict False.");
console.log(car === 'Bus');


//Test No.10.
console.log("Is car === 'Cycle'? I predict False.");
console.log(car === 'Cycle');