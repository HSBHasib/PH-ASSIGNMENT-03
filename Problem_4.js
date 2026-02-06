function gonoVote(array) {
    // Check if the input is a valid Array or not
    if(!Array.isArray(array)) {
        return "Invalid"
    }
    
    let haVote = 0;
    let naVote = 0;
    
    for(let countVote of array) {
        if(countVote.toLowerCase() === "ha") {
            haVote++;
        }

        if(countVote.toLowerCase() === "na") {
            naVote++;
        }
    }

    if(haVote > naVote) {
        return true;
    } else if (haVote === naVote) {
        return "equal";
    } else {
        return false
    }
}