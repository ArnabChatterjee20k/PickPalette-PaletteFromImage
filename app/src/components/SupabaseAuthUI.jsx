import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import supabaseClient from "../supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { PRODUCTION_ENV } from "../data/data";
const redirectURI = PRODUCTION_ENV
  ? "https://pickpalette.netlify.app/feedback?q=feedback"
  : "http://localhost:5173/";
export default function SupabaseAuth({redirectURL}) {
  return (
    <Auth
      supabaseClient={supabaseClient}
      providers={["google"]}
      appearance={{
        theme: ThemeSupa,
        className: { button: "text-[#34b27b] hover:text-white" },
      }}
      redirectTo={redirectURL || redirectURI}
    />
  );
}
