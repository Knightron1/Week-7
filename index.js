
function addTwoNumbers(x, y) {
    return x+y
}

console.log(addTwoNumbers(44, 29));

const add = function(a, b){
 return a+b   
}
// This is another way of declaring a function in javascript 
console.log(add(12, 14))

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

function myFunc(){
    anotherFunc()
    function anotherFunc(){
        return console.log("hello")
    }
}

console.log(myFunc())

var arr = [1, 2, 3, 4, 5]

console.log(arr)

console.log(arr[4])

arr[3] = "x"

arr

console.log(arr.length)
// This is a method to determine the length of the array
const arr1 = ['name', 'lastName', 'DOB', 'Gender']

console.log(arr1.length)

console.log(1 in arr)
// This checks whether or not there is a value in that position in the array
console.log(6 in arr)

var exampleArray = []

exampleArray.test = 111
exampleArray.test1 = 222
console.log(exampleArray);

console.log(arr.slice(1,4))
// slice takes a segment of the array from position (x) to position (y)

console.log(arr.slice(0,3))

console.log(arr.pop())
// pop takes the last value of an array and seperates it from the array
console.log(arr)

console.log(arr.push(12))
// push adds a value to the end of the array
console.log(arr)

console.log(arr.concat(exampleArray.test, exampleArray.test1))
// concat (short for concatenate) can be used to merge multiple arrays

arr.forEach(arr => console.log(arr))
// This prints each value of the array on a seperate line in output

const firstValue = arr.shift()
// This removes the first value of an array and stores it as the constant 'firstValue'
console.log(firstValue)
console.log(arr)

console.log(arr.unshift(1))
// unshift will add the value in the brackets to the start of the array
console.log(arr)

console.log(arr.reverse())
// .reverse does as implied and reverses the called array
console.log(arr)
console.log(arr.reverse())

// var RRR = arr.reverse()
// console.log(RRR);

console.log(arr.join('-'))
// join will return the values of the array with the value in the brackets (-) in between
console.log(arr.join())
// without a value in the brackets it will return the values with commas in between

const newArr = arr.map(num => num*4)
console.log(newArr)

var arr2 = [2,4,6,8]
console.log(arr2.reduce(x => x+1))