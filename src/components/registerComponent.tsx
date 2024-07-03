"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth } from "@/firebase/config";
import toast from "react-hot-toast";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const RegisterComponent = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    fetchSignInMethodsForEmail(auth, data.email)
      .then((signInMethods) => {
        if (signInMethods.length > 0) {
          console.error("Email already exists");
        } else {
          createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log("User created:", user);
              toast.success("user register successfully");
              router.push("/");
            })
            .catch((error) => {
              console.log("Error creating user:", error.message);
              toast.error("Email already exists");
            });
        }
      })
      .catch((error) => {
        // Handle errors when checking email existence
        console.log("Error checking email existence:", error.message);
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
            type="text"
            placeholder="Username"
            {...register("username", { required: true, minLength: 3 })}
          />

          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 6 })}
          />
          <Button type="submit">Register</Button>
          <p>
            Already have an account?{" "}
            <span
              onClick={() => router.push("/")}
              className="hover:text-blue-500 cursor-pointer"
            >
              login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
