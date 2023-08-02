const express = require("express");
const navRoutes = express.Router();
const { loginPage , profilePage} = require("../controllers/navcontroller");


navRoutes.get("/sign-in", loginPage);
navRoutes.get("/profile", profilePage);

module.exports = navRoutes;
