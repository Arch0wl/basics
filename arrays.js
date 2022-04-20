let cars = ['Ferrari', 'Lamborghini', 'Audi', 'Aston Martin', 'Ford']

console.log(cars[1]) // Lamborghini

console.log(cars.length) // 5

let ourCars = [{
    brand: 'Audi',
    year: 2018,
    model: 'A3',
    miles: 25580,
    color: 'Grey',
}, {
    brand: 'Jeep',
    year: 2015,
    model: 'Grand Cherokee',
    color: 'Black',
    miles: 55000,
}]

console.log(ourCars[1].miles)

console.log(ourCars[0].miles)

const mileage = miles / age
console.log(mileage + miles per year),










if (mileage < 10000) {
    console.log('This is a low mileage car. (38)')
}   else {
    console.log('This is not a low mileage car.')
}

(mileage < 10000)
 ? console.log('This is a low mileage car. (43)')
 : console.log('This is not a low mileage car.')

const isIt = (mileage < 10000) ? 'is a' : 'is NOT a'
console.log(`this ${isIt} low mileage car. (47)`)

const message = (mileage < 10000) 
? 'This is a low mileage car.'
: 'This is not a low mileage car.'