import React from "react";
import useSubscribeNewsletter from "../../../services/useSubscribeNewsletter";
import { useRef } from "react";
import { toast } from "react-hot-toast";

export default function Form() {
  const ref =  useRef(null)
  const {subscribe,status} = useSubscribeNewsletter()

  const handleForm = (e)=>{
    e.preventDefault();
    const email = ref.current.value
    toast.loading("Subscribing....")
    subscribe(email)
  }
  return (
    <form className="mt-6 flex max-w-md gap-x-4" onSubmit={handleForm}>
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        ref={ref}
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Subscribe
      </button>
    </form>
  );
}