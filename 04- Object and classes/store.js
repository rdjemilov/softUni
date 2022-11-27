// function buildStore(available, delivery) {
//     const storedProducts = {}; // README: if don't need to change reference we should use const here
//     const availableLength = available.length;
//     const deliveryLength = delivery.length;

//     for (let index = 0; index < availableLength; index += 2) {
//         const currentProduct = available[index];
//         storedProducts[currentProduct] = Number(available[index + 1]);
//     }
//     for (let index = 0; index < deliveryLength; index += 2) {
//         const currentProduct = delivery[index];

//         if (!storedProducts.hasOwnProperty(currentProduct)) {
//             storedProducts[currentProduct] = 0;
//         }
//         storedProducts[currentProduct] = Number(delivery[index + 1]);
//     }

//     for (const product in storedProducts) {
//         console.log(`${product} -> ${storedProducts[product]}`);
//     }
// }

function buildStore(currentStocks, orderedStocks) {
    const productsList = {};
    let currentLength = currentStocks.length;
    let orderedLength = orderedStocks.length;

    for (let i = 0; i < currentLength; i += 2) {
        let currentProduct = currentStocks[i];
        productsList[currentProduct] = Number(currentStocks[i + 1]);
    }
    //FIXME: How can i increase the quantity for the given product
    for (let i = 0; i < orderedLength; i += 2) {
        let currentProduct = orderedStocks[i];
        productsList[currentProduct] = Number(currentStocks[i + 1]);

        
    }


    
}

buildStore([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ])