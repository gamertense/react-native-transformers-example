import { ImageToText } from '@/components/models/ImageToText'
import { useColor } from '@/utils/style'
import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundColor = useColor('background')
  const color = useColor('foreground')
  const textColor = { color }

  const backgroundStyle = { backgroundColor }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />

      <ImageToText />
    </SafeAreaView>
  )
}

export default HomeScreen
