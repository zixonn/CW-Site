import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../constants/Colors';

const NavBar = ({ scrollViewRef }) => {
  const scrollToSection = (section) => {
    if (scrollViewRef && scrollViewRef.current) {
      let yOffset = 0;
      if (section === 'features') {
        yOffset = 500; 
      } else if (section === 'installation') {
        yOffset = 900; 
      }
      scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
    }
  };

  return (
    <View style={styles.con}>
      <Text onPress={() => scrollToSection('landing')} style={styles.text}>
        Landing
      </Text>
      <Text onPress={() => scrollToSection('features')} style={styles.text}>
        Features
      </Text>
      <Text onPress={() => scrollToSection('installation')} style={styles.text}>
        Installation
      </Text>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  con: {
    position: 'absolute', 
    top: 0,
    width: '70%',
    paddingVertical: '1.5%',
    backgroundColor: colors.lochmara,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    zIndex: 1,
    alignSelf:"center"
  },
  text: {
    fontFamily: 'Rubik-SemiBold',
    color: 'white',
  },
});
