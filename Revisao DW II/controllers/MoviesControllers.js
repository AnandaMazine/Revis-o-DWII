import express from express;
import Movie from "../models/movie.js";
const router = express.Router();

router.get("/movies", (req,res) =>{
    Movie.findAll()
    .then((Movies) => {
        res.render("movies",
            {
                movies: movies,
            });
    }).catch((error) =>{
        console.log(error);
    });
});

router.get("/movies/new", (req, res) =>{
    const nome = req.body.nome;
    const autor = req.body.autor;
    const ano = req.body.ano;

    Movie.create({
        nome: nome,
        autor: autor,
        ano: ano,
    }).then(() =>{
        console.log(`Realizado cadastro: ${nome} - ${autor} - ${ano}.`);
        res.redirect("/movies");
    }).catch((error) =>{
        console.log(error);
    });
});

router.get("/movies/delete/:id", (req, res) => {
    const id = req.params.id;
    Movie.destroy({
        where:{
            id: id
        }
    }).then(()=>{
        console.log(`Cliente com a ID: ${id} excluído com sucesso!`);
    }).catch((error) => {
        console.log(error);
    });
});

export default router;