// function checkAge(age) {
//     if (age >= 18) {
//         return "You are an adult";
//     }
//     else { return 'little pisik' }

// }


// console.log(checkAge(15));

// function checkStorage(available, ordered) {
//     if (available <= ordered) {
//         return "Not enough goods in stock!"
//     }
//     else { return "Order is processed, our manager will contact you" }

// }

// console.log(checkStorage(12, 14));


// function checkStorage(available, ordered) {
//     if (ordered === 0) { return "There are no products in the order!" }
//     else if (available <= ordered) { return "Your order is too large, there are not enough items in stock!" }
//     else { return "The order is accepted, our manager will contact you" }
// }
// console.log(checkStorage(15, 25));


// function checkPassword(password) {
//     const correctPassword = 'jqueryismyjam';
//     return correctPassword === password ? 'Access granted' : 'Access denied, wrong password!';
// }

// console.log(checkPassword('jqueryismyjaewewem'));

// function getSubscriptionPrice(type) {
//     switch (type) {
//         case "professional": return 20;
//             break;
//         case "organization": return 50;
//             break;
//         case "starter": return 0;
//             break;

//         default: return "Invalid subscription type!";

//     }
// }

// console.log(getSubscriptionPrice("organization"));


// function isNumberInRange(start, end, number) {
//     return number >= start && number <= end;
// }

// console.log(isNumberInRange(10, 30, 17));

// function checkAccess(subType) {
//     return subType === 'pro' || subType === 'vip';

// }

// console.log(checkAccess('basic'));

// function toggleModalVisibility(isVisible) {
//     return !isVisible;
// }

// console.log(toggleModalVisibility(true));

// function getSubstring(string, length) {
//     return string.slice(0, length);
// }

// console.log(getSubstring("Hello world", 3));

// function normalizeInput(input, to) {
//     if (to === "upper") { return input.toUpperCase() }
//     else if (to === "lower") { return input.toLowerCase(); }

// }

// console.log(normalizeInput("This ISN'T SpaM", "upper"));


// function checkFileExtension(fileName, ext) {

//     const fileNameNormalize = fileName.toLowerCase();
//     const extNormalize = ext.toLowerCase();


//     if (fileNameNormalize.endsWith(extNormalize)) { return "File extension matches"; }
//     else { return "File extension does not match"; }

// }

// console.log(checkFileExtension("styles.css", ".css"));


// function getFileName(file) {
//     const indexFile = file.indexOf('.');
//     if (indexFile < 0) { return file }
//     else { return file.slice(0, indexFile) };

// }

// console.log(getFileName("styles.css"));

// function createFileName(name, ext) {
//     return `${name.trim()}.${ext}`

// }

// console.log(createFileName(" order ", "txt"));

// let count = 0;

// while (count < 10) {
//     console.log(`Count: ${count}`);
//     count += 3;
// }

// console.log(count(1));

// function calculateTotal(number) {
//     let count = 0;
//     let result = 0;
//     while (count <= number) {
//         result += count;
//         count += 1;
//     }
//     return result
// }

// console.log(calculateTotal(3));

// for (let i = 4; i <= 20; i += 2.5) {
//     console.log(i);
// }

// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 1; i <= number; i++) {
//         total += i;
//     }
//     return total;
// }

// console.log(calculateTotal(5));

// function calculateEvenTotal(number) {
//     let total = 0;
//     for (let i = 1; i <= number; i++) {
//         if (i % 2 === 0) {
//             total += i;
//         }
//     }
//     return total;
// }

// console.log(calculateEvenTotal(7));


// const start = 6;
// const end = 17;
// let number = start;
// for (let i = start; i <= end; number++) {
//     if (number % 5 === 0) {
//         break;
//     }
// }

// function findNumber(start, end, divisor) {
//     for (let i = start; i <= end; i++) {
//         if (i % divisor === 0) {
//             return i;
//         }

//     }
// }
// console.log(findNumber(2, 6, 5));

// function test(len) {
//     let str = '';

//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             const isFirstCol = j === 0;
//             const isLastCol = j === len - 1;
//             const isFirstRow = i === 0;
//             const isLastRow = i === len - 1;

//             const isDiagonal = i === j;

//             const isEvenCol = j % 2 === 0;

//             const fill = isFirstCol || isLastCol || isFirstRow || isLastRow;

//             if (fill) str += '#';
//             else if (isDiagonal) str += '0';
//             else if (isEvenCol) str += '|';
//             else str += ' ';
//         }

//         str += '\n';
//     }

//     console.log(str);
// }

// test(50)


// function getOrderQuantity(order) {

//     const result = order.length;
//     if (order.length >= 0) { return result; }

// }

// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));

// function getLastElementMeta(array) {
//     const lastElementIndex = array.length - 1;
//     const result = [lastElementIndex, array[lastElementIndex]]
//     return result;
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// function getExtremeElements(array) {

//     const getExtremeElements = array.length - 1;
//     const result = [array[0], array[getExtremeElements]];
//     return result;
// }
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// function getLength(array) {
// const rowArray = array.join('');
// const sizeArray = rowArray.length;
// return sizeArray;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));


// function calculateEngravingPrice(message, pricePerWord) {
//     const masWords = message.split(' ');
//     const quantityWords = masWords.length;
//     const finalPrice = quantityWords * pricePerWord;
//     return finalPrice
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);