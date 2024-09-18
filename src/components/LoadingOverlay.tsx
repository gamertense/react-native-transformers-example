import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const LoadingOverlay = () => {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(128, 128, 128, 0.8)', // Gray background with some transparency
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    zIndex: 1,
  },
})

export default LoadingOverlay
