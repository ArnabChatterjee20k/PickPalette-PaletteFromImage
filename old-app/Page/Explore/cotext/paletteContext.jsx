import { createContext ,useContext} from "react";
const paletteContext = createContext();
export const usePaletteConext =()=> useContext(paletteContext);

export default function PaletteContextProvider({
  children,
  ...props // taking all props inform of objects
}) {
  // console.log(props) // will be having a object structure {key1:val1,key2:val2}
  // console.log({...props}) // spread into again object
  return (
    <paletteContext.Provider value={props}>
      {children}
    </paletteContext.Provider>
  );
}
