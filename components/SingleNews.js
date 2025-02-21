import { Dimensions, StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity, Linking } from 'react-native'
import React,{useContext} from 'react'
import { NewsContext } from '../API/Context';

const SingleNews = ({item,index}) => {
  const windowWidth=Dimensions.get("window").width
  const windowHeight=Dimensions.get("window").height
  const {darkTheme}=useContext(NewsContext);
  return (
    <View style={{
      height:windowHeight,
      width:windowWidth,
      backgroundColor:'black'
    }}>
      <Text style={{...styles.title,backgroundColor:darkTheme?'black':'white',color:darkTheme?'white':'black'}}>{item.title}</Text>
      <Image 
      source={{uri:item.urlToImage}}
      style={{ height:'45%',resizeMode:'cover',width:windowWidth,borderRadius:10,marginTop:10}}
       />
       <Text style={{...styles.content,backgroundColor:darkTheme?'black':'white',color:darkTheme?'white':'black'}}>{item.description}</Text>
       <Text style={{backgroundColor:darkTheme?'black':'white',color:darkTheme?'white':'black'}}>
        Source- <Text>{item.author ?? "unknown"} </Text>
       </Text>
       <ImageBackground
       blurRadius={30}
       style={styles.footer}
       source={{uri:item.urlToImage}}
       > 
        <TouchableOpacity onPress={()=>Linking.openURL(item.url)}>
          <Text style={{fontSize:15,color:darkTheme?'white':'black'}}>
          '{item?.content?.slice(0,145)}...'
          </Text>
          <Text style={{fontSize:17,fontWeight:'bold',color:darkTheme?'white':'black'}}>
            Read More
          </Text>
        </TouchableOpacity>
       </ImageBackground>
    </View>
  )
}

export default SingleNews

const styles = StyleSheet.create({
  title:{ 
    fontSize:20,
    fontWeight:'bold',
    paddingBottom:10,
    marginTop:10
  },
  content:{
    fontSize:18,
    paddingBottom:10,
    // marginTop:10
  },
  footer:{
    marginTop:30,
  }
})