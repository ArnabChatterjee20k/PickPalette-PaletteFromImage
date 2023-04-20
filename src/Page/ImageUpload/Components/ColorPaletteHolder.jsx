import ColorViewer from "../../../components/ColorViewer";
import getHex from "../../../utils/getHex";
import { useImageContext } from "../Context/ImageContext";


export default function ColorPaletteHolder() {
    const {palette} = useImageContext()
    return (
    <div className="flex flex-wrap gap-10">
        {palette.length!==0 && palette.map(([r,g,b])=>{
          return <ColorViewer clipboard={true} color={getHex(r,g,b)}/>
        })}
    </div>
  )
}
