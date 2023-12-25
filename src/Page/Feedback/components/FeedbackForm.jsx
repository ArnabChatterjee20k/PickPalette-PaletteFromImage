import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import RedirectButton from "../../../components/RedirectButton";
import { useSearchParams } from "react-router-dom";

export default function FeedbackForm() {
  const [query, setQuery] = useSearchParams();
  let [isOpen, setIsOpen] = useState(false);
  const q = query.get("q");

  function closeModal() {
    setIsOpen(false);
    setQuery("");
  }

  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    q === "feedback" && openModal();
  }, [q]);

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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-2"
                  >
                    Feedback
                  </Dialog.Title>
                  <textarea
                    id="message"
                    rows="8"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Write your feedback here..."
                  ></textarea>
                  <div className="mt-4 flex justify-between items-start">
                    <span className="text-gray-400 text-base ml-3">
                      240/240
                    </span>
                    <button
                      type="button"
                      className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={closeModal}
                    >
                      Share
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
