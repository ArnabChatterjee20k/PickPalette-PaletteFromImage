import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import CopyIcon from "../components/CopyIcon";

export default function useColorClipboard(initialText="copy",finalText="copied") {
  const [defaultText, setDefaultText] = useState(initialText);
  const [display, setDisplay] = useState(false);
  useEffect(()=>{
    const id = setInterval(()=>{
        setDefaultText(initialText);
    },1000)  
    return ()=>{
        clearInterval(id)
    }
  },[defaultText])

  const clickHandler = async (value="copied value",notify=true,notifyMessage="color copied to clipboard") => {
    setDefaultText(finalText);
    try {
      await navigator.clipboard.writeText(value);
      toast.remove()
      if(notify) toast.success(notifyMessage,{
        className:"rounded-xl z-50",position:"bottom-right"
      })
    } catch (error) {
      toast.remove()
      if(notify) toast.error("Some problem occured")
    }
  };
  
  const hoverHandler = () => {
    setDisplay(true)
  };

  const leaveHandler = () => {
    setDefaultText(initialText);
    setDisplay(false);
  };

  return {defaultText , clickHandler , leaveHandler,display,hoverHandler}
}