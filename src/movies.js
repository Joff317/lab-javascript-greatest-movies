// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let newArr = [];
  moviesArray.map((movie) => {
    newArr.push(movie.director);
  });

  return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let count = 0;
  moviesArray.filter((movie) => {
    movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
      ? count++
      : 0;
  });
  // console.log(count);
  return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  // let scoredMovie = moviesArray.filter((movie) => {
  //   return movie.hasOwnProperty("score");
  // });
  if (moviesArray.length === 0) {
    return 0;
  }

  let sumScore = 0;
  sumScore = moviesArray.reduce(
    (accumulator, movie) =>
      movie.hasOwnProperty("score") ? accumulator + movie.score : accumulator,
    sumScore
  );

  let average = sumScore / moviesArray.length;

  // console.log(average);
  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let newArr = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  return scoresAverage(newArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArr = moviesArray.slice();

  let finalArr = newArr.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });

  return finalArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newArr = [...moviesArray];

  let selectTwenty = newArr.slice(0, 20);

  let sortedArr = selectTwenty
    .sort((a, b) => {
      return a.title - b.title;
    })
    .map((movie) => movie.title);

  return sortedArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
