import React,{useState} from 'react'
import {Text,View,Image,TouchableOpacity,StyleSheet,StatusBar} from 'react-native'
import dice1 from './diceassets/dice1.png' 
import dice2 from './diceassets/dice2.png'
import dice3 from './diceassets/dice3.png'
import dice4 from './diceassets/dice4.png'
import dice5 from './diceassets/dice5.png'
import dice6 from './diceassets/dice6.png'

const App = () => {
  const [uri,setUri] = useState(dice1)
  const play = () => {
    let randomNo = Math.floor(Math.random()*6)+1
    switch (randomNo) {
      case 1:
        setUri(dice1)
        break;
      case 2:
        setUri(dice2)
        break;
      case 3:
        setUri(dice3)
        break;
      case 4:
        setUri(dice4)
        break;
      case 5:
        setUri(dice5)
        break;
      case 6:
        setUri(dice6)
        break;
    
      default:
        break;
    }
  }
  return(
    <>
    <StatusBar backgroundColor="#222831"/>
    <View style={styles.container}>
      <Image source={uri} style={styles.img}/>
      <TouchableOpacity onPress={play}>
        <Text style={styles.text}>Click me</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#222831",
    alignItems:"center",
    justifyContent:"center"
  },
  img:{
    width:200,
    height:200,
  },
  text:{
    fontSize:20,
    marginTop:30,
    color:"#F2A365",
    paddingHorizontal:40,
    paddingVertical:10,
    borderColor:"#30475E",
    borderRadius:5,
    borderWidth:3,
    backgroundColor:"green",
    fontWeight:"bold"
  }
})


export default App