//promise is a class in a js
//constructor (function)
//let num1=10;
//let num2=5;

function addTwoNumbers(num1, num2) {
    return new Promise(fulfilled, notFulfilled) => {
        setTimeout(() =>  {
            console.log("Inside setTimeout");
            fulfilled(num1+num2);
         }, 5000);
         notFulfilled("an error occured");
    });
}

addTwoNumbers(10,5)
.then(() => {
    console.log("Promise was fulfilled");
});
.catch(() => {
    console.log("Promise was not fulfilled");
});
