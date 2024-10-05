import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { createContext, useContext, useState } from "react";
import { UserPlusIcon, ArrowLeftIcon,XCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import useAuthRedirect from "../hooks/useAuthRedirect";
const MemberModalContext = createContext(null);
export const useMemberModalContext = () => useContext(MemberModalContext);
export function MemberModalContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  function handleModalOpen() {
    setOpen(true);
  }
  function handleModalClose() {
    setOpen(false);
  }
  return (
    <MemberModalContext.Provider
      value={{ open, handleModalClose, handleModalOpen, setOpen }}
    >
      <Modal open={open} />
      {children}
    </MemberModalContext.Provider>
  );
}

export default function Modal() {
  const { open, handleModalClose, handleModalOpen, setOpen } =
    useMemberModalContext();
  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-black/80 backdrop-blur-sm fixed inset-0 w-full z-50" />
        <AlertDialog.Content className="shadow-md fixed top-[50%] left-[50%] max-h-[85vh] flex flex-col sm:items-center w-[90%] max-w-[500px]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#0e0e0e] p-[25px] z-50">
          <AlertDialog.Title className="m-0 font-bold text-4xl text-stone-200">
            Members Only
          </AlertDialog.Title>
          <AlertDialog.Description className="font-medium text-stone-200 mt-4 mb-5 text-md leading-normal">
            <p>You must have an account to use this feature.</p>
            <p>
              Join it is <span>free of cost</span>
            </p>
          </AlertDialog.Description>
          <div className="flex flex-col sm:flex-row w-full sm:w-fit">
            <SignupButton />
            <SiginButton />
          </div>
          <AlertDialog.Cancel asChild>
            <button
              className="text-white  absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center"
              aria-label="Close"
            >
              <XCircleIcon className="w-10"/>
            </button>
          </AlertDialog.Cancel>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

export function SiginButton() {
  const {handleModalClose} = useMemberModalContext()
  const {redirectToSignin} = useAuthRedirect()
  function handleClick(){
    handleModalClose()
    redirectToSignin()
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full flex items-center justify-center sm:justify-start gap-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      <ArrowLeftIcon className="w-5 text-inherit" />
      Signin
    </button>
  );
}
export function SignupButton() {
  const {redirectToSignup} = useAuthRedirect()
  const {handleModalClose} = useMemberModalContext()
  function handleClick(){
    handleModalClose()
    redirectToSignup()
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full flex items-center justify-center sm:justify-start gap-3 text-white hover:text-gray-900 bg-transparent hover:bg-white/70 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      {/* text inherit so that color from the button can added here */}
      <UserPlusIcon className="w-5 text-inherit" />
      Join
    </button>
  );
}