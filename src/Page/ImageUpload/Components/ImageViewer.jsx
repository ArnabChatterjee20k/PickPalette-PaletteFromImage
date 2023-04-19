import React from 'react'

export default function ImageViewer({src}) {
  return <img src={src} className="w-full max-h-[20rem] max-w-xl rounded-lg" alt="image description"/>
}
