import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '@/constants/Colors'
import { FontAwesome } from '@expo/vector-icons';
import { Linking } from 'react-native';
const Footer = () => {
  return (
    <View style = {styles.con}>
        <View style = {styles.row}>
            <TouchableOpacity onPress={() => Linking.openURL("https://ascaa.org/")} style ={{position:"absolute",left:"95%"}}>
            <Image source={require("../assets/images/ascaa.png")} style = {{
                transform:[{scale:0.13}],margin:"-50%"
            }}
            />
            </TouchableOpacity>
            <View style = {styles.icons}>
                <FontAwesome onPress={() => Linking.openURL("https://www.facebook.com/AmericanSickleCellAnemiaAssociation/")} 
                name="facebook-square" size={30} color="#D1D1C8" />
                <FontAwesome onPress={() => Linking.openURL("https://x.com/ascaa_?lang=en")} 
                 name="twitter-square" size={30} color="#D1D1C8" />
                <FontAwesome onPress={() => Linking.openURL("https://www.linkedin.com/company/american-sickle-cell-anemia/")} 
                name="linkedin-square" size={30} color="#D1D1C8" />
            </View>
        </View>
        <View style = {styles.bar}/>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    con:{
        width:"100%",
        backgroundColor:colors.wood,
        justifyContent:"center",
        flexDirection:"column",
        paddingVertical:"1.5%",
        marginTop:'10%'
    },
    row:{
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        paddingHorizontal:"2%",
        marginBottom:"1%"
    },
    bar:{
        width:'100%',
        backgroundColor:"#D1D1C8",
        height:"20%",
        position:"absolute",
        bottom:"0%",
    },
    icons:{
        width:"8%",
        flexDirection:"row",
        justifyContent:"space-between",
    }
})