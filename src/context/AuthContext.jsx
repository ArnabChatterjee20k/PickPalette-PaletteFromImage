import { createContext, useContext, useEffect, useState } from "react";
import supabaseClient from "../supabaseClient";

const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  useEffect(() => {
    const subscription = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT") {
          setSession(null);
        } else if (event === "SIGNED_IN") {
          setSession(session);
        } else if (session) {
          supabaseClient.auth.setSession(session);
        } else {
          setSession(null);
        }
      }
    );

    return () => {
      subscription.data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
};
