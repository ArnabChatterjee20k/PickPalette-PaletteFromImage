import { useNavigate, useLocation } from "react-router-dom";
export default function useAuthRedirect() {
  const nav = useNavigate();
  const location = useLocation();
  const redirectState = { redirectTo: location.pathname };
  
  function redirectToSignin() {
    nav("user/signin", { state: redirectState });
  }
  function redirectToSignup() {
    nav("user/signup", { state: redirectState });
  }

  return { redirectToSignup, redirectToSignin };
}