import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from 'react-native';
import Componente from "./components/Componente";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.headerSection}>
          <Componente />
          </View>

          <View style={styles.middleSection}>
          <Greeting nome="Taiga" />
          <Greeting nome="Taiga" />
          <Greeting nome="Taiga" />
          </View>
          



          <View style={styles.bottomSection}>
          <Counter />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    safeArea:{
      flex: 1,
      backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: '20',
        backgroundColor: '#c6cfff'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    headerSection:{
      width: '100%'
    },
    middleSection:{
      alignItems: 'center'
    },
    bottomSection:{
      alignItems: 'center'
    },
    inputTexto:{
      alignItems: 'center'
    }


})