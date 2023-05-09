import { VITE_NEWSLETTER_API } from "../data/data";

export default async function subscribeNewsletter(email) {
  const uri = new URL(VITE_NEWSLETTER_API + "/newsletter/user/" + email);
  const res = await fetch(uri.href);
  const data = await res.json();
  const {message} = data;
  const statusText = res.statusText
  const status = res.status

  if (status===200) {
    return data;
  }
  console.log({status})
  if(message) throw new Error(message)
  throw new Error(statusText)
}