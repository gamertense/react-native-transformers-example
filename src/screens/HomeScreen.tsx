import Button from '@/components/form/Button'
import { ImageToText } from '@/components/ImageToText'
import LoadingOverlay from '@/components/LoadingOverlay'
import { useColor } from '@/utils/style'
import React, { useState } from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

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
    navigation.navigate('Translate', {
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

      <ImageToText
        setIsLoading={setIsLoading}
        textToTranslate={textToTranslate}
        setTextToTranslate={setTextToTranslate}
      />

      {textToTranslate && (
        <Button title="Translate" onPress={onPressTranslate} />
      )}
    </SafeAreaView>
  )
}

export default HomeScreen
