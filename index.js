
// Write your code here

// Write your code here
let num1=31;
let num2=2;
const multiply =(31*2)
console.log(multiply)


let random=1;
random++
random;


let num3=12;
let num4=3;
const mod=(num3/num4)
console.log(mod)

let max=20
while (i <= 20){
    console.log(max)
    max++
}
function hasTargetSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return true;
            }
        }
    }
    return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false


