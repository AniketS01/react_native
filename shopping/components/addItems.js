import React,{useState} from 'react'
import {Text, View,Alert,TextInput,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const AddItems = ({addItem}) => {
    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue)

    return (
        <View>
            <TextInput  title="Reset" onChangeText={onChange} placeholder="add Item ..." style={styles.input} />
            <TouchableOpacity style={styles.btn} onPress={() =>{
                 if(text){ addItem(text)}
                 else Alert.alert('Error', 'Please enter a item something')
                }}>
                <Text style={styles.btnText}><Icon name="plus" size={20} />Add Item</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles =({
   input:{
       height:60,
       padding:8,
       fontSize:20,
   },
   btn:{
       backgroundColor:"#c2bad8",
       padding:9,
       margin:5,
   },
   btnText:{
       color:'darkslateblue',
       fontSize:20,
       textAlign:'center'
   }
})

export default AddItems
