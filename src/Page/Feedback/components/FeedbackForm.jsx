import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import RedirectButton from "../../../components/RedirectButton";
import { useSearchParams } from "react-router-dom";
import SupabaseAuth from "../../../components/SupabaseAuthUI";
import supabaseClient from "../../../supabaseClient";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useUserSessionId from "../../../hooks/useUser";

export default function FeedbackForm() {
  const [query, setQuery] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState(null);

  const q = query.get("q");

  function closeModal() {
    setIsOpen(false);
    setQuery("");
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    if (q === "feedback") openModal();
    else closeModal();
  }, [q]);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const isFeedbackAlreadyGiven = localStorage.getItem("feedback-given")
  if(isFeedbackAlreadyGiven) return<p className="bg-gradient-to-br from-yellow-500 to-orange-500 bg-clip-text text-transparent font-bold text-xl text-center">
  Thanks for sharing <span className="font-extrabold">your</span> feedback
</p>

  return (
    <>
      <RedirectButton
        className="w-full sm:w-44 text-black bg-[#F7C04A] hover:bg-[#ffae00] focus:ring-4 focus:ring-yellow-500"
        buttonTitle="Give Feedback"
        link="?q=feedback"
      />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {session ? <Form /> : <Auth />}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function Form() {
  const [characters, setCharacters] = useState("");
  const characterCount = [...characters].filter((c) => c !== "\n").length;
  const sessionID = useUserSessionId(); // its a reference value thats why its not reactive. But it would send the correct data
  const [query, setQuery] = useSearchParams();
  async function addFeedback() {
    const { data: status } = await supabaseClient.functions.invoke(
      "feedback-with-sentiment",
      {
        body: {
          feedback: characters,
          userId: sessionID,
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
      localStorage.setItem("feedback-given",true)
    },
    onError: (e) => {
      toast.error("Some problems occured while sending toast");
      console.log(e);
    },
  });
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900 mb-2"
      >
        Feedback
      </Dialog.Title>
      <textarea
        id="message"
        onChange={(e) => setCharacters(e.target.value)}
        rows="8"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Write your feedback here..."
      ></textarea>
      <div className="mt-4 flex justify-between items-start">
        <span className="text-gray-400 text-base ml-3">
          <span className={`${characterCount > 240 && "text-red-600"}`}>
            {characterCount}
          </span>
          /240
        </span>
        <button
          onClick={mutate}
          type="button"
          className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {isPending ? "Sharing...." : "Share"}
        </button>
      </div>
    </>
  );
}

function Auth() {
  return <SupabaseAuth />;
}
