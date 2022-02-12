// eslint-disable-next-line quotes
import myFunc from '../index';
import arrays from "../utilities/arrays";
// eslint-disable-next-line quotes
import numbers from '../utilities/numbers';
import strings from "../utilities/strings";

const numArr = [3, 4, 5, 6];
// eslint-disable-next-line quotes
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

// eslint-disable-next-line quotes
it('expect myFunc(5) to equal 25', () => {
    expect(myFunc(5)).toEqual(25);
});


// eslint-disable-next-line quotes
it('expects numbers.sumc(1,1) to equal 2',()=>{
    expect(numbers.sum(1,1)).toEqual(2);
});


//eslint-disable-next-line quotes
it('expects the first letter in a sentence to be capitalise',()=>{
    expect(strings.capitalize("hi")).toBe("Hi");
});

//eslint-disable-next-line quotes
it ('should capitalize a string', () => {
    // eslint-disable-next-line quotes
    expect(strings.capitalize('a sentence')).toEqual('A Sentence');
});

//eslint-disable-next-line quotes
it('to multiply two numbers',()=>{
    expect(numbers.multiply(4,3)).toEqual(12);
});

// eslint-disable-next-line quotes
it ('should add numbers in array and be truthy', () => {
    expect(arrays.addArr(numArr)).toBeTruthy();
});


it ("should concatenate 2 arrays to not equal just 1", () => {
    expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
});

it ("should not contain the third index", () => {
    expect(arrays.cut3(wordArr)).not.toContain("rabbit");
});

it ("should not have a large number and be falsy", () => {
    expect(arrays.lgNum(wordArr)).toBeFalsy();
});

