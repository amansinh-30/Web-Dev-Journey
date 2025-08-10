const numbers = [1, 2, 4, 5, 7, 8, 9, 13, 14, 17, 19];


// #--> For Loop:
for (number of numbers) {
    console.log(number);
}

// #-->> "forEach" Example:
numbers.forEach(function (e) {
    if (e % 2 !== 0) {
        console.log(e);
    }
})

// #-->> "Map" Example:
const double = numbers.map(function (num) {
    return num * 2;
})
console.log(double);


// #==> Tricky Example:
const cities = [
    {
        city: 'New York',
        country: 'USA'
    },
    {
        city: 'London',
        country: 'UK'
    },
    {
        city: 'Delhi',
        country: 'India'
    },
    {
        city: 'Melborne',
        country: 'Australia'
    },
    {
        city: 'Shanghai',
        country: 'China'
    },
    {
        city: 'Auckland',
        country: 'New Zealand'
    },

]

// #-->> "forEach" Example:
cities.forEach(function (name) {
    console.log(`${name.city} is capital of ${name.country}.`);
})

// #-->> "map" Example:
const cityList = cities.map(function (name) {
    return name.city.toUpperCase();
})
console.log(cityList);


// >> Arrays for Map <<
let new_arr = arr.map(e => {
    return e ** 2;
})
console.log(new_arr)

// >> Arrays for Filter << 
const greaterThenSeven = (e) => {
    if (e < 7) {
        return true;
    }
    return false;
}
console.log(new_arr.filter(greaterThenSeven));

// Arrays for Reduce << 
let arr2 = [1, 2, 3, 4, 5]
const red = (a, b) => {
    return a - b;
}
console.log(arr2.reduce(red))