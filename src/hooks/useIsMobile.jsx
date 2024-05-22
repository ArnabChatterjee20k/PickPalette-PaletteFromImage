import React from 'react'
import useMediaQuery from './useMediaQuery'

export default function useIsMobile() {
  return useMediaQuery("(max-width:400px)");
}

export function useIsTablet() {
  return useMediaQuery("(max-width:1023.98px)");
}
export function useIsPad() {
  return useMediaQuery("(max-width:672px)");
}
export function useIsExactTabletWidth() {
  return useMediaQuery("(width: 1024px)");
}