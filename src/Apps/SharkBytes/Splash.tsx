import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Image, Pressable, Animated, Easing} from 'react-native';


export default function New({sendPrompt, navigation}) {
  
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startRotation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(rotation, {
            toValue: 1, // Rotate to 10 degrees
            duration: 1500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(rotation, {
            toValue: 0, // Rotate back to 0 degrees
            duration: 1500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
        ])
      ).start();
    };

    startRotation();
  }, [rotation]);

  const sharkWobble = rotation.interpolate({
    inputRange: [0, 1], //from, to
    outputRange: ['-4deg', '6deg'], //from, to
  })

  const handleRedirect = () => {
    sendPrompt();
    navigation.navigate('SharkPage')
  }

  
  return (
    <View style={styles.page}>
        <Image 
            source={require('./assets/SharkBytesSplash.png')}
            style={styles.splash}
            />
        <Pressable 
          style={styles.InvisiblePressable}
          onPress={handleRedirect}
          >
          <Animated.Image
              source={require('./assets/PixelShark.png')}
              style={[
                styles.shark,
                { transform: [{ rotate: sharkWobble }] }              
              ]}
              />
        </Pressable>
    </View>
      
  );

  
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#5687c1",
        height: "100%",
        alignItems: 'center',
    },
    splash: {
        height: '100%', 
        width: '100%', 
        maxWidth: 750,
        maxHeight: 'auto',
        resizeMode: "cover"
    },
    InvisiblePressable: {
      width: '69%',
      height: '50%',
      position: 'absolute',
      marginTop: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    shark: {
      position: 'absolute',
      zIndex: 1000,
      width: '90%',
      height: '90%',
      maxWidth: 465.75,
      maxHeight: 'auto',
      resizeMode: 'contain',
    },
    
  })
