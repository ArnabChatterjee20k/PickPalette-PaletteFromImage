import { createContext , useContext} from "react";

export const ImageContext = createContext();
export const useImageContext = ()=>useContext(ImageContext)