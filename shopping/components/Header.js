import React from 'react'
import {Text, View,Image} from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>shopping list</Text>
        </View>
    )
}

const styles =({
    header:{
        height:60,
        padding:15,
        backgroundColor:'darkslateblue'
    },
    text:{
        color:'#fff',
        fontSize:23,
        textAlign:'center'
    }
})

export default Header
