import { HomeScreen, SummarizeScreen, TranslateScreen } from '@/screens'
import { RootStackParamList, Routes } from '@/types/navigationTypes'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const RootStack = createStackNavigator<RootStackParamList>()

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={Routes.Home} component={HomeScreen} />
        <RootStack.Screen name={Routes.Translate} component={TranslateScreen} />
        <RootStack.Screen name={Routes.Summarize} component={SummarizeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App
