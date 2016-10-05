/*
var longerString = ["zabc", "dfdsafe", "fdfsafdsafdses", "fdsas"];
var sortedString = [];

function sortString(str1, str2){
    if (str1.length > str2.length){
        return 1;
    }
    else if (str1.length > str2.length){
        return -1;
    }
    else {
        return 0;
    }
}

longerString.sort(sortString);

console.log(longerString);


var nameAndEmails = []
    var person1 = {
        name: "jimmyson",
        email: "zzjim@rogers.com"
    }
    var person2 = {
        name:"bill",
        email: "FFbill@rogers.com"
    }
    var person3 = {
        name: "steve",
        email: "steve_wakowski@stuff.ca"
    }
    var person4 = {
        name: "franklinwilliams",
        email: "FFAfrank_williamson@gs.ca"
    }

    nameAndEmails.push(person1);
    nameAndEmails.push(person2);
    nameAndEmails.push(person3);
    nameAndEmails.push(person4);

function sortString(str1, str2){
    if (str1.name.length > str2.name.length){
        return 1;
    }
    else if (str1.name.length > str2.name.length){
        return -1;
    }
    else {
        return 0;
    }
}

nameAndEmails.sort(sortString);

console.log("sorted by name length: ");
console.log(nameAndEmails);

function sortEmailAlphabetically(str1, str2){
    var upperStr1 = str1.email.toUpperCase();
    var upperStr2 = str2.email.toUpperCase();
    if (upperStr1 > upperStr2){
        return 1;
    }
    else if (upperStr1 > upperStr1){
        return -1;
    }
    else {
        return 0;
    }

}

nameAndEmails.sort(sortEmailAlphabetically);

console.log("sorted alphabetically by email: ");
console.log(nameAndEmails);



var arrayOfNumbers = [1,2,3,4,5,6, 7, 8, 9, 10, 20, 40];

function returnSquare(num){
    return num*num;
}

arrayOfNumbers = arrayOfNumbers.map(returnSquare);

console.log(arrayOfNumbers);

*/

var nameAndEmailsAndNumbers = []
    var person1 = {
        name: "jimmyson",
        email: "zzjim@rogers.com",
        num: 22
    }
    var person2 = {
        name:"bill",
        email: "FFbill@rogers.com",
        num: 24
    }
    var person3 = {
        name: "steve",
        email: "steve_wakowski@stuff.ca",
        num: 11
    }
    var person4 = {
        name: "franklinwilliams",
        email: "FFAfrank_williamson@gs.ca",
        num: 10
    }

    nameAndEmailsAndNumbers.push(person1);
    nameAndEmailsAndNumbers.push(person2);
    nameAndEmailsAndNumbers.push(person3);
    nameAndEmailsAndNumbers.push(person4);
    
function returnSquare(a){
    return a.num * a.num;
} 

var squaredNum = nameAndEmailsAndNumbers.map(returnSquare);

console.log(squaredNum);
