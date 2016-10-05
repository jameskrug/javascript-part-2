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
*/

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

