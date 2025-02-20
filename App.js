import { SafeAreaView, StyleSheet, Text, View,StatusBar } from 'react-native';
import InshortTab from './components/InshortTab';
import Context from './API/Context';

function App() {
  return (
    <SafeAreaView style={{...styles.container,backgroundColor:'#282c35'}}>
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