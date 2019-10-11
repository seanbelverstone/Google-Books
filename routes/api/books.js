const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
// Gets all the books
  .get(booksController.findAll)
//Saves a book into the database
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
//Remove a book from saved
  .delete(booksController.remove);

module.exports = router;
