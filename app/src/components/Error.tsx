import * as Dialog from "@radix-ui/react-dialog";
import { AlertTriangle } from "lucide-react";

export default function ErrorMessage() {
  return (
    <Dialog.Root open={true}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1A202C] p-6 rounded-lg shadow-lg max-w-md w-full"
        >
          <div className="text-center">
            <AlertTriangle className="h-10 w-10 text-red-500 mx-auto" />
            <h2 className="mt-4 text-xl font-bold text-white">Oops, something went wrong!</h2>
            <p className="mt-2 text-gray-300">
              We're sorry, but an unexpected error has occurred. Please try again later or contact support if the issue persists.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                Go to Homepage
              </button>
              <button className="border border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white transition">
                Contact Support
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
