import { ImageToText } from '@/components/ImageToText'
import LoadingOverlay from '@/components/LoadingOverlay'
import { useColor } from '@/utils/style'
import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native'

import { Button } from '@/components/ui'
import { Routes } from '@/types/navigationTypes'
import { NavigationProp } from '@react-navigation/native'

type HomeScreenProps = {
  navigation: NavigationProp<any>
}

function HomeScreen({ navigation }: HomeScreenProps) {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundColor = useColor('background')
  const backgroundStyle = { backgroundColor }

  const [isLoading, setIsLoading] = useState(false)
  const [textToTranslate, setTextToTranslate] = useState<string>('')

  const onPressTranslate = () => {
    navigation.navigate(Routes.Translate, {
      textToTranslate,
    })
  }

  return (
    <SafeAreaView style={backgroundStyle} className="p-4 flex-1">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />

      {isLoading && <LoadingOverlay />}

      <ScrollView>
        <ImageToText
          setIsLoading={setIsLoading}
          textToTranslate={textToTranslate}
          setTextToTranslate={setTextToTranslate}
        />
      </ScrollView>

      {textToTranslate && (
        <Button
          title="Translate"
          onPress={onPressTranslate}
          variant="primary"
          className="mt-4"
        />
      )}
    </SafeAreaView>
  )
}

export default HomeScreen
