import { useColor } from '@/utils/style'
import React from 'react'
import { Text, TextInput, View } from 'react-native'

interface Props {
  title?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  editable?: boolean
  multiline?: boolean
}

export default function TextField(props: Props): JSX.Element {
  const { title, onChange, placeholder, value, editable, multiline } = props

  const color = useColor('foreground')
  const textColor = { color }

  return (
    <View className="my-1">
      {title && (
        <Text className="text-lg font-bold mb-1" style={textColor}>
          {title}
        </Text>
      )}
      <TextInput
        className={`border border-gray-400 p-2 rounded ${
          multiline ? 'text-top' : ''
        }`}
        style={textColor}
        onChangeText={onChange}
        value={value ?? ''}
        placeholder={placeholder}
        editable={editable}
        multiline={multiline}
      />
    </View>
  )
}
