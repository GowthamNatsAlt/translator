import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Wrapper(
    { children }: { children?: ReactNode }
) {

    const insets = useSafeAreaInsets()

  return (
    <View
        style={{
            paddingTop: insets.top
        }}
        className='flex-1 flex-col items-center justify-center gap-10'
    >
      {children}
    </View>
  )
}