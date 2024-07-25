import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Animated, Dimensions, Platform } from 'react-native';
import colors from '../constants/Colors';

const NavBar = ({ scrollViewRef }) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { height } = Dimensions.get('window');

  const scrollToSection = (section) => {
    if (scrollViewRef && scrollViewRef.current) {
      let yOffset = 0;
      if (section === 'features') {
        yOffset = height * 1; 
      } else if (section === 'installation') {
        yOffset = height * 1.9; 
      }
      scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
    }
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0.85,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.con, { opacity: fadeAnim }]}>
      <Text onPress={() => scrollToSection('landing')} style={styles.text}>
        Landing
      </Text>
      <Text onPress={() => scrollToSection('features')} style={styles.text}>
        Features
      </Text>
      <Text onPress={() => scrollToSection('installation')} style={styles.text}>
        Installation
      </Text>
    </Animated.View>
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
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'Rubik-SemiBold',
    color: 'white',
    fontSize: "100%", 
  },
});
