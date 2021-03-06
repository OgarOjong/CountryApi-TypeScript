/* eslint-disable quotes */
const myFunc = (num: number): number => {
    return num * num;
};
  
export default myFunc;


import arrays from "./utilities/arrays";
import numbers from "./utilities/numbers";
import strings from "./utilities/strings";

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum = ('15' as unknown) as number % 2;
const five = parseInt('5');


console.log(arrays.cut3(mixArr));
// done
console.log(numbers.sum(arrSum, myNum));
//done
console.log(strings.capitalize('the quick brown fox'));
//done
console.log(numbers.multiply(five, 8));

console.log(arrays.lgNum(mixArr));
