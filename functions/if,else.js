function checkAge(age) {

    if (age >= 18) {
        return "You are eligible";
    } else {
        return "You are not eligible";
    }
}

console.log(checkAge(20));
console.log(checkAge(16));