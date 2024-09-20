import LoadingOverlay from '@/components/LoadingOverlay'
import { Summarization } from '@/components/models/Summarization'
import { useColor } from '@/utils/style'
import React, { useState } from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundColor = useColor('background')
  const backgroundStyle = { backgroundColor }

  const [isLoading, setIsLoading] = useState(false)

  return (
    <SafeAreaView style={backgroundStyle} className="p-4 flex-1">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />

      {isLoading && <LoadingOverlay />}
      <Summarization setIsLoading={setIsLoading} />
    </SafeAreaView>
  )
}

export default HomeScreen
