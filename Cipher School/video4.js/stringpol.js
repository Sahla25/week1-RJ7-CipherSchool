// let firstName = "Shiv";
// let lastName = "Thakur";
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// let array = [5,10,15,20,25];
// let newArray = [...array];
// console.log(array);

// let maxOfNumbers = (...numbers) => {
//     console.log(numbers);
// };
// maxOfNumbers(1,2,3,4,5,6,7,8,9,10);

let object = {
    name: "John",
    age: 24,
    address: {
        city : "New York",
        state: "NY",
        country: "USA"
    },
};

let object2 = {...object};
object2.address.city = "Newark";
console.log(object);

