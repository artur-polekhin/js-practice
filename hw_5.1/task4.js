function isUpperCaseString (string) {
    let tempUpperCaseString = string.toUpperCase()
    return string === tempUpperCaseString;
}

const result = isUpperCaseString("Some String");
console.log(result);