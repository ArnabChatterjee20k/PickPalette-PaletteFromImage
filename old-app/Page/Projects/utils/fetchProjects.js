import { SUPABASE_FUNCTIONS } from "../../../data/data";
import getCurrentSessionToken from "../../../utils/getCurrentSessionToken";

export default async function fetchProjects() {
  const url = `${SUPABASE_FUNCTIONS}/project_handler`;
  const token = await getCurrentSessionToken();
  const header = { Authorization: `Bearer ${token}` };

  const res = await fetch(url, { headers: header });
  const data = await res.json();
  return data.data;
}