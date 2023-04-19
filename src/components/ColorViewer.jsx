import React from 'react'

export default function ColorViewer({color}) {
  return (
    <div className='w-20 h-20 rounded border-2' style={{backgroundColor:color}}/>
  )
}
