import { Button, TextField } from '@/components/ui'
import { usePhoto } from '@/hooks/photo'
import TesseractOcr from '@devinikhiya/react-native-tesseractocr'
import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'

enum TesseractLanguages {
  French = 'fra',
  SimplifiedChinese = 'chi_sim',
}

interface ImageToTextProps {
  setIsLoading: (isLoading: boolean) => void
  textToTranslate: string
  setTextToTranslate: (text: string) => void
}

export function ImageToText({
  setIsLoading,
  textToTranslate,
  setTextToTranslate,
}: ImageToTextProps) {
  const [image, setImage] = useState<string | null>(null)

  const { selectPhoto, takePhoto } = usePhoto(async imageUri => {
    if (!imageUri) return

    setImage(imageUri)
    setIsLoading(true)
    try {
      const recognizedText = await TesseractOcr.recognize(
        imageUri,
        TesseractLanguages.French,
        {},
      )
      console.log('🚀 ~ ImageToText ~ result:', recognizedText)

      setTextToTranslate(recognizedText)
    } catch (error) {
      console.error('Failed to convert image to text', error)
    } finally {
      setIsLoading(false)
    }
  })

  return (
    <>
      <Button title="Take Photo & Extract" onPress={takePhoto} />
      <Button title="Select Photo & Extract" onPress={selectPhoto} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
      <TextField
        title="Output"
        value={textToTranslate}
        editable={false}
        multiline
      />
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
})
