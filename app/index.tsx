import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from "../components/NavBar"
const index = () => {
  return (
    <ImageBackground source={require("../assets/images/bg.jpg")} style = {styles.con}> 
      <NavBar/>
    </ImageBackground>
  )
}

export default index

const styles = StyleSheet.create({
  con:{
    flex:1,
    alignItems:"center"
  }
})