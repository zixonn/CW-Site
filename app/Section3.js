import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import Footer from "../components/Footer"
import MyText from '@/components/MyText'
import { Image } from 'react-native'
import colors from '@/constants/Colors'
const Section3 = () => {
  return (
    <View style = {styles.con}>
      <View style = {{margin:'2%'}}></View>
      <Header>Installation Instructions</Header>
        <MyText  margin={"2%"} color={"gray"} fontFamily={"Rubik-Regular"} fontSize={20}> 
          Scan the QR code with your
          <MyText  fontFamily={"Rubik-Medium"} color={"tangerine"}> android </MyText>device.
        </MyText>
        <View style = {styles.box}>
        <Image source={require("../assets/images/qrcode.png")} style = {{
          transform:[{scale:0.75}],margin:"-3%"
        }}/>
      </View>
      <MyText marginVertical={"2%"} color={"gray"} fontFamily={"Rubik-Regular"} fontSize={20}> 
        Install the APK and deploy the application.
      </MyText>
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
    marginTop:"5%"
  },
  box:{
    backgroundColor:colors.tangerine,
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    shadowColor:"black",
    shadowRadius:3,
    shadowOpacity:0.5,
    shadowOffset:{width:0, height:3}
  }
})