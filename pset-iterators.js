/*
Instructions:

For this problem set you will be working with a
list of Countries stored as an array of
objects. The array has **already been provided for
you** as a variable named "countries".

You can see the full list of us countries in the
provided file named `countries.js`

All of the following problems require that you
use the `countries` array to solve them.

Use any variables or methods deemed necessary
to solve each problem.

You can use either regular functions or
arrow functions for your callbacks
*/

const countries = require('./countries.js') // <- DO NOT Remove; this represents an array consisting of countries

/***********
Sample Problem:

1. Using the `countries` array, return the **name** of the
first country that was listed that is located in South America.
Save the data in a variable called `firstListedSouthAmericanCountry`,
declared with const

2. Print `firstListedSouthAmericanCountry` to the console

************/
console.log('Sample Problem:')

// Add your code below this line

const firstListedSouthAmericanCountry = countries.find(function (country) {
  return country.continentName === 'South America'
})

console.log(firstListedSouthAmericanCountry.countryName)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 1:

1. Using the `countries` array,
return a list (an array) of all the
countries that have names that begin with a "c".
Save the data in a variable called `countriesWithNamesStartingWithC`,
declared with const

2. Print `countriesWithNamesStartingWithC` to the console

************/
console.log('Problem 1:')

// Add your code below this line

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 2:

1. Using the `countries` array, return a list (an array) of just the "name" of every country in the world.
Save the data in a variable called `allCountryNames`,
declared with const

2. Print `allCountryNames` to the console

************/
console.log('Problem 2:')

// Add your code below this line

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 3:

1. Using the `coutries` array, return a
list of the countries that have a population
of less than 1,000,000 people. Save the data in a variable called `smallCountries`, declared with const

2. Print `smallCountries` to the console

************/
console.log('Problem 3:')

// Add your code below this line

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 4:

1. Using the `countries` array, return a list of the
countries in Africa
Save the data in a variable called `africanCountries`,
declared with const

2. Print `africanCountries` to the console

************/
console.log('Problem 4:')

// Add your code below this line

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 5:

1. Using the `countries` array,
return the name of the all countries that
list english ("en") as one of their
official languages
Save the data in a variable
called `englishSpeakingCountries`, declared with const

2. Print `englishSpeakingCountries` to the console

************/
console.log('Problem 5:')

// Add your code below this line

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
