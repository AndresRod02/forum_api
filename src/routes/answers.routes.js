const { Router } = require("express");
const authenticate = require("../middlewares/auth.middleware");
const { createAnswerValidator } = require("../validators/answers.validators");
const { createAnswer } = require("../controllers/answers.controllers");

const router = Router();

router.post("/answers", authenticate, createAnswerValidator, createAnswer);

module.exports = router;