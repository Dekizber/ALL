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