
//Write a program that creates objects containing these items.

//datatype of person object
interface person{
    age : number ,
    name : string ,
    nationality : string ,
    student : boolean ,
}
//person object
let person : person = {
age :41 ,
name : 'khurram' ,
nationality : 'pakistani' ,
student : true
}
//print person
console.log(person);


//datatype of car object
interface car {
    maker : string ,
    colour : string ,
    automatic : boolean ,
}
//car object
let car = {
    maker : 'toyota' ,
    colour : 'black',
    automatic : true
}

//print car
console.log(car);