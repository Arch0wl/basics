function addNumbs(num1, num2){
    return num1 + num2
}
const a=7, b=3
console.log(addNumbs(a,b))



//const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]


const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
// 1 - loop through array
// 2 - declare variable to keep track of the sum of trues
// 3 - check which index is true
// 4 - increment the var 
// 5 - return the var

function checkTrue(arr){
    let result = 0
    for (let i = 0; i <arr.length; i++){
        // f (arr[i] === true) 
        if (arr[i]){
        // result = result +1
        result++
        }
    }
    return result;
}
    console.log("This is result", checkTrue(testArray)) 

    // Write a function that receives a car object as an argument and outputs the cars make and model.

    const car = [ 'BMW', '323', '2022', ]
    console.log(car[0])

    function getFirstElemnt(car) {
        return car[0]
    }
