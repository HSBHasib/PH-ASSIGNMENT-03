function analyzeText(str) {
    // // Check input value is string or not
    if( (typeof str !== "string") || (str.trim().length === 0) ) {
        return "Invalid";
    }

    let outputObj = {};

    let singleWord = str.split(" ");
    let longwords = "";

    // Find Largest word in string
    for(let i=0; i<singleWord.length; i++) {
        if(singleWord[i].length > longwords.length) {
            longwords = singleWord[i];
        }
    }


    let token = 0;
    // Check String length
    for(let i=0; i<str.length; i++) {
        if(str[i] !== " ") {
            token++;
        }
    }

    outputObj.longwords = longwords;
    outputObj.token = token;

    return outputObj;
}