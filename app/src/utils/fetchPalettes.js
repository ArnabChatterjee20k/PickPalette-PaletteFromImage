import { PALETTE_API } from "../data/data"

export default async function fetchPalettes(page){
    const url = `${PALETTE_API}?action=read&page=${page}`
    const res = await fetch(url)
    const data = await res.json()
    return {page:page,palettes:data}

}