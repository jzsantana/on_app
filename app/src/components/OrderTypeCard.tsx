import React from 'react'
import { PressableProps, StyleSheet, Text, View } from 'react-native';
import Material from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from '../../constants';

interface CardOrders extends PressableProps{
    icon?: React.ReactNode;
    text: string;
}

export const OrderTypeCard: React.FC<CardOrders> = ({icon, text}: CardOrders) => {
  return (
    <View style={styles.containerOrders}>
        {icon}
        <Text style={styles.text}>{text}</Text>
        <Material name='arrow-forward-ios' size={24} color='#C7C7C7'/>
    </View>
  )
}

const styles = StyleSheet.create({
    containerOrders: {
        width: 313,
        height: 110,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 30,
        backgroundColor: COLORS.lightGrey2,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.lightGrey3,
        padding: 3,
    },
    text: {
      fontSize: 20,
      color: 'black',
      fontWeight:'500'
    },
  });
  