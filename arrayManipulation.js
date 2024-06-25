/* TASK ONE */
function processArray(ArrayOfNumbers = []) {
    const newArray = [];

    if (ArrayOfNumbers.length === 0) {
        console.log("There are no elements in the array");
        return 0;
    } else {
        for (let i = 0; i < ArrayOfNumbers.length; i++) {
            if (ArrayOfNumbers[i] % 2 === 0) {
                const squared = ArrayOfNumbers[i] ** 2;
                newArray.push(squared);
            } else {
                const tripled = ArrayOfNumbers[i] ** 3;
                newArray.push(tripled);
            }
        }
        return newArray;
    }
}

const result = processArray([2, 3, 1,8,9]);
console.log(result);  // Output: [4, 27, 1]

/* TASK TWO */
export function formatArrayStrings(ArrayofStrings = [], ArrayOfNumbers = []) {
    if (ArrayofStrings.length === 0 && ArrayOfNumbers.length === 0) {
        console.log("Both arrays are empty");
        return 0;
    } else if (ArrayofStrings.length !== ArrayOfNumbers.length) {
        console.log("Both arrays must have the same length");
        return 0;
    } else {
        for (let i = 0; i < ArrayofStrings.length; i++) {
            if (ArrayOfNumbers[i] % 2 === 0) {
                ArrayofStrings[i] = ArrayofStrings[i].toUpperCase();
            } else {
                ArrayofStrings[i] = ArrayofStrings[i].toLowerCase();
            }
        }
        return ArrayofStrings;
    }
}

const originalArray = ["bob", "nice", "Hen", "Ben", "Dave"];
const result2 = formatArrayStrings([...originalArray], result);  // Use a copy of originalArray
console.log(result2);  // Output: ["BOB", "nice", "hen"]