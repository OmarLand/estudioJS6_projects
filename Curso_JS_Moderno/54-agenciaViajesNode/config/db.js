import Sequelize from "sequelize";

const db = new Sequelize({
  dialect  : 'mysql', 
  host     : 'localhost',
  username : 'root',
  password : '', 
  database : 'cursojs',
});

export default db;