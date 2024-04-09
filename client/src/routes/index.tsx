import { Routes as Router, Route } from "react-router-dom";
import Login from "../scenes/login";
import Register from "../scenes/register";
import ProtectedRoute from "../components/ProtectedRoutes";
import Book from "../scenes/book";
import AddBook from "../scenes/book/addBook";
import Genres from "../scenes/genres";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<h1>Dashoard</h1>} />
        <Route path="/books" element={<Book />} />
        <Route path="/books/add" element={<AddBook />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Router>
  );
};

export default Routes;
