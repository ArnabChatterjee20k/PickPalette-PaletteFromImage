import { useMutation } from '@tanstack/react-query'
import subscribeNewsletter from '../utils/subscribeNewsletter'
import { toast } from 'react-hot-toast'

export default function useSubscribeNewsletter(email) {
  const mutation = useMutation(email=>subscribeNewsletter(email))
  function subscribe (email,prevToastId=null){
    mutation.mutate(email,{
        onSuccess:(data)=>{
            if(prevToastId) toast.dismiss(prevToastId)
            toast.success("Subscription Added")
          },
          onError:(error)=>{
            if(prevToastId) toast.dismiss(prevToastId)
            console.log({error})
            toast.error(error.message)
        },
    })
  }

  return {subscribe,status:mutation.status}

}