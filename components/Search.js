import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../API/Context'
import { Entypo } from '@expo/vector-icons'
import SingleNews from './SingleNews'

const Search = () => {
    const {
      news: { articles },
      darkTheme
    }=useContext(NewsContext)
    const [searchResult, setSearchResult] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [currentNews,setCurrentNews]=useState()
    const handleSearch=(text)=>{
      if(!text){
        setSearchResult([])
        return ;
      }
      setSearchResult(articles.filter((query) => query.title.includes(text)));
    }
    const handleModal=(n)=>{
      setModalVisible(true);
      setCurrentNews(n)

    }

  return (
    <View style={{width:'100%',position:'relative'}}>
      <TextInput style={{...styles.search,backgroundColor:darkTheme?'black':'lightgrey',color:darkTheme?'white':'black',borderWidth:darkTheme?'':'2'}}
      onChangeText={(text)=>handleSearch(text)}
      placeholder='Search for NEWS'
      placeholderTextColor={darkTheme?'white':'black'}
      />
      <View style={styles.searchResults}>
        {
          searchResult.slice(0,10).map((n)=>(
            <TouchableOpacity 
            key={n.title}
            activeOpacity={0.7}
            onPress={()=>handleModal(n)}
            >
              <Text style={{...styles.singleResult,backgroundColor:darkTheme?'black':'white',color:darkTheme?'white':'black',borderWidth:darkTheme?'':'2'}}>
                {n.title}
              </Text>

            </TouchableOpacity>
          ))
        }

      </View>
      <Modal animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={()=>{
        setModalVisible(!modalVisible)
      }}
      >
         <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            position: "absolute",
            zIndex: 2,
            right: 0,
            margin: 20,
            marginTop:50
          }}
        >
          <Entypo name="circle-with-cross"  size={30} color={darkTheme?'white':'black'} />
        </TouchableOpacity>
        <View style={{ height: "100%",marginTop:110 }}>
          <SingleNews item={currentNews} />
        </View>

      </Modal>

    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  search:{
    paddingVertical:10,
    paddingHorizontal:15,
    borderRadius:10,
    fontSize:15,
    marginBottom:15,
    height:55
  },
  searchResults:{
    position:'absolute',
    zIndex:1,
    top:50
  },
  singleResult:{
    borderRadius:5,
    padding:10,
    margin:0.5,
    shadowColor:'black',
    elevation:5
  }
})