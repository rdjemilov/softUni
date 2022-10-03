function poundToDollars(pound) {
    let britishPound = 1.31;
    let dollars = pound * britishPound;
    console.log(dollars.toFixed(3));
}

poundToDollars(80);