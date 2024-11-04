import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import Wrapper from '@/components/Wrapper'
import { BaseText } from '@/utils/Typography'

export default function Index() {
  return (
    <Wrapper>
      <Pressable
        onPress={() => router.push("/translate")}
      >
        <BaseText className='text-4xl' fontWeight='400'>Start translating</BaseText>
      </Pressable>
    </Wrapper>
  )
}