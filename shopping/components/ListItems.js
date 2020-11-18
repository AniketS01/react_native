import React from 'react'
import {Text, View,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.text}>{item.text}</Text>
                <Icon name="remove" size={20} color="firebrick" onPress={() => deleteItem(item.id)}/>
            </View>
        </TouchableOpacity>
    )
}

const styles =({
    listItem:{
        padding:15,
        backgroundColor: '#f8f8f8f',
        borderBottomWidth:1,
        borderColor:'#eee'
    },
    listItemView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItem:'center'
    },
    text:{
        fontSize:18
    }
})

export default ListItem
