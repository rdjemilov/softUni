function buildEmojiDetector(input) {
    // get input
    let text = input.shift();

    // get all digits
    let treshold = 1;
    let digitResults = text.matchAll(/\d/g);
    console.log(digitResults);
    for (const digitRes of digitResults) {
        let digit = Number(digitRes[0]);
        treshold *= digit;
    }
    console.log(treshold);

    // calculate treshold

    // get all emojis

    // print only cool emojis
}


buildEmojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])