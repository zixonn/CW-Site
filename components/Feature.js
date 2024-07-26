import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from "../constants/Colors"
import MyText from './MyText'
import { MaterialIcons } from '@expo/vector-icons';
const Feature = ({children,title}) => {
  return (
    <View style = {styles.con}>
      <MyText textAlign={"center"} fontFamily={"Rubik-SemiBold"} color={"white"} fontSize={19}>
        {title}
      </MyText>
      <MyText textAlign={"center"}  lineHeight={"175%"} marginTop={"3%"} fontFamily={"Rubik-Regular"} color={"white"} fontSize={15}>
        {children}
      </MyText>
    </View>
  )
}

export default Feature

const styles = StyleSheet.create({
  con:{
    backgroundColor:colors.tangerine,
    borderRadius:20,
    paddingHorizontal:'1%',
    paddingVertical:"2%",
    width:'18%',
    height:"100%",
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,  
    marginHorizontal:"-10%"
  },
})