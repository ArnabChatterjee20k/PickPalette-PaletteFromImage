import { SUPABASE_FUNCTIONS } from "../../../data/data";
import getCurrentSessionToken from "../../../utils/getCurrentSessionToken";
// import mockRequest from "../../../utils/mockRequest";

export default async function changeProjectPalette(colors,projectId) {
  const token = await getCurrentSessionToken();
  let headersList = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    colors: colors,
  });

  let response = await fetch(`${SUPABASE_FUNCTIONS}/palette_handler/${projectId}`, {
    method: "PUT",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  console.log(data);

  console.log("sending...", data);
}
