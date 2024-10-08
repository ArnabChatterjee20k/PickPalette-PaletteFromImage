import { createContext, useContext, useEffect, useState } from "react";
import supabaseClient from "../supabaseClient";

const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  // initial session finding
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabaseClient.auth.getSession();
      setSession(session);
    };

    getSession();

    const { data: subscription } = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT") {
          setSession(null);
        } else if (event === "SIGNED_IN") {
          setSession(session);
        }
      }
    );

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
};
