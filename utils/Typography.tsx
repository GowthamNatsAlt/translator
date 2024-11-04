import { View, Text } from 'react-native'
import React from 'react'

type TextProps = {
  children: string,
  className?: string,
  fontWeight: '300' | '400' | '500' | '600' | '700' | '800' | '900' 
}

export function BaseText(
  { className, children, fontWeight } : TextProps
) {
  return (
    <Text className={`text-primary ${className}`} style={{ fontWeight: fontWeight }}>{children}</Text>
  )
}

export function AltText(
  { className, children, fontWeight } : TextProps
) {
  return (
    <Text className={`text-secondary ${className}`} style={{ fontWeight: fontWeight }}>{children}</Text>
  )
}