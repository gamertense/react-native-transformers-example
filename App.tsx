import { HomeScreen, SummarizeScreen, TranslateScreen } from '@/screens'
import { RootStackParamList } from '@/types/navigationTypes'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const RootStack = createStackNavigator<RootStackParamList>()

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Translate" component={TranslateScreen} />
        <RootStack.Screen name="Summarize" component={SummarizeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App
