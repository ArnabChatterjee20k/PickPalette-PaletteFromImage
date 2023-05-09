import { useEffect } from "react";
import { useState } from "react";

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

  const clickHandler = async (value="copied value") => {
    setDefaultText(finalText);
    await navigator.clipboard.writeText(value);
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