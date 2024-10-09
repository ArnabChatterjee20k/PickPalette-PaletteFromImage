import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useRouteError } from "@remix-run/react";
import { createSupabaseServerClient } from "~/src/client/supabase.server";
import ErrorMessage from "~/src/components/Error";
import Feedback from "~/src/Page/Feedback/Feedback";

export async function loader({ request }: LoaderFunctionArgs) {
  const { supabaseClient } = createSupabaseServerClient(request);
  const { data: reviews, error } = await supabaseClient
    .from("feedback")
    .select("feedback")
    .eq("ready", true)
    .order("sentiment_score", { ascending: false });
  throw new Error("Some error occured");
  return json({ reviews });
}

export default function Reviews() {
  const { reviews } = useLoaderData<typeof loader>();
  return <Feedback reviews={reviews} />;
}

export function ErrorBoundary() {
  return <ErrorMessage/>
}

// export async function action(){
//     // for adding
// }
