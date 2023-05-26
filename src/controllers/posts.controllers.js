const Posts = require("../models/posts.model");
const Users = require('../models/users.model')


const createPost = async (req, res) => {
  try {
    const newPost = req.body;
    await Posts.create(newPost);
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const getPostByCategory = async (req, res) =>{
  try {
    const {categoryId} = req.params
    const posts = await Posts.findAll({
      where: {categoryId},
      include: {
        model: Users
      }
    })
    res.json(posts);
  } catch(error){
    res.status(400).json(error);
 }
};

module.exports = {
  createPost,
  getPostByCategory
};
