import { Router } from "express";
import { getUser, login, register } from "../controllers/auth";
import {
  addBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from "../controllers/book";
import {
  addGenre,
  deleteGenre,
  getGenreById,
  getGenres,
  updateGenre,
} from "../controllers/genres";
import isAuthenticated from "../middleware/auth";
import { ErrorHandler } from "../middleware/errorHandler";

const router = Router();

// Root Route
router.get("/", (req, res) => {
  return res.status(200).json("Hello From Server Side.");
});

// Login and Registration Route
router.post("/auth/login", login);
router.post("/auth/register", register);
router.get("/user/getProfile", isAuthenticated, getUser);

// Books Route
router.post("/books", isAuthenticated, addBook);
router.get("/books/:id", isAuthenticated, getBookById);
router.get("/books", isAuthenticated, getBooks);
router.put("/books/:id", isAuthenticated, updateBook);
router.delete("/books/:id", isAuthenticated, deleteBook);

// Genres Route
router.post("/genres", isAuthenticated, addGenre);
router.get("/genres/:id", isAuthenticated, getGenreById);
router.get("/genres", isAuthenticated, getGenres);
router.put("/genres/:id", isAuthenticated, updateGenre);
router.delete("/genres/:id", isAuthenticated, deleteGenre);

// Error Handler Middleware
router.use(ErrorHandler);

export default router;
