import { loginRegister } from "@/api/user";
import { RegisterFormFields, RegisterSchema } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Flex from "@/components/ui/flex";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/auth-provider";
import { useEffect } from "react";

const Register = () => {
  const { token }: any = useAuth();
  const navigate = useNavigate();
  const form = useForm<RegisterFormFields>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<RegisterFormFields> = async (value) => {
    const { name, email, password } = value;
    const response = await loginRegister({ name, email, password }, "register");
    console.log(response);
  };

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate, token]);

  return (
    <section className="w-screen h-screen p-4">
      <Flex className="w-full h-full">
        <Card className="max-w-md w-full p-10 space-y-4">
          <CardHeader>
            <CardTitle className="text-3xl font-medium">Join us.</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="space-y-7">
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
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
                  <Button
                    type="button"
                    variant="secondary"
                    className="w-full"
                    disabled={!form.formState.isValid}
                    onClick={form.handleSubmit(onSubmit)}
                  >
                    Create an Account
                  </Button>
                  <Flex>
                    <Link
                      to="/login"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Already user? Login
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

export default Register;
