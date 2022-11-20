function buildStorage(input) {
    let map = new Map();
    for (let string of input) {
        let tokens = string.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (!map.has(product)) {
            map.set(product, quantity)
        } else {
            let currQuantity = map.get(product);
            let newQuantity = currQuantity += quantity;
            map.set(product, newQuantity);
        }
        for (let [product, quantity] of map) {
            console.log(`${product} -> ${quantity}`);
        }
    }
}

buildStorage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])

