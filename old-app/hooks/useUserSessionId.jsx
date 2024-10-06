import { useAuthContext } from "../context/AuthContext";

export default function useUserSessionId() {
  const session = useAuthContext()
  return session?.user.id;
}