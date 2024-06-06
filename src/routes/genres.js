const express = require("express");
const {
  createGenresController,
  deleteGenresController,
  getAllGenresController,
  getOneGenresController,
  updateGenresController,
  searchGenresByNameController,
} = require("../controller/genres");

const router = express.Router();
const genresRoute = (app) => {
  router.post("/api/v1/create-genres", createGenresController);
  router.delete("/api/v1/delete-genres/:id", deleteGenresController);
  router.get("/api/v1/all-genres", getAllGenresController);
  router.get("/api/v1/genres/:id", getOneGenresController);
  router.put("/api/v1/update-genres", updateGenresController);
  router.get("/api/v1/search-genres", searchGenresByNameController);
  return app.use("/", router);
};
module.exports = genresRoute;
