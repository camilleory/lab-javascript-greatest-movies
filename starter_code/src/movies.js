/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    let sortedArray = arr.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1
            } else {
                return -1
            }
        } else if (a.year > b.year) {
            return 1
        } else {
            return -1
        }
        console.log(sortedArray)
    })
    return sortedArray
}
orderByYear(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    let dramaSpielberg = arr.filter(arg => arg.genre.includes("Drama") && arg.director === "Steven Spielberg");
    return dramaSpielberg.length
}
howManyMovies(movies)

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let alphArray = arr.sort((a, b) => {
        if (a.title > b.title) {
            return 1
        } else {
            return -1
        }
       
    })  
   //return alphArray.slice(0,20)
   return alphArray.map(myArr => myArr.title).slice(0,20);

}


orderAlphabetically(movies)


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (arr){
    let rateArr = arr.reduce((sum, rate)=> {return sum + rate.rate}, 0)
    return Number((rateArr / arr.length).toFixed(2));
}

ratesAverage(movies)


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (arr){
    let dramaMovies = arr.filter(arg => arg.genre.includes("Drama"));
    let dramaRate = dramaMovies.reduce((sum, rate)=> {return sum + rate.rate}, 0)
    console.log(dramaMovies)
    return Number((dramaRate / dramaMovies.length).toFixed(2))
}

dramaMoviesRate(movies)


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){

}

// BONUS Iteration: Best yearly rate average - Best yearly rate average