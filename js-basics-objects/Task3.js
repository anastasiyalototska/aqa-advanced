const car1 = {
    brand: 'Tesla',
    model: 'Y',
    year: 2020
}

const car2 = {
    brand: 'Tesla',
    model: 'Y',
    owner: 'Elon Musk' 
/* I understand the task indicated to specify the 'owner' as a year of manufacturing again, but that didn't seem very logical, hence I made it a string with the company owner name; hope it's ok; the solution specified in homework would then be as following:

    const car2 = {
        brand: 'Tesla',
        model: 'Y',
        owner: 2024  
    } */
}

const car3 = {...car1, ...car2};

console.log(car3);

