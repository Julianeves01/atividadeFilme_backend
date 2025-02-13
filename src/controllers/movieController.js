const Movie = require("../models/Movie.js");
const MovieList = require("../models/MovieList.js");

const lista = new MovieList();

const filme1 = new Movie("Divertida Mente", "animação", 135, "Pete Doctor");
lista.addMovie(filme1);

lista.addMovie(new Movie("Up: Altas Aventuras", "animação", 130, "Pete Doctor"));

const router = {
    addMovie: (req, res) => {
        try {
            const { title, genre, duration, director } = req.body;
            if (!title || !genre || !duration || !director) {
                throw new Error("Preencha todos os campos!");
            }
            const movie = new Movie(title, genre, duration, director);
            lista.addMovie(movie);
            res.status(200).json({ message: "Filme registrado com sucesso", movie });
        } catch (error) {
            res.status(400).json({
                message: "Erro ao registrar filme",
                error: error.message,
            });
        }
    },

    getAllMovies: (req, res) => {
        try {
            const movies = lista.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar os filmes",
                error: error.message,
            });
        }
    },

    getMovieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getMovieById(id));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar o filme indicado pelo id",
                error: error.message,
            });
        }
    },

    updateMovie: (req, res) => {
        try {
            res.status(200 ).json(lista.updateMovie(req.params.id, req.body), );
            res.status(200).json({message: "Filme atualizado com sucesso"});
        } catch (error) {
            res.status(404).json({
                message: "Erro ao atualizar o filme",
                error: error.message,
            });
        }
    },

    deleteMovie: (req, res) => {
        try {
            const movie = req.params.id;
            lista.deleteMovie(movie);
            res.status(200).json({
                message: "Filme deletado com sucesso",
                movie,
            });
        } catch (error) {
            res.status(404).json({
                message: "Erro ao deletar filme",
                error: error.message,
            });
        }
    },
};

module.exports = router;