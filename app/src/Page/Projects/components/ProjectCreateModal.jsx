import * as Dialog from "@radix-ui/react-dialog";
import createProjectAction from "../actions/create-project.action";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ProjectCreateModal({ children }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow bg-[#111625] fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-white my-3 text-[17px] font-medium">
            Create New Project
          </Dialog.Title>
          <Form />
          <Dialog.Close asChild>
            <button
              className="text-white hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Form() {
  const { createProject, isPending } = createProjectAction();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmission(e) {
    e.preventDefault();
    if (isPending) return;
    const fields = [name, description];
    fields.forEach((field) => {
      if (field.trim().length === 0) {
        toast.error("Please enter the fields", {
          className: "rounded-xl z-50",
          position: "bottom-right",
        });
        return;
      }
    });
    if (description.trim().length < 10) {
      toast.error("Description should be atleast 10 characters long");
      return;
    }
    createProject(name, description);
  }
  return (
    <form onSubmit={handleSubmission}>
      <fieldset className="flex flex-col gap-2 mb-4">
        <label className="text-white text-[15px]" htmlFor="name">
          Project Name
        </label>
        <input
          className="text-black inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </fieldset>

      <fieldset className="flex flex-col gap-2 mb-4">
        <label className="text-white text-[15px]" htmlFor="description">
          Project Description
        </label>
        <input
          minLength={10}
          className="text-black inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </fieldset>

      <div className="mt-[25px] flex justify-end">
        {/* <Dialog.Close asChild> */}
        <button
          disabled={isPending}
          type="submit"
          className="inline-flex items-center justify-center px-3 py-2 text-[0.8rem] font-medium text-center rounded-md w-30 text-black bg-[#ffae00] hover:bg-[#F7C04A] disabled:bg-[#F7C04A]  focus:ring-4 focus:ring-yellow-500"
        >
          {isPending ? "Creating..." : "Create"}
        </button>
        {/* </Dialog.Close> */}
      </div>
    </form>
  );
}
