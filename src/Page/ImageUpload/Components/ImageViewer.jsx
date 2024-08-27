import React from 'react'

export default function ImageViewer({src}) {
  return <img src={src} className="w-fit h-[340px] object-contain rounded-lg" alt="image description"/>
}
