function newPrice(currentPrice, discount) {
    // Check if input values
    if( (typeof currentPrice !== "number") || (typeof discount !== "number") || (discount < 0) || (discount > 100) ) {
        return "Invalid";
    }

    // Calculate discount price
    let discountResult = currentPrice - (currentPrice * (discount/100) );

    // let finalOutput = Number(discountResult.toFixed(3));
    // return finalOutput;

    return discountResult.toFixed(3);
}