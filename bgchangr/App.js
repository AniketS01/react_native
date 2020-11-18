import React, {useState} from 'react'
import {Text, StyleSheet, View, TouchableOpacity, StatusBar} from 'react-native'


const App = () => {
  const [randomColor, setRandomColor ] = useState()
  const changeBackground = () => {
    let color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    setRandomColor(color)
  }
  const reset = () => {
    setRandomColor('black')
  }
  return(
    <>
    <StatusBar backgroundColor={randomColor}/>
      <View style = {[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBackground}>
          <Text style={styles.text}>Tap here</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset}>
          <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginBottom:30,
    color: "#FFFFFF",
    borderRadius: 15,
    textTransform: "uppercase"
  }
})