import { View, Text } from 'react-native'
import React, { createContext, ReactNode, useState } from 'react'
import { LangContextType, LangType } from '@/utils/Types'

const LangContext = createContext<LangContextType | null>(null)

function Provider(
    { children } : { children: ReactNode }
) {
    const [translator, setTranslator] = useState<LangType>({
        input_text: "",
        output_text: "",
        input_lang: "en",
        output_lang: "en"
    })

  return (
    <LangContext.Provider
        value={{ translator, setTranslator }}
    >
        {children}
    </LangContext.Provider>
  )
}

export { Provider as default, LangContext }