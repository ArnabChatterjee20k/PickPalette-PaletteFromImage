import fetchPalettes from "~/src/utils/fetchPalettes";
import { json } from "@netlify/remix-runtime";
import Explore from "~/src/Page/Explore/Explore";
import { useLoaderData } from "@remix-run/react";
export async function loader() {
  const initialData = await fetchPalettes(1);
  return json(initialData);
}

export default function Palettes() {
  const initialData = useLoaderData<typeof loader>();
  return <Explore initialData={initialData} />;
}
