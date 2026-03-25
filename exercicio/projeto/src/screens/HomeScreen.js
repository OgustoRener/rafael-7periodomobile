

export function HomeScreen() {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Text>Bem-vindo ao aplicativo. Utilize o menu de navegação para acessar as telas de modais e as listas com rolagem.</Text>
</View>
);
}


export default function App() {
return (
<NavigationContainer>
<Drawer.Navigator>
<Drawer.Screen name="Home" component={HomeScreen} />
<Drawer.Screen name="Profile" component={ProfileScreen} />
</Drawer.Navigator>
</NavigationContainer>
);
}