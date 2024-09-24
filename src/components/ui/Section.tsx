import { useColor } from '@/utils/style'
import { styled } from 'nativewind'
import type { PropsWithChildren } from 'react'
import React from 'react'
import { Text, View } from 'react-native'

type SectionProps = PropsWithChildren<{
  title: string
}>

function Section({ children, title }: SectionProps): JSX.Element {
  const color = useColor('foreground')
  const textColor = { color }

  return (
    <View className="my-2 px-6">
      <Text className="text-2xl font-semibold" style={textColor}>
        {title}
      </Text>
      <View className="mt-2 text-lg font-normal">{children}</View>
    </View>
  )
}

export default styled(Section)
