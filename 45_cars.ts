
// Cars:

import { features } from "process";

// Write a function that stores information about a car in a object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name_value pairs, Such as a color or an optional feature.
// Print the object that's returned to make sure all the information was stored correctly.

// Using Spread Operator

function storeCarInfo(manufacturer: string , modelName: string , ...extraOption: { [ key : string ] : any } [ ] ) : object {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }

    return carInfo;

};

let answare = storeCarInfo('Honda' , 'Civic' , {color : 'Black'} , {features : ['Navigation' , 'Power Window']})

console.log(answare);