import Section from '@/components/form/Section'
import LoadingOverlay from '@/components/LoadingOverlay'
import { Summarization } from '@/components/models/Summarization'
import { useColor } from '@/utils/style'
import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundColor = useColor('background')
  const color = useColor('foreground')
  const textColor = { color }

  const [download, setDownload] = useState<object>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const backgroundStyle = { backgroundColor }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />

      <LoadingOverlay />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <Text style={[styles.title, textColor]}>Transformers.js</Text>
          <Section title="Interact">
            {/* <Translation /> */}
            {/* <ImageToText /> */}
            <Summarization setIsLoading={setIsLoading} />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 80,
  },
})

export default App
