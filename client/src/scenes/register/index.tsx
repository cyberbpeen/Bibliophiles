import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useAuth } from "../../context/AuthProvider";
import axios from "axios";
import { Input } from "../../components/ui";

const registerSchema = z.object({
  name: z.string().min(3, { message: "Name is required." }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters." }),
});

type FormFields = z.infer<typeof registerSchema>;

const Register = () => {
  const { token }: any = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(registerSchema) });

  const registerHandler: SubmitHandler<FormFields> = async (formData) => {
    axios
      .post("http://localhost:3000/api/v1/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
      .then(function (response) {
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
          <div>
            <h3 className="text-4xl text-zinc-100 font-semibold">Join us.</h3>
            <p className="text-zinc-400 text-sm sm:text-base mt-1">
              Enter your email below to create your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit(registerHandler)}
            className="flex flex-col gap-6"
          >
            <div className="relative">
              <label
                htmlFor="name"
                className="absolute font-normal text-xs bg-zinc-950 px-1 left-2 -top-2"
              >
                Full Name
              </label>
              <Input type="text" id="name" {...register("name")} />
              {errors.name && (
                <small className="text-xs font-medium text-red-400">
                  {errors.name.message}
                </small>
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute font-normal text-xs bg-zinc-950 px-1 left-2 -top-2"
              >
                Email
              </label>
              <Input type="email" id="email" {...register("email")} />
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
            <button
              type="submit"
              className="h-10 bg-zinc-800 hover:bg-zinc-900 rounded px-6 text-base font-medium"
            >
              Create an Account
            </button>
            <div className="flex items-center justify-center">
              <Link
                to="/login"
                className="text-sm text-zinc-400 hover:text-zinc-50"
              >
                Already user? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
