import Button from '@/components/form/Button'
import TextField from '@/components/form/TextField'
import { usePhoto } from '@/hooks/photo'
import TesseractOcr from '@devinikhiya/react-native-tesseractocr'
import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'

enum TesseractLanguages {
  French = 'fra',
  SimplifiedChinese = 'chi_sim',
}

interface ImageToTextProps {}

export function ImageToText({}: ImageToTextProps) {
  const [image, setImage] = useState<string | null>(null)
  const [output, setOutput] = useState<string>('')
  const [isWIP, setWIP] = useState<boolean>(false)

  const { selectPhoto, takePhoto } = usePhoto(async imageUri => {
    if (!imageUri) return

    setImage(imageUri)
    try {
      const recognizedText = await TesseractOcr.recognize(
        imageUri,
        TesseractLanguages.French,
        {},
      )
      console.log('🚀 ~ ImageToText ~ result:', recognizedText)
      setOutput(recognizedText)
    } catch (error) {
      console.error('Failed to convert image to text', error)
    }
  })

  return (
    <View className="bg-pink-400">
      <Button
        title="Take Photo & Inference"
        onPress={takePhoto}
        disabled={isWIP}
      />
      <Button
        title="Select Photo & Inference"
        onPress={selectPhoto}
        disabled={isWIP}
      />
      {!isWIP && image && (
        <Image style={styles.image} source={{ uri: image }} />
      )}
      <TextField title="Output" value={output} editable={false} multiline />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
})
