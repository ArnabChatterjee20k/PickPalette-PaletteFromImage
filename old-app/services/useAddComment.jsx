import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import addComment from '../utils/addComment'

export default function useAddComment() {
  const mutation = useMutation(feedback=>addComment(feedback))
  const client = useQueryClient()
  return (feedback,prevToastId=null)=>{
    mutation.mutate(feedback,{
        onSuccess:(data)=>{
            if(prevToastId) toast.dismiss(prevToastId)
            toast.success("Comment Added")
            client.invalidateQueries(["feedback"])
          },
          onError:(error)=>{
            toast.remove()
            console.log({error})
            toast.error("Some problem occured")
        },
    })
  }
}