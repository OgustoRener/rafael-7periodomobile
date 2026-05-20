// App.js

import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'

import PessoaListScreen from './src/screens/PessoaListScreen'
import PessoaFormScreen from './src/screens/PessoaFormScreen'
import PessoaDetailScreen from './src/screens/PessoaDetailScreen'

import ProdutoListScreen from './src/screens/ProdutoListScreen'
import ProdutoFormScreen from './src/screens/ProdutoFormScreen'
import ProdutoDetailScreen from './src/screens/ProdutoDetailScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const stackOptions = {
  headerStyle: { backgroundColor: '#ffffff' },
  headerTitleStyle: { fontWeight: '700', fontSize: 18, color: '#0f172a' },
  headerShadowVisible: false,
  contentStyle: { backgroundColor: '#f8fafc' },
}

function PessoasStack() {
  return (
    <Stack.Navigator screenOptions={{ ...stackOptions, headerTintColor: '#2563eb' }}>
      <Stack.Screen name="PessoaList" component={PessoaListScreen} options={{ title: 'Pessoas' }} />
      <Stack.Screen name="PessoaDetail" component={PessoaDetailScreen} options={{ title: 'Detalhes' }} />
      <Stack.Screen
        name="PessoaForm"
        component={PessoaFormScreen}
        options={({ route }) => ({ title: route.params?.id ? 'Editar Pessoa' : 'Nova Pessoa' })}
      />
    </Stack.Navigator>
  )
}

function ProdutosStack() {
  return (
    <Stack.Navigator screenOptions={{ ...stackOptions, headerTintColor: '#7c3aed' }}>
      <Stack.Screen name="ProdutoList" component={ProdutoListScreen} options={{ title: 'Produtos' }} />
      <Stack.Screen name="ProdutoDetail" component={ProdutoDetailScreen} options={{ title: 'Detalhes' }} />
      <Stack.Screen
        name="ProdutoForm"
        component={ProdutoFormScreen}
        options={({ route }) => ({ title: route.params?.id ? 'Editar Produto' : 'Novo Produto' })}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: route.name === 'Pessoas' ? '#2563eb' : '#7c3aed',
            tabBarInactiveTintColor: '#94a3b8',
            tabBarStyle: { backgroundColor: '#ffffff', borderTopColor: '#f1f5f9' },
            tabBarIcon: ({ focused, color, size }) => {
              const icons = {
                Pessoas: focused ? 'people' : 'people-outline',
                Produtos: focused ? 'cube' : 'cube-outline',
              }
              return <Ionicons name={icons[route.name]} size={size} color={color} />
            },
          })}
        >
          <Tab.Screen name="Pessoas" component={PessoasStack} />
          <Tab.Screen name="Produtos" component={ProdutosStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}