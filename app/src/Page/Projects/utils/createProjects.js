import { SUPABASE_FUNCTIONS } from "../../../data/data";
import getCurrentSessionToken from "../../../utils/getCurrentSessionToken";
export default async ({ name, description }) => {
  const url = `${SUPABASE_FUNCTIONS}/project_handler`;
  const token = await getCurrentSessionToken();
  const header = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ name, description });
  const res = await fetch(url, {
    method: "POST",
    headers: header,
    body: body,
  });

  const data = await res.json();
  return data;
};
