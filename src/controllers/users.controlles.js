const Users = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendWelcomeMail = require('../utils/sendMails')
require('dotenv').config()

const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    await Users.create({ username, email, password: hashed });
    res.status(201).send();
    const verifyToken = jwt.sign(
      { username, email },
      process.env.JWT_SECRET_EMAIL_VALIDATION,
      {
        algorithm: "HS512",
        expiresIn: "48h",
      }
    );
    sendWelcomeMail(email, {username, verifyToken})
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({
      where: { email },
    });

    if (!user) {
      // null -> false niego un falso obtengo un verdadero
      return next({
        status: 400,
        name: "Invalid email",
        message: "user not exist",
      });
    }
    if(!user.validUser){
      return next({
        status: 400,
        name: 'email is not verified',
        message: 'User needs verified his/her email'
      })
    }
    // comparar las contraseñas
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return next({
        status: 400,
        name: "Invalid password",
        message: "The password does not match with user email",
      });
    }
    const { firstname, lastname, id, username, rolId } = user;

    // no responder la contraseña

    // debemos devolver un token para que el usuario loggeado
    // pueda acceder a los recursos del back

    // Genear token
    const userData = { firstname, lastname, id, username, email, rolId };

    const token = jwt.sign(userData, process.env.JWT_SECRET_LOGIN, {
      algorithm: "HS512",
      expiresIn: "5m",
    });
    // agregar el token en userData
    userData.token = token;

    res.json(userData);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  login,
};

// alguien esta editando