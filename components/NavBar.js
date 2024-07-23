import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NavBar = () => {
  return (
    <View style = {styles.con}>
      <Text>NavBar</Text>
      <Text>NavBar</Text>
      <Text>NavBar</Text>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    con:{
        width: "75%",
        height:"8%",
        backgroundColor:"red",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row",
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50
    }
})