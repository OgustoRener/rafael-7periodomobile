import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomModal from './src/components/CustomModal';
import ListaScroll from './src/components/ScrollView';
import ListaFlat from './src/components/FlatList';
import ListaSection from './src/components/SectionList';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao aplicativo. Utilize o menu
        de navegação para acessar as telas de modais e as listas com rolagem</Text>
    </View>
  );
}
function ScrollScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headersShown: false,
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' }
      }}
    >
      <Tab.Screen name="ScrollView">
        {() => <ListaScroll/>}
      </Tab.Screen>

      <Tab.Screen name="FlatList">
        {() => <ListaFlat/>}
      </Tab.Screen>

      <Tab.Screen name="SectionList">
        {() => <ListaSection />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
function ModalScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headersShown: false,
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' }
      }}
    >
      <Tab.Screen name="Slide">
        {() => <CustomModal animation="slide" themeColor="#2196F3" />}
      </Tab.Screen>
      
      <Tab.Screen name="Fade">
        {() => <CustomModal animation="fade" themeColor="#4CAF50" />}
      </Tab.Screen>

      <Tab.Screen name="None">
        {() => <CustomModal animation="none" themeColor="#FF9800" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Scroll" component={ScrollScreen} />
        <Drawer.Screen name="Modal" component={ModalScreen} />

      </Drawer.Navigator>
    </NavigationContainer>


  );
}
