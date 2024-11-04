import { View, Text, TextInput, Modal, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import OctIcon from 'react-native-vector-icons/Octicons'

import { LangContext } from '@/utils/Provider'
import { LangContextType, LangType } from '@/utils/Types'
import { language_codes } from '@/utils/constants'
import { Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { BaseText } from '@/utils/Typography'

export default function TextTranslate() {

  const { translator, setTranslator } = useContext(LangContext) as LangContextType

  function handleChange(
    selector: keyof LangType, 
    value: string
  ) {
    setTranslator((prev) => ({
      ...prev,
      [selector]: value
    }))
  }

  // function TextInputArea(
  //   { selector, placeholder_text }: {
  //     selector: keyof LangType,
  //     placeholder_text?: string
  //   }
  // ) {
  //   return (
  //     <View className='h-[150px]'>
  //       <TextInput 
  //         multiline={true}
  //         className='text-primary placeholder:text-secondary p-4'
  //         placeholder={placeholder_text}
  //         value={translator[selector]}
  //         onChangeText={
  //           (text) => handleChange(
  //             selector, 
  //             text
  //           )
  //         }
  //       />
  //     </View>
  //   )
  // }

  function LanguagePicker(
    { selector } : { selector: keyof LangType }
  ) {

    const [focussed, setFocussed] = useState<boolean>(false)
    const [filterText, setFilterText] = useState<string>("")
    const selected = language_codes.filter((item) => item.id === translator[selector])[0].name;

    return (
      <>
        <Pressable
          onPress={() => setFocussed(true)}
          className='bg-grey flex-1 flex-row justify-center px-2 py-2 rounded-full'
        >
          <BaseText className='text-sm' fontWeight='500'>{selected}</BaseText>
        </Pressable>

        <Modal
          animationType='fade'
          visible={focussed}
          onRequestClose={() => setFocussed(false)}
          onDismiss={() => setFocussed(false)}
          presentationStyle='overFullScreen'
          className='flex-col gap-4'
        >
          <View className='flex-0 flex-row justify-between items-center gap-0 border-y-black border-y-2'>
            <TextInput 
              placeholder='Search for a language'
              className='p-4 flex-1 border-r-2'
              value={filterText}
              onChangeText={(text) => setFilterText(text)}
            />
            <Pressable
              onPress={() => setFocussed(false)}
              className='bg-white py-4 px-6'
            >
              <EntypoIcon 
                name='cross'
                size={20}
                color={'black'}
              />
            </Pressable>
          </View>
          
          <View className='flex-1 flex-col gap-8 mt-2 p-4'>
            <View className='flex-0 flex-col gap-2'>
              <Text className='text-slate-400 font-semibold'>Selected</Text>
              <Text className='text-lg'>{selected}</Text>
            </View>

            <View className='flex-1 flex-col'>
              <Text className='text-slate-400 font-semibold'>Languages</Text>
              <ScrollView
                showsVerticalScrollIndicator={true}
              >
                {
                  language_codes
                  .filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()))
                  .map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      className='py-4 w-full'
                      onPress={() => {
                        setFilterText("")
                        setTranslator((prev) => ({ ...prev, [selector]: item.id }))
                        setFocussed(false)
                      }}
                    >
                      <Text className='text-lg'>{item.name}</Text>
                    </TouchableOpacity>
                  ))
                }
              </ScrollView>
            </View>
          </View>
        </Modal>
      </>
    )
  }

  function handleSwitch() {

  }

  return (
    <View className='bg-alt rounded-3xl flex-col w-full p-4'>
      <View className='flex-col'>

        <View className='flex-row items-center gap-2'>
          <LanguagePicker selector='input_lang' />

          <Pressable 
            onPress={handleSwitch}
            className='bg-hue px-4 py-3 rounded-full'
          >
            <OctIcon
              name='arrow-switch'
              size={20}
              color={'white'}
            />
          </Pressable>

          <LanguagePicker selector='output_lang' />
        </View>

        <View className='h-[150px]'>
          <TextInput 
            multiline={true}
            className='text-primary text-lg placeholder:text-secondary p-4 leading-loose'
            placeholder='Enter the text to be converted...'
            value={translator['input_text']}
            onChangeText={
              (text) => handleChange(
                'input_text', 
                text
              )
            }
          />
        </View>

        <View className='flex-row items-center justify-between'>
            <View className='flex-row justify-start items-center gap-4'>
              <Pressable
                className='p-3 bg-hue rounded-full'
              >
                <EntypoIcon name='cross' size={20} color={'white'} />
              </Pressable>
              <Pressable
                className='p-3 bg-hue rounded-full'
              >
                <EntypoIcon name='heart-outlined' size={20} color={'white'} />
              </Pressable>
            </View>

            <Pressable
              className='p-3 bg-hue rounded-full'
            >
              <EntypoIcon name='controller-play' size={20} color={'white'} />
            </Pressable>
        </View>
      </View>
    </View>
  )
}