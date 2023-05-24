// importar los modelos
const Users = require("./users.model");
const Roles = require("./roles.model");
const Answers = require("./answers.model");
const Posts = require("./posts.model");
const Categories = require("./categories.model");

const initModels = () => {
  Users.belongsTo(Roles, { foreignKey: "rolId" });
  Roles.hasMany(Users, { foreignKey: "rolId" });

  // Un usuario responde muchas publicaciones
  // una publicación es respondida por muchos usuarios

  // una respuesta le pertenece a un usuario
  Answers.belongsTo(Users, { foreignKey: "userId" });
  // Un usuario tiene muchas respuestas
  Users.hasMany(Answers, { foreignKey: "userId" });

  // Una todo le pertenece a una usuario
  Answers.belongsTo(Posts, { foreignKey: "postId" });
  // Una usuario tiene muchas todos
  Posts.hasMany(Answers, { foreignKey: "postId" });

  // un post es creado (le pertenece) a un usuario
  Posts.belongsTo(Users, { foreignKey: "userId" });
  // un usuario crea muchos posts
  Users.hasMany(Posts, { foreignKey: "userId" });

  // Una publicacion le pertenece a una categoria
  Posts.belongsTo(Categories, { foreignKey: "categoryId" });
  // Una categoria tiene muchas publicaciones
  Categories.hasMany(Posts, { foreignKey: "categoryId" });
};

module.exports = initModels;
// Un usuario tine un rol? 1 (belongsTo)
// Un rol lo pueden tener muchos? Muchos (hasMany)
// 1 - M
