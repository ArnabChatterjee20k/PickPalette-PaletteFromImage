import { defer, json, LoaderFunctionArgs } from "@netlify/remix-runtime";
import { Await, useLoaderData, useRouteError } from "@remix-run/react";
import { Suspense } from "react";
import { createSupabaseServerClient } from "~/src/client/supabase.server";
import ErrorMessage from "~/src/components/Error";
import Feedback from "~/src/Page/Feedback/Feedback";

export async function loader({ request }: LoaderFunctionArgs) {
  const { supabaseClient } = createSupabaseServerClient(request);

  const reviewsPromise = supabaseClient
    .from("feedback")
    .select("feedback")
    .eq("ready", true)
    .order("sentiment_score", { ascending: false })
    .then((data) => data.data);

  return defer({ reviews: reviewsPromise });
}

export default function Reviews() {
  const { reviews } = useLoaderData<typeof loader>();
  return (
    <Suspense fallback={<Feedback isLoading={true} />}>
      <Await resolve={reviews} errorElement={<ErrorMessage />}>
        {(resolvedReviews) => {
          return <Feedback reviews={resolvedReviews} />;
        }}
      </Await>
    </Suspense>
  );
}

export function ErrorBoundary() {
  return (
    <div className="px-4">
      <ErrorMessage />
    </div>
  );
}

// export async function action(){
//     // for adding
// }
