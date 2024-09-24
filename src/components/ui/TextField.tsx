import { useColor } from '@/utils/style'
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
    <View className="my-2">
      {title && (
        <Text className="text-lg font-bold mb-2" style={textColor}>
          {title}
        </Text>
      )}
      <TextInput
        className={`border border-gray-300 p-3 rounded-lg bg-white shadow-sm ${
          multiline ? 'text-top' : ''
        }`}
        style={textColor}
        onChangeText={onChange}
        value={value ?? ''}
        placeholder={placeholder}
        editable={editable}
        multiline={multiline}
        placeholderTextColor={color}
      />
    </View>
  )
}
