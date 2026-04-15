import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomModal from '../src/components/CustomModal';
import ListaScroll from '../src/components/ScrollView';
import ListaFlat from '../src/components/FlatList';
import ListaSection from '../src/components/SectionList';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import FormScreen from './FormScreen';
import ListScreen from './ListScreen';
import WelcomeScreen from '../src/screens/login/WelcomeScreen';
import UserListScreen from '../src/screens/login/UserListScreen';
import EditUserScreen from '../src/screens/login/EditUserScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.homeText}>
        Bem-vindo ao aplicativo. Utilize o menu de navegação para acessar as telas de modais, listas e o controle de aluguéis.
      </Text>
    </View>
  );
}

function ScrollScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        // Deixa o header por conta do Drawer (hambúrguer padrão)
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' },
      }}
    >
      <Tab.Screen name="ScrollView" component={ListaScroll} />
      <Tab.Screen name="FlatList" component={ListaFlat} />
      <Tab.Screen name="SectionList" component={ListaSection} />
    </Tab.Navigator>
  );
}

function ModalScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        // Deixa o header por conta do Drawer (hambúrguer padrão)
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' },
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

function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Modal" component={ModalScreen} />
      <Drawer.Screen name="Scroll" component={ScrollScreen} />
      <Drawer.Screen name="Novo Aluguel" component={FormScreen} />
      <Drawer.Screen name="Lista de Aluguéis" component={ListScreen} />
      <Drawer.Screen name="Bem-vindo" component={WelcomeScreen} />
      <Drawer.Screen name="Lista de Usuários" component={UserListScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Home" component={AppDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="EditUser" component={EditUserScreen} options={{ title: 'Editar Usuário' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  homeText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    lineHeight: 22,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  welcomeEmail: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    marginBottom: 24,
  },
});

