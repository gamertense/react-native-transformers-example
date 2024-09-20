import { pipeline, TranslationSingle } from '@fugood/transformers'
import React, { useCallback, useState } from 'react'
import Button from '../form/Button'
import TextField from '../form/TextField'

export const title = 'Translation'

interface TranslationProps {
  setIsLoading: (isLoading: boolean) => void
}

export function Translation({ setIsLoading }: TranslationProps) {
  const [input, setInput] = useState<string>('Bonjour, comment vas-tu ?')
  const [output, setOutput] = useState<string>('')

  const call = useCallback(async () => {
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
      setOutput(translatedText)
    } catch (error) {
      console.error('Failed to translate', error)
    } finally {
      setIsLoading(false)
    }
  }, [input])

  return (
    <>
      <TextField title="Input" value={input} onChange={setInput} multiline />
      <TextField title="Output" value={output} editable={false} multiline />
      <Button title="Generate" onPress={call} />
    </>
  )
}
