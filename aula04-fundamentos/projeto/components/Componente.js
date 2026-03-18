import { Text, View, StyleSheet } from 'react-native';

export default function Componente(){
    return(
        <View>
            <Text style={styles.text}>Me come taiga</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})