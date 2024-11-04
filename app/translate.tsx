import { Image, Pressable, View } from 'react-native'
import React from 'react'
import Wrapper from '@/components/Wrapper'
import TextTranslate from '@/components/TextTranslate'
import { AltText, BaseText } from '@/utils/Typography'

export default function translate() {
  return (
    <Wrapper>
      <View className='flex-row justify-between items-center pt-5'>
        <View className='flex-col gap-4'>
          <Pressable
            className='self-start p-3 bg-alt rounded-full w-fit'
          >
            <BaseText className='text-sm' fontWeight='500'>Trial Account</BaseText>
          </Pressable>
          <View className='flex-row gap-1 items-end'>
            <AltText className='text-3xl' fontWeight='400'>Welcome,</AltText>
            <BaseText className='text-2xl' fontWeight='400'>Adonis</BaseText>
          </View>
        </View>

        <Pressable
          className=''
        >
          <Image 
            source={require("../assets/icon.png")}
            alt='icon'
            className='h-16 w-16 rounded-full overflow-none object-contain'
          />
        </Pressable>
      </View>

      <TextTranslate />

      <View className='flex-row items-center justify-between gap-5'>
        <Pressable className='flex-1 p-4 bg-alt rounded-full'>
          <BaseText className='text-center' fontWeight='500'>Camera</BaseText>
        </Pressable>

        <Pressable className='flex-1 p-4 bg-alt rounded-full'>
          <BaseText className='text-center' fontWeight='500'>Voice</BaseText>
        </Pressable>
      </View>
    </Wrapper>
  )
}