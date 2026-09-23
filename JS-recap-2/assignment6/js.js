'use strict';
let movies = [];
let amounts = parseInt(prompt("How many movies do you wanna rate?"));
for (let i = 0; i < amounts; i++) {
  let title = prompt("Enter the title of the movie: ");
  let rating = parseInt(prompt("Enter the rating of the movie: "));
  let movie = {
    title: title,
    rating: rating
  }
  movies.push(movie);
}
movies.sort((a, b) => b.rating - a.rating);
document.querySelector("#p1").innerHTML = "The Highest-rating movie is: " + movies[0].title;
for (let movie of movies) {
  let column = document.createElement("p");
  column.textContent = movie.title + ": " + movie.rating;
  document.querySelector("#div1").appendChild(column);
}
