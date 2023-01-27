//1 .map()

// let array = [1,2,3,4,5];
// let newArray = [];

// for(let i = 0; i< array.length; i++) {
//     newArray[i] = array[i] * array[i];
// }
// console.log(newArray);

// let array = [5,10,15,20];

// function functionForMap (element) {
//     return element * element;   
// }

// let newArray = array.map(functionForMap);
// console.log(newArray);

//2 .forEach()

// let array=[1,2,3,4,5];
// array.forEach((element, index) => {
//     element *=element;
//     console.log(element);
// });

// console.log("Array is: ", array);

//3 .filter()

// let array = [10, 20, 30, 40, 50];
// let temp = array.find((value) => {
//     return value > 20;
// });

// console.log(temp);

//4 .sort()

// let array= [50, 40, -111, 30, 20,10];
// let sortedArray = array.sort((el1 , el2) => {
//     el1 = Number(el1);
//     el2 = Number(el2);
//     return el2 - el1;
// });
// console.log(sortedArray);

// Object Destructing 

// let details = {
//     name: "Alex",
//     age: 24,
//     address: {
//         street: "Brooklyn",
//         city: "New York", 
//         state: "NY",
//         country: "USA",
//         passportDetails: {
//             passportNumber: "ABCD1234",
//         },
//     },
// };

// let { name: myName, age } = details;
// console.log(myName, age);

// let {
//     address: {
//         country,
//         passportDetails: {passportNumber}
//     },
// }= details;
// console.log(country, passportNumber);
//  if(array1 == array2);

// Object matching

// let obj1 = { name: "shiya" };
// let obj2 = { name: "shiya"};

// function areEqual(obj1, obj2) {
//     if(obj1 == obj2) {
//         return true;
//     }
//     if (Object.keys(obj1).length !== Object.keys(obj2).length){
//         return false;
//     }
//     for (let key of Object.keys(obj1)) {
//         if (typeof obj2[key] == "undefined") {
//             return false;
//         }
//         if (obj2[key] != obj1[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(areEqual(obj1, obj2));

// Map and Set

// let set = new Set();

// set.add(1);
// set.add(-1);
// let arr = [...set]

// console.log(set);

// Classes in JS

class Animal {
    noOfLegs;
    color;
    family;
    sound;

    constructor(noOfLegs, color, family, sound) {
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }

    showAnimal() {
        console.log(`The animal belongs to family ${this.family}`)
    }
}

let animal = new Animal(4, "brown", "rodent", "Phew Phew");
animal.showAnimal();