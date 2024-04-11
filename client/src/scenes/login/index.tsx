import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { loginRegister } from "@/api/user";
import { Button } from "@/components/ui/button";
import Flex from "@/components/ui/flex";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormFields, LoginSchema } from "@/types/user";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/context/auth-provider";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

const Login = () => {
  const { token, setToken }: any = useAuth();
  const navigate = useNavigate();
  const form = useForm<LoginFormFields>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginFormFields> = async (value) => {
    const { email, password } = value;
    const response = await loginRegister(
      { name: "", email, password },
      "login"
    );
    if (response.code === "success") {
      const token: string = response.data as string;
      setToken(token);
    } else if (response.code === "error") {
      console.log(response.error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate, token]);

  return (
    <section className="w-screen h-screen p-4">
      <Flex className="w-full h-full">
        <Card className="max-w-md w-full p-10 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-medium">
              Welcome Back.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="space-y-8">
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="space-y-4">
                  <Flex justify="end">
                    <Link
                      to="/register"
                      className="text-sm -mt-4 text-muted-foreground hover:text-foreground"
                    >
                      Forget Password?
                    </Link>
                  </Flex>
                  <Button
                    type="button"
                    variant="secondary"
                    className="w-full"
                    disabled={!form.formState.isValid}
                    onClick={form.handleSubmit(onSubmit)}
                  >
                    Login
                  </Button>
                  <Flex>
                    <Link
                      to="/register"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Create an New Account
                    </Link>
                  </Flex>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </Flex>
    </section>
  );
};

export default Login;
