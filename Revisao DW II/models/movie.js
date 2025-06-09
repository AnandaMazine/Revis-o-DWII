import Sequelize from "./config/Sequelize-config.js";
import connection from "../config/sequelize-config";

const Movie = connection.define('movies', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    autor:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    ano:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})
Movie.sync({force:false});
export default Movie;