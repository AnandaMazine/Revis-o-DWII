import express from "express";

const app =  express();

import MoviesControllers from "./MoviesControllers.js";
import connection from "./config/sequelize-config.js";

connection.authenticate().then(() =>{
    console.log(`Conexão com o banco realizada com sucesso!`);
}).catch((error) => {
    console.log(error);
});

connection.query(`CREATE DATABASE IF NOT EXISTS movies;`).then(() =>{
    console.log("O banco de dados está criado!");
}).catch((error)=> {
    console.log(error);
});

app.use(express.urlencoded({extended:false}));

app.set ("view engine", "ejs");

app.use(express.static("public"));

app.use("/", MoviesControllers);

app.get("/", (req, res) =>{
    res.render("index");
});

const port = 8080;
app.listen(port, (error)=>{
    if(error){
        console.log("Ocorreu um erro!");
    }else{
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
});