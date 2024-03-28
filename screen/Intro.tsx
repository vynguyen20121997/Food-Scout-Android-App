import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const IntroScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.item, {flex: 5}]}>
          <Image
            style={styles.image}
            source={require('../assets/LandingPage.png')}
          />
        </View>

        <View style={{flex: 1}}>
          <Text style={styles.textHeading}>Foodie Explorer</Text>
          <Text style={styles.text}>Find nearby food and explore cuisines</Text>
        </View>

        <View style={{flex: 1}}>
          <Button
            buttonStyle={styles.button}
            title="Get Started"
            color="#f3322f"
            titleStyle={styles.text}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </>
  );
};

export default IntroScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB400',
  },
  item: {justifyContent: 'center'},
  image: {
    width: 300,
    height: 400,
    borderWidth: 1.7,
    borderColor: 'black',
  },
  textHeading: {
    fontFamily: 'roboto_mono_regular',
    fontSize: 35,
    color: 'black',
  },
  text: {
    fontFamily: 'roboto_mono_regular',
  },
  button: {
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
  },
});
