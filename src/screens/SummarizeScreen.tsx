import LoadingOverlay from '@/components/LoadingOverlay'
import { useColor } from '@/utils/style'
import React, { useState } from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { Summarization } from '@/components/Summarization'
import { RootStackParamList } from '@/types/navigationTypes'
import { StackScreenProps } from '@react-navigation/stack'

type SummarizeScreenProps = StackScreenProps<RootStackParamList, 'Summarize'>

function SummarizeScreen({ route }: SummarizeScreenProps) {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundColor = useColor('background')
  const backgroundStyle = { backgroundColor }

  const { textToSummarize = '' } = route.params

  const [isLoading, setIsLoading] = useState(false)

  return (
    <SafeAreaView style={backgroundStyle} className="p-4 flex-1">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />

      {isLoading && <LoadingOverlay />}

      <Summarization
        setIsLoading={setIsLoading}
        textToSummarize={textToSummarize}
      />
    </SafeAreaView>
  )
}

export default SummarizeScreen
