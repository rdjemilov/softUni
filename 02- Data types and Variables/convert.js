function convert(distance) {
    let distanceInM = distance;
    let distanceInKm = distance / 1000;

    console.log(distanceInKm.toFixed(2));
}

convert(1852);