import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Animated, Dimensions, Platform } from 'react-native';
import colors from '../constants/Colors';
import MyText from './MyText';

const NavBar = () => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0.85,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.con, { opacity: fadeAnim }]}>
      <MyText fontSize={"100%"} color={"white"} fontFamily={"Rubik-Medium"}>Now Available for
         <MyText color={"tangerine"}> Android</MyText> Devices!
        </MyText>
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
});
