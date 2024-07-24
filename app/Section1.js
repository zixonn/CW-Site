import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import MyText from '../components/MyText';

const Section1 = () => {
  return (
    <View style={styles.con}>
      <View style={styles.content}>
        <View style={styles.mockups}>
          <Image
            source={require('../assets/images/mockups.png')}
            style={{ transform: [{ scale: 0.5 }], marginVertical: '-17%' }}
          />
        </View>
        <View style={styles.info}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{ transform: [{ scale: 0.55 }], margin: '-15%' }}
          />
          <MyText fontFamily={'Rubik-Medium'} fontSize={40}>
            Introducing
            <MyText fontFamily={'Rubik-SemiBold'} color={'tangerine'}>
              {' '}
              CellWise
            </MyText>
          </MyText>
          <MyText
            fontSize={16}
            marginTop={'1%'}
            marginBottom={'-5%'}
            color={'gray'}
            fontFamily={'Rubik-Regular'}
          >
            The Sickle Cell Education App
          </MyText>
          <Image
            source={require('../assets/images/stores.png')}
            style={{ transform: [{ scale: 0.5 }] }}
          />
          <MyText fontSize={10} marginTop={'-8%'} color={'gray'} fontFamily={'Rubik-Medium'}>
            ( FALL 2024)
          </MyText>
        </View>
      </View>
    </View>
  );
};

export default Section1;

const styles = StyleSheet.create({
  con: {
    width: '100%',
    marginTop:'3%'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mockups: {
    marginHorizontal: '-12%',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-5%',
  },
});
