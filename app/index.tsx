import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import Wrapper from '@/components/Wrapper'

export default function Index() {
  return (
    <Wrapper>
      <Pressable
        onPress={() => router.push("/translate")}
      >
        <Text className='text-4xl'>Start translating</Text>
      </Pressable>
    </Wrapper>
  )
}