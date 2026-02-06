function finalScore(omr) {
    // Check if the input is a valid object or not
    if(typeof omr !== 'object' || Array.isArray(omr) || omr === null) {
        return "Invalid"
    }

    // Check Total Qs are 100 or not
    let totalQs = 0;

    for(let qs in omr) {
        totalQs += omr[qs];
    }

    if(totalQs !== 100) {
        return "Invalid"
    }

    let marks = Math.round(omr.right - (omr.wrong/2));
    return marks;
}