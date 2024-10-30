import { Dispatch, SetStateAction } from "react"

export type LangType = {
    input_text: string,
    output_text: string,
    input_lang: string,
    output_lang: string
}

export type LangContextType = {
    translator: LangType
    setTranslator: Dispatch<SetStateAction<LangType>>
}

export type LangCodeType = {
    name: string,
    id: string
}