let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'Bmw', year: 2018 },
    { brand: 'Ferrari', year: 2020 }
]

cars.sort((a, b) => b.year - a.year);
console.log(cars)