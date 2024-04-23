import { useAuthContext } from "../context/AuthContext";

export default function useUserAccessToken() {
  const session = useAuthContext()
  return session?.access_token;
}