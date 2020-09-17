import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => {
  return <Button title="Skip" color="#000" {...props} />;
};

const Next = ({...props}) => {
  return <Button title="Next" color="#000" {...props} />;
};

const Done = ({...props}) => {
  return <Button title="Done" color="#000" {...props} />;
};
const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace('SplashScreen')}
      onDone={() => navigation.navigate('SplashScreen')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image source={require('../../assets/images/onboard-img1.png')} />
          ),
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image source={require('../../assets/images/onboard-img2.png')} />
          ),
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image source={require('../../assets/images/onboard-img3.png')} />
          ),
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
