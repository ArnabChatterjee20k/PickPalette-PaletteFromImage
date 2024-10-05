import React from "react";
import useSubscribeNewsletter from "../../../services/useSubscribeNewsletter";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import SupabaseAuthUI from "../../../components/SupabaseAuthUI"
export default function Form() {
  const ref =  useRef(null)
  const {subscribe,status} = useSubscribeNewsletter()

  const handleForm = (e)=>{
    e.preventDefault();
    const email = ref.current.value
    const toastId = toast.loading("Subscribing....")
    subscribe(email,toastId)
  }
  return (
    <SupabaseAuthUI/>
  );
}