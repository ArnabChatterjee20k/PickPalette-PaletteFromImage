import { Transition, Dialog as HeadlessDialog } from "@headlessui/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Fragment, useEffect, useState } from "react";
import RedirectButton from "../../../components/RedirectButton";
import { useSearchParams } from "react-router-dom";
import SupabaseAuth from "../../../components/SupabaseAuthUI";
import supabaseClient from "../../../supabaseClient";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useUserSessionId from "../../../hooks/useUserSessionId";
import { useAuthContext } from "../../../context/AuthContext";
import { ClientOnly } from "remix-utils/client-only";
// import { Cross2Icon } from '@radix-ui/react-icons'

export default function FeedbackForm() {
  const isFeedbackAlreadyGiven = localStorage.getItem("feedback-given");
  if (isFeedbackAlreadyGiven)
    return (
      <p className="bg-gradient-to-br from-yellow-500 to-orange-500 bg-clip-text text-transparent font-bold text-xl text-center">
        Thanks for sharing <span className="font-extrabold">your</span> feedback
      </p>
    );

  return (
    <Form>
      <RedirectButton
        className="w-[90%] sm:w-44 text-black bg-[#F7C04A] hover:bg-[#ffae00] focus:ring-4 focus:ring-yellow-500"
        buttonTitle="Give Feedback"
        link="?q=feedback"
      />
    </Form>
  );
}

function Form({ children }) {
  const session = useAuthContext();
  const [characters, setCharacters] = useState("");
  const characterCount = [...characters].filter((c) => c !== "\n").length;
  const userId = useUserSessionId(); // its a reference value thats why its not reactive. But it would send the correct data
  const [query, setQuery] = useSearchParams();
  async function addFeedback() {
    const { data: status } = await supabaseClient.functions.invoke(
      "feedback-with-sentiment",
      {
        body: {
          feedback: characters,
          userId: userId,
        },
      }
    );
    if (status.toLowerCase() !== "created")
      throw new Error("feedback not created");
    return status;
  }
  const { mutate, isPending, isPaused } = useMutation({
    mutationFn: addFeedback,
    onSuccess: (status) => {
      toast.success(status);
      setQuery("");
    },
    onError: (e) => {
      toast.error("Some problems occured while sending toast");
      console.log(e);
    },
  });
  console.log({
    shall: isPending || characterCount > 240 || characterCount < 4,
  });
  return (
    <Dialog.Root open={query.get("q") === "feedback"}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 transition-opacity animate-fadeIn" />
        <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none animate-contentShow">
          <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 mb-2">
            Feedback
          </Dialog.Title>
          {!session ? (
            <Auth />
          ) : (
            <>
              <textarea
                id="message"
                onChange={(e) => setCharacters(e.target.value)}
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your feedback here..."
              />
              <div className="mt-4 flex justify-between items-start">
                <span className="text-gray-400 text-base ml-3">
                  <span className={characterCount > 240 ? "text-red-600" : ""}>
                    {characterCount}
                  </span>
                  /240
                </span>
                <button
                  onClick={mutate}
                  type="button"
                  className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800 transition-all duration-300 ${
                    isPending || characterCount > 240 || characterCount < 4
                      ? "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={
                    isPending || characterCount > 240 || characterCount < 4
                  }
                >
                  {isPending ? "Sharing..." : "Share"}
                </button>
              </div>
            </>
          )}
          <Dialog.Close asChild>
            <button
              onClick={() => setQuery("")}
              className="text-gray-400 hover:text-gray-500 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Auth() {
  return (
    <ClientOnly>
      {() => <SupabaseAuth redirectURL={window.location} />}
    </ClientOnly>
  );
}
