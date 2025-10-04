"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginSchema } from "_/schema/login.schema";
import PostSignIn from "_/APIs/PostSignIn";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });
  async function handleLogin(values) {
    try {
      const { data } = await PostSignIn(values);
      toast.success(data.message, {
        position: "top-right",
        duration: 3000,
      });
      router.push("/");
    } catch (error) {
      toast.error(error.response?.data?.message ?? "Something went wrong", {
        position: "top-right",
        duration: 3000,
      });
    }
  }

  return (
    <>
      <section className="flex justify-center">
        <Card className="w-full max-w-sm text-center">
          <CardHeader>
            <CardTitle className="text-4xl">Login Form</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form} className="gap-2">
              <form
                onSubmit={form.handleSubmit(handleLogin)}
                className="flex flex-col gap-5"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">Login</Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter>{/* <Button type="submit">Submit</Button> */}</CardFooter>
        </Card>
      </section>
    </>
  );
}
