import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const navigation = useNavigation();

  const shadowOpt = {
    width: 350,
    height: 45,
    color: '#4f4f4f',
    radius: 1,
    opacity: 1,
    x: 3,
    y: 3.5,
  };

  const shadowSgn = {
    width: 120,
    height: 40,
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
        <View style={{flex: 3, backgroundColor: 'white'}}>
          <View
            style={{
              flex: 2,
              paddingTop: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.textBarHeading}> Sign In</Text>
              </View>
              <View style={{marginRight: 20}}>
                <BoxShadow setting={shadowSgn}>
                  <TouchableOpacity
                    style={styles.signinBtn}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.signinText}>Sign Up</Text>
                  </TouchableOpacity>
                </BoxShadow>
              </View>
            </View>
            <Text style={[styles.text, {flex: 1, marginLeft: 20}]}>
              Welcome Back
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
            />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TextInput
              style={styles.input}
              onChangeText={setPass}
              value={pass}
              placeholder="Password"
            />
          </View>
          <View style={[styles.item, {flex: 3, alignItems: 'center'}]}>
            <BoxShadow setting={shadowOpt}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>GO!!</Text>
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
  signinText: {
    fontFamily: 'roboto_mono_regular',
    color: 'white',
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
  signinBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#004AAD',
    elevation: 2,
  },
});

export default LoginScreen;
