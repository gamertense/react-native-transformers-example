import Button from '@/components/form/Button'
import TextField from '@/components/form/TextField'
import LoadingOverlay from '@/components/LoadingOverlay'
import { useColor } from '@/utils/style'
import { pipeline, TranslationSingle } from '@fugood/transformers'
import React, { useCallback, useState } from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { RootStackParamList } from '@/types/navigationTypes'
import { StackScreenProps } from '@react-navigation/stack'

type TranslateScreenProps = StackScreenProps<RootStackParamList, 'Translate'>

function TranslateScreen({ route, navigation }: TranslateScreenProps) {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundColor = useColor('background')
  const backgroundStyle = { backgroundColor }

  const { textToTranslate } = route.params

  const [input, setInput] = useState<string>(
    textToTranslate || 'Bonjour, comment vas-tu ?',
  )
  const [translatedText, setTranslatedText] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const translate = useCallback(async () => {
    setIsLoading(true)
    try {
      const translator = await pipeline('translation', 'Xenova/opus-mt-fr-en')
      const outputList = await translator(input)
      console.log('🚀 ~ call ~ output:', outputList)

      if (outputList.length < 0) {
        return
      }

      const translatedText = (outputList[0] as TranslationSingle)
        ?.translation_text
      setTranslatedText(translatedText)
    } catch (error) {
      console.error('Failed to translate', error)
    } finally {
      setIsLoading(false)
    }
  }, [input])

  const onPressSummarize = () => {
    navigation.navigate('Summarize', {
      textToSummarize: translatedText,
    })
  }

  return (
    <SafeAreaView style={backgroundStyle} className="p-4 flex-1">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />

      {isLoading && <LoadingOverlay />}

      <TextField title="Input" value={input} onChange={setInput} multiline />
      <TextField
        title="Output"
        value={translatedText}
        editable={false}
        multiline
      />
      <Button title="Translate" onPress={translate} />

      {translatedText.trim() !== '' && (
        <Button title="Summarize" onPress={onPressSummarize} />
      )}
    </SafeAreaView>
  )
}

export default TranslateScreen
