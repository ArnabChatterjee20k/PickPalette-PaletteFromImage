import React from 'react'

export default function Board({children}) {
  return (
    <section className='bg-[#09090b] w-full px-5 py-4'>
      {children}
    </section>
  )
}
