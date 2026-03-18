import { Text, StyleSheet } from 'react-native';

export default function Greeting(props){
    const {nome} = props
    return <Text style={styles.greeting}>Quanto vc me cobra pra me torar em {nome}</Text>
}

const styles = StyleSheet.create({
    greeting:{
        fontSize: 18,
        margin: 5,
        color: '#992222'
    }
})