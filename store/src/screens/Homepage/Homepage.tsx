import { View, Text, StyleSheet, StatusBar } from "react-native";
import { COLORS, SIZE } from "../../../constants";
import { Header } from "../../components/export";

export default function Homepage() {
    return (
        <View style={styles.screen}>
            <StatusBar backgroundColor={COLORS.black} animated={true} barStyle={"light-content"} />
            <Header/>
            <View style={styles.principalContainer}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: SIZE.width,
        height: SIZE.height,
        backgroundColor: COLORS.lightGrey,
        display: 'flex',
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        flex:1,
        // top: 0
    },
    principalContainer:{
        width: '100%',
        height: '96%',


    }
    
})