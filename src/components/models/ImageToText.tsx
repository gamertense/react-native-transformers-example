import { usePhoto } from '@/hooks/photo'
import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import Button from '../form/Button'
import TextField from '../form/TextField'

interface ImageToTextProps {}

export function ImageToText({}: ImageToTextProps) {
  const [image, setImage] = useState<string | null>(null)
  const [output, setOutput] = useState<string>('')
  const [isWIP, setWIP] = useState<boolean>(false)

  const { selectPhoto, takePhoto } = usePhoto(async imageUri => {
    try {
      setImage(imageUri)
      console.log('🚀 ~ ImageToText ~ output:', output)
      // setOutput(text)
    } catch (error) {
      console.error('Failed to convert image to text', error)
    }
  })

  return (
    <>
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
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
})
