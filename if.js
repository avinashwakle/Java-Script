let age = 21;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}
if (age <= 12) {
    console.log("You are a child.");
}   else{
    console.log("You are not fucking a child.");

}let marks = 34;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 75) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
    
}



let password = "myPassword123";
if (password === "myPassword1234") {
    console.log("Access granted.");
}
else {
    console.log("Access denied.");
}

let balance = 5000;
let withdraw = 3000;

if (withdraw <= balance) {
    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance - withdraw);
} else {
    console.log("Insufficient Balance");
}