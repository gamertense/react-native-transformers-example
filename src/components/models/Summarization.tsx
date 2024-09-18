import { pipeline } from '@xenova/transformers'
import React, { useState } from 'react'
import Button from '../form/Button'
import TextField from '../form/TextField'

interface SummarizationResult {
  summary_text: string
}

interface SummarizationProps {}

const sampleText = `The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.`

export function Summarization({}: SummarizationProps) {
  const [input, setInput] = useState<string>(sampleText)
  const [output, setOutput] = useState<string>('')
  const [isWIP, setWIP] = useState<boolean>(false)

  const summarize = async () => {
    try {
      const summarizer = await pipeline('summarization')
      const outputList: SummarizationResult[] = await summarizer(input)
      console.log('🚀 ~ summarize', outputList)

      if (outputList.length < 0) {
        return
      }

      setOutput(outputList[0]?.summary_text)
    } catch (error) {
      console.error('Failed to summarize', error)
    }
  }

  return (
    <>
      <TextField title="Input" value={input} onChange={setInput} multiline />
      <TextField title="Output" value={output} editable={false} multiline />
      <Button title="Generate" onPress={summarize} disabled={isWIP} />
    </>
  )
}
