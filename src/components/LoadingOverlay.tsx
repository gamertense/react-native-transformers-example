import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const LoadingOverlay = () => {
  return (
    <View
      style={styles.overlay}
      className="bg-gray-800 opacity-50 justify-center items-center z-50">
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default LoadingOverlay
