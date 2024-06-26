import React from 'react'
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

interface ButtonProps extends PressableProps{
    text: string;
}

export const Button: React.FC<ButtonProps> = ({ text, ...rest}) => {
  return (
    <Pressable style={styles.button} {...rest}>
        <Text style={styles.textButton}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
      width: 312,
      height: 55,
      backgroundColor: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 8,
    },
    textButton: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
  });
  