import React from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps{
  label: string;
  typeInput?: boolean;
}

export const Input: React.FC<InputProps> = ({label, typeInput, ...rest}) => {
  return (
    // criar função do olhinho
    // colocar o olhinho jumto ao typeInput
    <View style={styles.containerInput} {...rest}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} cursorColor='#000' secureTextEntry={typeInput} ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    containerInput: {
        width: '90%',
        height: 70,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    label: {
      fontSize: 12,
      color: 'black',
      fontWeight:'500'
    },
    input: {
      width: '100%',
      height: 46,
      backgroundColor: '#F0F0F0',
      borderRadius: 5,
      borderColor: '#EBEBEB',
      padding: 12,
      fontSize: 15,
      borderWidth: 1,
    },
  }); 
