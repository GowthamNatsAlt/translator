import { View, Text, TextInput, Modal, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo'

import { LangContext } from '@/utils/Provider'
import { LangContextType, LangType } from '@/utils/Types'
import { language_codes } from '@/utils/constants'
import { Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native'

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

  function TextInputArea(
    { selector, placeholder_text }: {
      selector: keyof LangType,
      placeholder_text?: string
    }
  ) {
    return (
      <TextInput 
        multiline={true}
        className=''
        placeholder={placeholder_text}
        value={translator[selector]}
        onChangeText={
          (text) => handleChange(
            selector, 
            text
          )
        }
      />
    )
  }

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
          className='w-full flex-row justify-between'
        >
          <Text>{selected}</Text>
          <EntypoIcon 
            name='chevron-with-circle-down'
            size={20}
            color={'black'}
          />
        </Pressable>

        <Modal
          animationType='fade'
          visible={focussed}
          onRequestClose={() => setFocussed(false)}
          onDismiss={() => setFocussed(false)}
          presentationStyle='overFullScreen'
          className='flex-col gap-4'
        >
          <View className='flex-0 border-b-black border-b-2'>
            <TextInput 
              placeholder='Search for a language'
              className='p-4'
              value={filterText}
              onChangeText={(text) => setFilterText(text)}
            />
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

  return (
    <View className='flex-col w-full p-10'>
      {/* Current Language */}
      <View className='w-full'>
        <TextInputArea 
          selector='input_text'
          placeholder_text='Enter input text'
        />
        <LanguagePicker 
          selector='input_lang'
        />
      </View>

      {/* Output language */}
      <View className='w-full'>
        <TextInputArea 
          selector='output_text'
          placeholder_text='Enter output text'
        />
        <LanguagePicker 
          selector='output_lang'
        />
      </View>
    </View>
  )
}