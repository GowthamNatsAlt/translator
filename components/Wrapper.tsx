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
            paddingTop: insets.top + 10
        }}
        className='flex-1 flex-col gap-10 bg-base px-5'
    >
      {children}
    </View>
  )
}