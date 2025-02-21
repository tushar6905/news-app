import { SafeAreaView, StyleSheet, Text, View,StatusBar } from 'react-native';
import InshortTab from './components/InshortTab';
import Context, { NewsContext } from './API/Context';
import { useContext } from 'react';

function App() {
  const {darkTheme} =useContext(NewsContext)
  return (
    <SafeAreaView style={{...styles.container,backgroundColor:darkTheme ? '#282c35':"white"}}>
      <StatusBar style="auto" />
      <InshortTab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
  },
});

export default () => {
  return (
  <Context>
    <App />
  </Context>
  )
};