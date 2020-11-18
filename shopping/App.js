import React, {useState} from 'react'
import {Text, View,FlatList} from 'react-native'
import uuid from 'react-native-uuid'
import Header from './components/Header'
import ListItem from './components/ListItems.js'
import AddItems from './components/addItems'


const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      text: 'Milk',
    },
    {
      id: uuid(),
      text: 'Eggs',
    },
    {
      id: uuid(),
      text: 'Bread',
    },
    {
      id: uuid(),
      text: 'Juice',
    },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    setItems(prevItems => {
      return [{id:uuid.v1(),text}, ...prevItems]
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <AddItems addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}/>
    </View>
  )
}

const styles = ({
  container:{
    flex:1,
  }
})

export default App
