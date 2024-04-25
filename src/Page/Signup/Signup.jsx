import { SignUp } from "@supabase/auth-ui-react";
import React from "react";
import supabaseClient from "../../supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export default function Signup() {
  const { state } = useLocation();
  const redirectLocation = `${state?.redirectTo || "/user/dashboard/projects"}`;
  const session = useAuthContext()
  const prefix = window.location.host
  if(session) return <Navigate to={redirectLocation}/>
  return (
    <section className="flex items-center justify-center">
      <div className="w-[90%] max-w-[500px] mt-16">
        <h1 className="font-bold text-white text-4xl">Join</h1>
        <p>Create your account</p>
        <SignUp
          providers={["google"]}
          redirectTo={`${prefix}${redirectLocation}`}
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
        <Link
          to={"/user/signin"}
          className="flex justify-center underline text-gray-400 hover:text-white"
        >
          Already having an account? Signin
        </Link>
      </div>
    </section>
  );
}
