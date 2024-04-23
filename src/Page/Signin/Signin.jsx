import { SignIn } from "@supabase/auth-ui-react";
import React from "react";
import supabaseClient from "../../supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <section className="flex items-center justify-center">
      <div className="w-[90%] max-w-[500px] mt-16">
        <h1 className="font-bold text-white text-4xl">SignIn</h1>
        <p>Access your account</p>
        <SignIn
          providers={["google"]}
          supabaseClient={supabaseClient}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  defaultButtonBackgroundHover: "#4a72f7",
                  anchorTextHoverColor: "#4a72f7",
                  brandAccent: "#4a72f7",
                },
              },
            },
            className: {
              divider: "hidden",
              button:
                "w-full text-[#4a72f7] hover:text-white bg-transparent border border-[#4a72f7] hover:bg-[#4671ff] focus:ring-4 focus:ring-blue-500",
              input: "text-white",
            },
          }}
        />
        <Link to={"/user/signup"} className="flex justify-center underline text-gray-400 hover:text-white">Already having an account? Signin</Link>
      </div>
    </section>
  );
}
