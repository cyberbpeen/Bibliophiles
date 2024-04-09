import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Layout from "./Layout";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const { token }: any = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate, token]);

  return <Layout />;
};

export default ProtectedRoute;
