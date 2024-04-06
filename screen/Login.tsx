import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {BoxShadow} from 'react-native-shadow';

const LoginScreen = () => {
  const [value, onChangeText] = React.useState('');
  const shadowOpt = {
    width: 350,
    height: 45,
    color: '#4f4f4f',
    radius: 1,
    opacity: 1,
    x: 3,
    y: 3.5,
  };
  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 2}}>
          <ImageBackground
            source={require('../assets/Login.png')}
            resizeMode="cover"
            style={{flex: 1, justifyContent: 'center'}}>
            <View>
              <Text style={[styles.textHeading, {alignSelf: 'center'}]}>
                DISCOVER EATS
              </Text>
              <Text
                style={[styles.text, {color: 'white', alignSelf: 'center'}]}>
                Explore new flavors nearby
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{flex: 5, backgroundColor: 'white'}}>
          <View style={[styles.item, {flex: 1}]}>
            <Text style={styles.textBarHeading}> Sign Up</Text>
          </View>
          <View style={[styles.item, {flex: 1, alignItems: 'center'}]}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={value}
              placeholder="Email"
            />
          </View>
          <View style={[styles.item, {flex: 1, alignItems: 'center'}]}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={value}
              placeholder="Password"
            />
          </View>
          <View style={[styles.item, {flex: 1, alignItems: 'center'}]}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={value}
              placeholder="Password Re-Enter"
            />
          </View>
          <View style={[styles.item, {flex: 1, alignItems: 'center'}]}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={value}
              placeholder="Name"
            />
          </View>
          <View style={[styles.item, {flex: 1, alignItems: 'center'}]}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={value}
              placeholder="Sex"
            />
          </View>
          <View style={[styles.item, {flex: 1, alignItems: 'center'}]}>
            <BoxShadow setting={shadowOpt}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>JOIN</Text>
              </TouchableOpacity>
            </BoxShadow>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  item: {justifyContent: 'center'},
  input: {
    height: 40,
    width: 350,
    borderWidth: 1,
    padding: 10,
    fontFamily: 'roboto_mono_regular',
  },
  textHeading: {
    fontFamily: 'roboto_mono_regular',
    fontSize: 45,
    color: 'white',
    fontWeight: 'bold',
  },
  textBarHeading: {
    fontFamily: 'roboto_mono_regular',
    fontSize: 30,
    color: 'black',
  },
  text: {
    fontFamily: 'roboto_mono_regular',
    color: 'black',
  },
  button: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#f3322f',
    elevation: 2,
  },
});

export default LoginScreen;
