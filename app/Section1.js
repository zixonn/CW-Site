import { Image, StyleSheet, View, Animated, Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MyText from '../components/MyText';

const Section1 = () => {
  const screenWidth = Dimensions.get('window').width;
  const xValueRight = useRef(new Animated.Value(screenWidth)).current; // Start off-screen to the right
  const xValueLeft = useRef(new Animated.Value(-screenWidth)).current; // Start off-screen to the left

  useEffect(() => {
    Animated.timing(xValueRight, {
      toValue: 0, 
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.timing(xValueLeft, {
      toValue: 0, 
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
    <View style = {{marginBottom:"-8%",marginTop:"1%"}}></View>
    <View style={styles.container}>
      <Animated.View style={[styles.mockups, { transform: [{ translateX: xValueRight }] }]}>
        <Image
          source={require('../assets/images/mockups.png')}
          style={styles.mockupImage}
        />
      </Animated.View>
      <Animated.View style={[styles.info, { transform: [{ translateX: xValueLeft }] }]}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <MyText fontFamily={'Rubik-Medium'} fontSize={"215%"}>
          Introducing
          <MyText fontFamily={'Rubik-SemiBold'} color={'tangerine'}>
            {' '}
            CellWise
          </MyText>
        </MyText>
        <MyText
          fontSize={"100%"}
          marginTop={'1%'}
          marginBottom={'-7%'}
          color={'gray'}
          fontFamily={'Rubik-Regular'}
        >
          The Sickle Cell Education App
        </MyText>
        <Image
          source={require('../assets/images/stores.png')}
          style={styles.storesImage}
        />
        <MyText fontSize={10} marginTop={'-8%'} color={'gray'} fontFamily={'Rubik-Medium'}>
          ( FALL 2024)
        </MyText>
      </Animated.View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0%',
  },
  mockups: {
    marginRight: '-10%',
  },
  mockupImage: {
    transform: [{ scale: "50%" }],
  },
  info: {
    marginLeft: '-5%', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-5%',
    marginRight:"10%"
  },
  logoImage: {
    transform: [{ scale: "50%" }],
    margin: '-15%',
  },
  storesImage: {
    transform: [{ scale: "50%" }],
  },
});

export default Section1;
