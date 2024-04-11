import ProtectedRoute from "@/components/protected-route";
import Books from "@/scenes/books";
import Genres from "@/scenes/genres";
import Login from "@/scenes/login";
import Register from "@/scenes/register";
import { Routes as Router, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<h1>Dashoard</h1>} />
        <Route path="/books" element={<Books />} />
        <Route path="/genres" element={<Genres />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Router>
  );
};

export default Routes;
