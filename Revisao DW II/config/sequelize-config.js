import Sequelize from "Sequelize";

const connection= new Sequelize({
    dialect: "mysql",
    host: "localhost",
    usename: "root",
    password: "",
    database: "movies",
    timezone: "-3:00",
});

export default connection;