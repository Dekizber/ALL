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

// fullName.toLowercase();
// firstName.toLowercase();

// function checkForName(fullName, firstName) {
//     const fullNameLower = fullName.toLowerCase();
//     const firstNameLower = firstName.toLowerCase();

//     return fullNameLower.includes(firstNameLower);
// }

// console.log(checkForName("Jason Neis", "Jason"));


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

// function getSlice(array, value) {
//     const newArr = array.indexOf(value);
//     if (newArr === -1) {
//         return [];
//     }
//     else { return array.slice(0, newArr + 1) }
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));


// function createArrayOfNumbers(min, max) {
//     let numberArr = [];
//     for (let index = min; index <= max; index++) {
//         numberArr.push(index);
//     }
//     return numberArr;
// }
// console.log(createArrayOfNumbers(1, 3));

// function calculateTotalPrice(order) {
//     let quantNum = 0;
//     for (let i = 0; i < order.length; i += 1) {
//         quantNum += order[i];
//     }
//     return quantNum;

// }

// console.log(calculateTotalPrice([164, 48, 291]));


// function getEvenNumbers(start, end) {
//     let quantNum = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) { quantNum.push(i); }
//     }
//     return quantNum;
// }

// console.log(getEvenNumbers(3, 11));

// function checkStorage(storage, item) {
//     const lowCaseItem = item.toLowerCase();
//     if (storage.includes(lowCaseItem)) {
//         return `${lowCaseItem} is available to order!`

//     } else { return 'Sorry! We are out of stock!' }

// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum"));

// function getCommonElements(array1, array2) {
//     let newArr = [];

//     for (let index = 0; index < array2.length; index++) {
//         let element = array1[index];
//         if (array2.includes(element)) { newArr.push(element) }
//     }
//     return newArr;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (const number of order) {
//         total += number;

//     }
//     return total;
// }

// console.log(calculateTotalPrice([164, 48, 291]));

// function createReversedArray() {
//     const newArr = Array.from(arguments);
//     return newArr.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4));


// function calculateTax(amount, taxRate = 0.2) {
//     const total = amount * taxRate;
//     return total;
// }

// console.log(calculateTax(100,));

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const keys = [];
// const values = [];
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const i of keys) {
//     values.push(i)
// }

// console.log(values);

// Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys()
// для отримання масиву властивостей.Функція має повернути кількість властивостей в об'єкті object.

// function countProps(object) {
//     const keys = Object.keys(object);
//     return keys.length;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));  // повертає 3

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const money = Object.values(salaries);
//     for (const i of money) {
//         totalSalary += i
//     }
//     return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const i of colors) {
//     hexColors.push(i.hex);
//     rgbColors.push(i.rgb);

// }
// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//     const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//     ];


//     for (const item of products) {
//         if (item.name === productName) {
//             return item.price;
//         }
//     }
//     return null;
// }

// console.log(getProductPrice("Droid"));

// function getAllPropValues(propName) {
//     const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//     ];


//     let arrValues = [];

//     for (const item of products) {
//         if (item[propName] !== undefined) {
//             arrValues.push(item[propName]);
//         }
//     }

//     return arrValues;

// }

// console.log(getAllPropValues("name"));

// function calculateTotalPrice(productName) {
//     const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//     ];

//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price * product.quantity;
//         }
//     }

//     return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Scanner"));

// const atTheOldToad = {
//     potions: [],
//     getPotions() { return "List of all available potions" },
//     addPotion(potionName) { return `Adding ${potionName}`; },
// }

// console.log(atTheOldToad.addPotion("Invisibility"));

// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//         return atTheOldToad.potions;
//     },
// };

// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         this.potions.push(newPotion);
//     },
//     getTotalPrice() {
//         let totalPrice = 0;
//         for (const item of this.potions) {
//             totalPrice += item.price;

//         }
//         return totalPrice;
//     },
// };

// console.log(atTheOldToad.getTotalPrice());

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//         return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//         for (const object of this.potions) {
//             if (object.name === oldName) {
//                 object.name = newName
//             }
//         }
//     },
// };

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// function add(...args) {
//     let total = 0;
//     for (const num of args) {
//         total += num;
//     }

//     return total;
// }

// console.log(add(32, 6, 13, 19, 8));

// function addOverNum(value, ...args) {
//     let total = 0;
//     for (const i of args) {
//         if (i > value) {
//             total += i;
//         }
//     }
//     return total;
// }

// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// function getExtremeScores(scores) {
//     const best = Math.max(...scores);
//     const worst = Math.min(...scores);
//     const obj = {
//         best, worst,
//     }
//     return obj;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);


// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(makePizza);

// !==================================================================================
// function greet(name) {
//     console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//     console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//     console.log(`Registering ${name}!`);
//     callback(name);
// }

// registerGuest("Mango", greet);  // "Registering Mango!"
// "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`)
// });

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach(function (number) {
//         totalPrice += number;
//     });

//     return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

//!================================================

// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value.Якщо таких значень не буде знайдено, функція повертає порожній масив.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//     let arrNums = [];

//     numbers.forEach(function (number) {
//         if (number > value) { arrNums.push(number) }

//     });
//     return arrNums;
// }

// console.log(filterArray([12, 24, 8, 41, 76], 80)); //повертає[24, 41, 76]
// !================================================

// calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// }

// console.log(calculateTotalPrice(3, 400));
// !================================================

// calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(100, 200));
//!=================================================

<<<<<<< Updated upstream
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length)

// console.log(planetsLengths);

//!===================================================

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title)

// console.log(titles);
//!=========================================================
// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         skills: ["ipsum", "lorem"],
//         gender: "male",
//         age: 37,
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//         gender: "female",
//         age: 34,
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//         gender: "male",
//         age: 24,
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         skills: ["adipisicing", "irure", "velit"],
//         gender: "female",
//         age: 21,
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         skills: ["ex", "culpa", "nostrud"],
//         gender: "male",
//         age: 27,
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         skills: ["non", "amet", "ipsum"],
//         gender: "male",
//         age: 38,
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         skills: ["lorem", "veniam", "culpa"],
//         gender: "female",
//         age: 39,
//     },
// ];

// const getUserEmails = (users) => {

//     const mails = users.map(user => user.email);
//     return mails;
// };
// console.log(getUserEmails(users));
//!==============================================

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// const oddNumbers = numbers.filter(num => num % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);
//!===============================================================

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ];

// const color = "brown";

// const getUsersWithEyeColor = (users, color) => {
//     const userEyeColor = users.filter(user => user.eyeColor === color)

//     return userEyeColor;
// };
// console.log(getUsersWithEyeColor(users, color));
//!===============================================================
=======
// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію.Також заміни колбек - функцію, передану в метод forEach(), на стрілочну функцію.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметром(orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;

//     orderedItems.forEach(item => totalPrice += item);

//     return totalPrice;
// }

// console.log(calculateTotalPrice([164, 48, 291])); //повертає 138

//!========================================================



// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));  //повертає[4, 5]



>>>>>>> Stashed changes
