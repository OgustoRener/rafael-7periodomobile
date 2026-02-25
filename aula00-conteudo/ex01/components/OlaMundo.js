import React from 'react';
import { View, Text } from 'react-native';

export default function OlaMundo(props ){
    return(
        <View>
            <Text>Belonia Gostoso</Text>
            <Text>{props.nome}</Text>

        </View>
    );
}