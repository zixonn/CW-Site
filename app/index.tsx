import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View, ActivityIndicator } from 'react-native';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import NavBar from '../components/NavBar'; 
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Footer from '@/components/Footer';

SplashScreen.preventAutoHideAsync();

const Index = () => {
  const scrollViewRef = useRef(null);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const [loaded, error] = useFonts({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
  });

  useEffect(() => {
    const loadAssets = async () => {
      await SplashScreen.hideAsync();
      setAssetsLoaded(true);
    };

    if (loaded || error) {
      loadAssets();
    }

    return () => {
      setAssetsLoaded(false);
    };
  }, [loaded, error]);

  if (!assetsLoaded) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#EB4335" />
      </View>
    );
  }

  return (
    <ImageBackground source={require('../assets/images/bg.jpg')} style={styles.container}>
      <NavBar scrollViewRef={scrollViewRef} /> 
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollContainer}>
        <Section1 />
        <Section2 />
        <Section3 />
      </ScrollView>
    </ImageBackground>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
