import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native';


const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND:0.011,
  RUBEL:0.93,
  AUSDOLLER:0.2,
  CANDOLLER:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.000004
}

const App = () => {


  const [inputValue,setInputValue] = useState(0)
  const [result,setResult] = useState(0)

  const buttonPress = (currency) => {
    if(!inputValue){
      Alert.alert("please enter a number")
    }

    let Result = parseFloat(inputValue)*currencyPerRupee[currency]
    setResult(Result.toFixed(3))
  }
 
  return(
      <>
        <ScrollView backgroundColor="#1b262c" keyboardShouldPersistTaps="handled" contentInsetAdjustmentBehavior="automatic">
          <SafeAreaView style={styles.container}>
            <View style={styles.resContainer}>
              <Text style={styles.resValue}>{result}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} keyboardType="numeric" placeholder="Enter Value" placeholderTextColor="#c1c1c1" value={inputValue} onChangeText={(inputValue) => setInputValue(inputValue)}></TextInput>
            </View>
            <View style={styles.convertButton}>
              {Object.keys(currencyPerRupee).map((currency) => (
                <TouchableOpacity key={currency} style={styles.button} onPress={() => buttonPress(currency)}>
                  <Text style={styles.temp}>
                    {currency}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </SafeAreaView>
        </ScrollView>
      </>
  )
}


export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1b262c"
  },
  resContainer:{
    height:70,
    marginTop:80,
    justifyContent:"center",
    borderColor:"#bbe1fa",
    borderWidth:2,
    alignItems:"center"
  },
  resValue:{
    fontSize:30,
    color:"#FFF"
  },
  inputContainer:{
    height:70,
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#bbe1fa"
  },
  input:{
    fontSize:30,
    textAlign:"center",
    color:"#FFFFFF"
  },
  convertButton:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:10
  },
  button:{
    alignItems:"center",
    justifyContent:"center",
    height:100,
    width:"33.3%",
    borderWidth:2,
    borderColor:"#bbe1fa",
    marginTop:10,
    backgroundColor:"#0f4c75"
  },
  temp:{
    color:"#FFF",
    fontSize:20,
  }
})