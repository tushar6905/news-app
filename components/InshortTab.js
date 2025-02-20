import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React,{useState} from 'react'
import { SceneMap, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../Screen/DiscoverScreen';
import NewsScreen from '../Screen/NewsScreen';
import TopNavigation from './TopNavigation';

const InshortTab = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(1);
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