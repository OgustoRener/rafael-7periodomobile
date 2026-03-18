import { Text, View, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export default function Counter(){
    const [count, setCount] = useState(0) 

    return(
        <View>
            <Text style={styles.counter}>Você clicou {count} vezes.</Text>
            <Button title='aperta vai' onPress={() => setCount(count + 1)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    counter:{
        fontSize: 20,
        marginBottom: 20
    }
})