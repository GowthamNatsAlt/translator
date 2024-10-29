import { View, Text } from 'react-native'
import React from 'react'
import { useGlobalSearchParams } from 'expo-router';
import Wrapper from '@/components/Wrapper';
import TextTranslate from '@/components/TextTranslate';

type ModeType = {
  mode: string
}

export default function Mode() {
  const glob = useGlobalSearchParams() as ModeType;

  const handleSwitcher = () => {
    switch (glob.mode) {
      case "camera":
        return (
          <></>
        )

      case "audio":
        return (
          <></>
        )

      default:
        return (
          <TextTranslate />
        )
    }
  }

  return (
    <Wrapper>
      {handleSwitcher()}
    </Wrapper>
  )
}