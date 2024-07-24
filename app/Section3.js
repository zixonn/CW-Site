import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import Footer from "../components/Footer"
import MyText from '@/components/MyText'
import { Image } from 'react-native'
const Section3 = () => {
  return (
    <View style = {styles.con}>
      <View style = {{margin:'2%'}}></View>
      <Header>Installation Instructions</Header>
      <MyText marginTop={"3%"} color={"gray"} fontFamily={"Rubik-Regular"} fontSize={25}> 
        1. Scan the QR code with your android device.
      </MyText>
      <MyText margin={"2%"} color={"gray"} fontFamily={"Rubik-Regular"} fontSize={25}> 
        2. Install the APK and run the app.
      </MyText>
      <Image source={require("../assets/images/qrcode.png")} style = {{
        transform:[{scale:0.75}],margin:"-3%"
      }}/>
      <Footer/>
    </View>
  )
}

export default Section3

const styles = StyleSheet.create({
  con:{
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
}
})