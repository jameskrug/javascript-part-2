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

