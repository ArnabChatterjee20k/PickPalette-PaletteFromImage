import { useRef, useEffect } from "react";
import supabaseClient from "../supabaseClient";

export default function useUserSessionId() {
  const userSession = useRef(null);
  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(async () => {
      const { data, error } = await supabaseClient.auth.getSession();
      if (error) userSession.current = null;
      else {
        const { session } = data;
        userSession.current = session.user.id;
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  return userSession.current;
}
