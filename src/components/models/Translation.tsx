import { pipeline } from '@xenova/transformers'
import React, { useCallback, useState } from 'react'
import Button from '../form/Button'
import TextField from '../form/TextField'

export const title = 'Translation'

interface TranslationProps {}

export function Translation({}: TranslationProps) {
  const [input, setInput] = useState<string>('Hello, how are you?')
  const [output, setOutput] = useState<string>('')
  const [isWIP, setWIP] = useState<boolean>(false)

  const call = useCallback(async () => {
    setWIP(true)
    try {
      const translator = await pipeline('translation_en_to_fr')
      const outputList = await translator(input)
      console.log('🚀 ~ call ~ output:', outputList)

      if (outputList.length < 0) {
        return
      }

      setOutput(outputList[0]?.translation_text)
    } catch (error) {
      console.error('Failed to translate', error)
    }
    setWIP(false)
  }, [input])

  return (
    <>
      <TextField title="Input" value={input} onChange={setInput} multiline />
      <TextField title="Output" value={output} editable={false} multiline />
      <Button title="Generate" onPress={call} disabled={isWIP} />
    </>
  )
}
