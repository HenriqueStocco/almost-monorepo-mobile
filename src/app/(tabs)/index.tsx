import React from 'react'
import { View, Text } from 'react-native'

export default function TabOneScreen() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-xl font-bold'>Home</Text>
      <View className='mx-8 h-[1px] w-[80%]' />
    </View>
  )
}
