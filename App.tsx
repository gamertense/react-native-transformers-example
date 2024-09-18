/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Section from '@/components/form/Section'
import Models from '@/components/models'
import { ImageToText } from '@/components/models/ImageToText'
import Progress from '@/components/Progress'
import { useColor } from '@/utils/style'
import React, { useCallback, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

const tasks = Object.keys(Models)

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundColor = useColor('background')
  const color = useColor('foreground')
  const textColor = { color }

  const [download, setDownload] = useState<object>({})
  const [isLoading, setLoading] = useState<boolean>(false)

  const backgroundStyle = { backgroundColor }

  const onProgress = useCallback((event: any) => {
    if (event?.file) {
      const { file, status, progress } = event
      setLoading(true)
      setDownload(prev => ({
        ...prev,
        [file]: { status, progress },
      }))
    }
    if (event?.status === 'ready') {
      setLoading(false)
    }
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <Text style={[styles.title, textColor]}>Transformers.js</Text>
          <Section title="Interact">
            {/* <Translation /> */}
            <ImageToText />
            {/* <Summarization /> */}
          </Section>
          {isLoading && (
            <Section title="Progress">
              {Object.entries(download).map(([key, { progress, status }]) => (
                <Progress
                  key={key}
                  title={key}
                  value={progress}
                  status={status}
                />
              ))}
            </Section>
          )}
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
