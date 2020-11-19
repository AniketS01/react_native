import React from 'react'
import {Text,View,ScrollView,Image,StyleSheet,TouchableOpacity,StatusBar} from 'react-native'
import Sound from 'react-native-sound'

const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
]

const App = () => {

  const playSound = (sound) => {
    const soundvar = new Sound(sound, Sound.MAIN_BUNDLE, (err)=>{
      if(err){
        console.log("not able to play sound")
      }
    })
    setTimeout(() => {
      soundvar.play()
    }, 500);
    soundvar.release()
  }

  return(
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#1b262c"/>
      <View style={styles.gridContainer}>
        {soundList.map(sound => (
          <TouchableOpacity key={sound} onPress={() => {playSound(sound)}} style={styles.box}>
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

export default App 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#1b262c",
  },
  logo:{
    alignSelf:"center",
    height:50,
    width:50
  },
  gridContainer:{
    flex:1,
    margin:5,
    marginTop:50,
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"flex-start",
    justifyContent:"space-around"
  },
  box:{
    height:110,
    alignItems:"center",
    justifyContent:"center",
    width:"46%",
    marginVertical:6,
    backgroundColor:"#0f4c75",
    borderRadius:10,
    shadowColor:"#393e46",
    elevation:10
  },
  text:{
    fontSize:50,
    color:"#ff4301",
  }
})