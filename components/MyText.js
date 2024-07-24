import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '@/constants/Colors'

const MyText = ({children,fontFamily,fontSize,color,margin,marginHorizontal,marginVertical,width,lineHeight,
  marginTop,marginBottom,onPress,textAlign
}) => {
  return (
    <Text onPress={onPress} style = {{
        fontFamily:fontFamily, fontSize:fontSize,color:colors[color],margin:margin, marginVertical:marginVertical,
        marginHorizontal:marginHorizontal, width:width,marginTop:marginTop,marginBottom:marginBottom,lineHeight:lineHeight,
        textAlign:textAlign
        }}>
        {children}
    </Text>
  )
}

export default MyText

const styles = StyleSheet.create({})