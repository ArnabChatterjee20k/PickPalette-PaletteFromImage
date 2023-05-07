import { useMutation } from '@tanstack/react-query'
import subscribeNewsletter from '../utils/subscribeNewsletter'
import { toast } from 'react-hot-toast'

export default function useSubscribeNewsletter(email) {
  const mutation = useMutation(email=>subscribeNewsletter(email))
  function subscribe (email){
    mutation.mutate(email,{
        onSuccess:(data)=>{
            toast.success("Subscription Added")
        },
        onError:(error)=>{
            toast.error(error.message)
        },
    })
  }

  return {subscribe,status:mutation.status}

}