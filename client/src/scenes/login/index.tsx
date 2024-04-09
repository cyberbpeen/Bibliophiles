import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useAuth } from "../../context/AuthProvider";
import { useEffect } from "react";
import { Input } from "../../components/ui";

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters." }),
});

type FormFields = z.infer<typeof loginSchema>;

const Login = () => {
  const { token, setToken }: any = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(loginSchema) });

  const loginHandler: SubmitHandler<FormFields> = async (formData) => {
    axios
      .post("http://localhost:3000/api/v1/auth/login", {
        email: formData.email,
        password: formData.password,
      })
      .then(function (response) {
        setToken(response.data.token);
        navigate("/");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate, token]);

  return (
    <section className="w-full h-full">
      <div className="flex justify-center items-center flex-col w-screen h-screen px-4">
        <div className="flex flex-col gap-12 px-8 py-12 border-zinc-800 border w-full max-w-[440px] rounded-lg">
          <div className="">
            <h3 className="text-4xl text-zinc-100 font-medium">
              Welcome Back.
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base mt-1">
              Enter your email below to create your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit(loginHandler)}
            className="flex flex-col gap-6"
          >
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute font-normal text-xs bg-zinc-950 px-1 left-2 -top-2"
              >
                Email
              </label>
              <Input type="text" id="email" {...register("email")} />
              {errors.email && (
                <small className="text-xs font-medium text-red-400">
                  {errors.email.message}
                </small>
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="absolute font-normal text-xs bg-zinc-950 px-1 left-2 -top-2"
              >
                Password
              </label>
              <Input type="password" id="password" {...register("password")} />
              {errors.password && (
                <small className="text-xs font-medium text-red-400">
                  {errors.password.message}
                </small>
              )}
            </div>
            <div className="flex items-center justify-end -mt-3 -mb-2">
              <a
                href="/register"
                className="text-sm text-zinc-300 hover:text-zinc-50"
              >
                Forget Password?
              </a>
            </div>
            <button
              type="submit"
              className="h-10 bg-zinc-800 hover:bg-zinc-900 rounded px-6 text-base font-medium"
            >
              Login
            </button>
            <div className="flex items-center justify-center">
              <Link
                to="/register"
                className="text-sm text-zinc-300 hover:text-zinc-50"
              >
                Create an New Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
