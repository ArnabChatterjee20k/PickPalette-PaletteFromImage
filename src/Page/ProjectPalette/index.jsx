import React from 'react'
import PaletteStatusBar from './components/PaletteStatusBar'
import PaletteViewer from './components/PaletteViewer'

export default function index() {
  return (
    <div className='flex flex-col w-full'>
        <PaletteStatusBar/>
        <PaletteViewer/>
    </div>
  )
}