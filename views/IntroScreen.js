import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import logo from '../assets/CalculatorMain2.png'
const IntroScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Text>IntroScreen</Text> */}
            <View style={styles.inner}>
                <Image source={logo} style={styles.innerimg} />
                <Text style={styles.Text}>
                   My Calculator
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner: {
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        height: '20%',
        backgroundColor: 'inherit',
        justifyContent:'center',
        alignItems:'center',
    },
    innerimg: {
        width: 250,
        height: 250,

    },
    Text:{
        fontSize:35,
        fontWeight:'700',
        marginTop:30
    }
})
export default IntroScreen