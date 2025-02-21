import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { NewsContext } from '../API/Context'

const TopNavigation = ({index,setIndex}) => {
    const {fetchNews,darkTheme,setDarkTheme}=useContext(NewsContext)
  return (
    <View style={{...styles.container,backgroundColor:darkTheme ? '#282c35':"white"}}>
        {
            index === 0 ?
            (
            <TouchableOpacity style={styles.left}> 
                <Text style={{...styles.text,color:'lightgrey'}}>
                <MaterialCommunityIcons name="theme-light-dark" size={24} color="#007fff"  onPress={()=>setDarkTheme(!darkTheme)}/>

                </Text>
                </ TouchableOpacity>) : (
                    <TouchableOpacity style={styles.left} onPress={()=>setIndex(index ===0 ? 1:0) }> 
                        <SimpleLineIcons name='arrow-left' size={24} color='#007fff' />
                        <Text style={{...styles.text,color:darkTheme?'lightgrey':'black'}}>Discover</Text>
                    </TouchableOpacity>
                )
        }
        <Text style={{...styles.center,color:darkTheme?'white':'black'}}>
            {index ? "All NEWS" : "Discover"}
        </Text>
        {
            index ? (
                <TouchableOpacity style={styles.right} 
                onPress={()=> fetchNews('general')}
                >
                    <Text style={styles.test}>
                        <AntDesign name='reload1' size={24} color='#007fff' />
                    </Text>
                </TouchableOpacity>
            ):(
                <TouchableOpacity style={styles.left} 
                onPress={()=>setIndex(index ===0 ? 1:0) }>
                    <Text style={{...styles.text,color:darkTheme?'white':'black'}}>All NEWS</Text>
                    <SimpleLineIcons name='arrow-right' size={24} color='#007fff' />
                </TouchableOpacity>
            )
        }

    </View>
  )
}

export default TopNavigation

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        alignItems:'center',
        borderBottomColor:'black',
        borderBottomWidth:0.5,
    },
    left:{
        flexDirection:'row',
        alignItems:'center',
        width:80,
        justifyContent:'space-between'
    },
    text:{
        fontSize:16,
    },
    right:{
        width:80,
        alignItems:'flex-end'
    },
    center:{
        paddingBottom:6,
        borderBottomColor:'#007fff',
        borderBottomWidth:5,
        borderRadius:10,
        fontSize:16,
        fontWeight:700
    }
})