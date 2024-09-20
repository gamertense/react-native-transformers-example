import { styled } from 'nativewind'
import React from 'react'
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native'

const variantStyles = {
  default: {
    background: 'bg-white',
    text: 'text-black',
  },
  primary: {
    background: 'bg-blue-500',
    text: 'text-white',
  },
}

const StyledPressable = styled(Pressable)

interface Props {
  title: string
  onPress?: () => void
  disabled?: boolean
  variant?: keyof typeof variantStyles
  style?: StyleProp<ViewStyle>
}

function Button({
  onPress,
  title,
  disabled,
  variant = 'default',
  style,
}: Props): JSX.Element {
  return (
    <StyledPressable
      disabled={disabled}
      onPress={onPress}
      className={`rounded-lg p-2 my-1 ${disabled ? 'bg-gray-300' : ''} 
      ${variantStyles[variant].background} active:bg-slate-500 `}
      style={style}>
      <Text
        className={`text-lg font-bold ${variantStyles[variant].text} text-center`}>
        {title}
      </Text>
    </StyledPressable>
  )
}

export default styled(Button)
