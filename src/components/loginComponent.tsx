"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import toast from "react-hot-toast";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const LoginComponent = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: any) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Logged in sucessfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Invalid credentails");
      });
  };
  return (
    <div className="flex min-h-screen items-center justify-center text-blue-900 border border-red-800">
      <div className="flex align-center justify-center  min-h-[250px] md:w-[380px] border border-silver-600 p-4 shadow-lg rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 border-blue-950"
        >
          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <Button type="submit" variant="primary">
            Login
          </Button>
          <p>
            Dont have an account?{" "}
            <span
              onClick={() => router.push("/register")}
              className="hover:text-blue-500 cursor-pointer"
            >
              click here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
