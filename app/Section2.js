import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from "../components/Header"
import Feature from "../components/Feature"

const Section2 = () => {
  return (
    <View style = {styles.con}>
        <Header>Features</Header>
        <View style = {styles.row}>
          <Feature title = "Learning Modules">
            The Learning Modules section of CellWise offers comprehensive education on sickle 
            cell disease, covering causes, symptoms, diagnosis, treatments, and lifestyle advice 
            for managing the condition daily.
          </Feature>
          <Feature title = "Glossary">
            The Glossary feature provides clear definitions of medical terms related to sickle 
            cell disease, helping users understand complex terminology and make informed health 
            decisions.
          </Feature>
          <Feature title = "Symptom Tracker">
            The Symptom Tracker allows users to log symptoms, noting frequency and severity. This helps
            track patterns, assess treatment effectiveness, and export data for healthcare consultations.
          </Feature>
          <Feature title = "Printing Export">
            The Printing Export feature enables users to export and print symptom logs and important data, 
            supporting effective communication with healthcare providers and comprehensive care management.
          </Feature>
        </View>
    </View>
  )
}

export default Section2

const styles = StyleSheet.create({
    con:{
      width:"100%",
      justifyContent:"center",
      alignItems:"center"
    },
    row:{
      flexDirection:"row",
      width:'100%',
      justifyContent:"space-evenly",
      alignItems:"center",
      marginTop:"2%"
    }
})