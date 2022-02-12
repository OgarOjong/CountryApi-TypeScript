"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line quotes
const index_1 = __importDefault(require("../index"));
const arrays_1 = __importDefault(require("../utilities/arrays"));
// eslint-disable-next-line quotes
const numbers_1 = __importDefault(require("../utilities/numbers"));
const strings_1 = __importDefault(require("../utilities/strings"));
const numArr = [3, 4, 5, 6];
// eslint-disable-next-line quotes
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
// eslint-disable-next-line quotes
it('expect myFunc(5) to equal 25', () => {
    expect((0, index_1.default)(5)).toEqual(25);
});
// eslint-disable-next-line quotes
it('expects numbers.sumc(1,1) to equal 2', () => {
    expect(numbers_1.default.sum(1, 1)).toEqual(2);
});
//eslint-disable-next-line quotes
it('expects the first letter in a sentence to be capitalise', () => {
    expect(strings_1.default.capitalize("hi")).toBe("Hi");
});
//eslint-disable-next-line quotes
it('should capitalize a string', () => {
    // eslint-disable-next-line quotes
    expect(strings_1.default.capitalize('a sentence')).toEqual('A Sentence');
});
//eslint-disable-next-line quotes
it('to multiply two numbers', () => {
    expect(numbers_1.default.multiply(4, 3)).toEqual(12);
});
// eslint-disable-next-line quotes
it('should add numbers in array and be truthy', () => {
    expect(arrays_1.default.addArr(numArr)).toBeTruthy();
});
it("should concatenate 2 arrays to not equal just 1", () => {
    expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
});
it("should not contain the third index", () => {
    expect(arrays_1.default.cut3(wordArr)).not.toContain("rabbit");
});
it("should not have a large number and be falsy", () => {
    expect(arrays_1.default.lgNum(wordArr)).toBeFalsy();
});
