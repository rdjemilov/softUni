function vacation(people, type, day) {
    let total = 0;
    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                total = people * 8.45;
            } else if (day === 'Saturday') {
                total = people * 9.80;
            } else {
                total = people * 10.46;
            }

            if (people >= 30) {
                total = total * 0.85;
            }
            break;
        case 'Business':
            if (day === 'Friday') {
                total = people * 10.90;
            } else if (day === 'Saturday') {
                total = people * 15.60;
            } else {
                total = people * 16;
            }

            if (people >= 100) {
                people -= 10;   
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                total = people * 15;
            } else if (day === 'Saturday') {
                total = people * 20;
            } else {
                total = people * 22.50;
            }

            if (people >= 10 && people <= 20) {
                total *= 0.95;
            }
            break;                 
    }

    console.log(`Total price: ${total.toFixed(2)}`);
}

vacation(30, 'Students', 'Sunday')