import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Yourdrawerscreen from './src/drawer/Yourdrawerscreen'

const App = () => {
  return (
    <View style={styles.container}>
      
     <Yourdrawerscreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})