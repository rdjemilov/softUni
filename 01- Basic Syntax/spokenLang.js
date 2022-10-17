function spokenLanguage(country) {
    if (country === 'England' || country === 'USA') {
        console.log('English');
    } else if (country === 'Mexico' || country === 'Argentina' || country === 'Spain') {
        console.log('Spanish');
    } else {
        console.log('unknown');
    }
}