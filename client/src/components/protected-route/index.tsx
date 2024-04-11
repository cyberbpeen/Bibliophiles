import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/context/auth-provider";
import Layout from "@/components/layout";

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
