import { VITE_MAIN_API } from "../data/data";

export default async()=>{
    const url = `${VITE_MAIN_API}/feedback`
    const res = await fetch(url)
    const {feedbacks} = await res.json()
    return feedbacks
}