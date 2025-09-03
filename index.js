function calculateTax(amount) {
    // Need sales tax @ 10% times the original amount
    return amount*0.10;
}

function convertToUpperCase(text) {
    // Could go through a long form aproach but String already has a function that fulfills requirements
    // will add minimal error check to ensure string is given
    if (typeof text === 'string') {
        return text.toUpperCase();
    } else {
        console.log('Error:convertToUpperCase(param) typeof: expected \'string\'')
        return
    }
}

function findMaximum(num1, num2) {
    // Need greatest of two numbers. Can use ternary operator fulfilling conditional in one line.
    return num1>num2 ? num1: num2;
}

function isPalindrome(word) {
    // need to reverse word. One method: split to array, reverse array, and rejoin to string using built-in funcs.
    const rev_word = word.split('').reverse().join('')
    // check whether reverse is the now the same as original word.
    return word === rev_word;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    // Want reduced sales price. Take original price and subtract the discount.
    return originalPrice - originalPrice * (discountPercentage / 100);
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };