import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Wrapper from '@/components/Wrapper'
import { router } from 'expo-router'

export default function translate() {
  return (
    <Wrapper>
      <Pressable
        onPress={() => router.push("/camera")}
      >
        <Text className='text-4xl'>Camera</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/audio")}
      >
        <Text className='text-4xl'>Audio</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/text")}
      >
        <Text className='text-4xl'>Text</Text>
      </Pressable>
    </Wrapper>
  )
}