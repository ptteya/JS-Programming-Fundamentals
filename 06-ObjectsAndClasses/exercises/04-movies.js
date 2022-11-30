function movies(arr) {
    let movies = [];

    for (let el of arr) {
        if (el.includes("addMovie")) {
            let name = el.split('addMovie ')[1];
            movies.push({ name: name });
        } else if (el.includes("directedBy")) {
            let [name, director] = el.split(" directedBy ");
            let movie = movies.find(movieObj => movieObj.name === name);

            if (movie) {
                movie.director = director;
            }
        } else if (el.includes("onDate")) {
            let [name, date] = el.split(" onDate ");
            let movie = movies.find(movieObj => movieObj.name === name)

            if (movie) {
                movie.date = date;
            }
        }
    }

    for (let el of movies) {
        if (el.name && el.director && el.date) {
            let currObj = JSON.stringify(el)
            console.log(currObj);
        }
    }
}
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);