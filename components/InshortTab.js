import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React,{useContext, useState} from 'react'
import { SceneMap, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../Screen/DiscoverScreen';
import NewsScreen from '../Screen/NewsScreen';
import TopNavigation from './TopNavigation';
import { NewsContext } from '../API/Context';

const InshortTab = () => {
    const layout = useWindowDimensions();
    const {index,setIndex,darkTheme} =useContext(NewsContext)

    const [routes]= useState([
        {key:'first',title:'Discover'},
        {key:'second',title:'NEWS'}, 
    ]);
    const renderScene= SceneMap({
      first:DiscoverScreen,
      second:NewsScreen
    })
  return (
    <TabView
    navigationState={{ index, routes }}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{ width: layout.width }}
    renderTabBar={()=>  <TopNavigation
      index={index}
      setIndex={setIndex}
    /> }
  />
  )
}

export default InshortTab

const styles = StyleSheet.create({})