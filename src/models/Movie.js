const { v4: uuid4 } = require("uuid");

class Movie {
    constructor(title, genre, duration, director) {
        this.id = uuid4();
        this.title = title;
        this.genre = genre;
        this.duration = duration;
        this.director = director;
    }
}
module.exports = Movie;