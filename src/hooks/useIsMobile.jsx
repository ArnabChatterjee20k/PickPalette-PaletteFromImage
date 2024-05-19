import React from 'react'
import useMediaQuery from './useMediaQuery'

export default function useIsMobile() {
  return useMediaQuery("(max-width:400px)");
}

export function useIsTablet() {
  return useMediaQuery("(max-width:1024px)");
}
export function useIsPad() {
  return useMediaQuery("(max-width:672px)");
}