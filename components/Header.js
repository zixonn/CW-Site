import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '@/constants/Colors'
import MyText from './MyText'

const Header = ({children}) => {
  return (
    <View style = {styles.con}>
      <MyText fontFamily={"Rubik-SemiBold"} color={"white"} fontSize={22}> 
        {children}
      </MyText>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  con:{
    width:"30%",
    paddingVertical:"1%",
    backgroundColor:colors.lochmara,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center",
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,  
  }
})