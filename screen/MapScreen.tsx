import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const restaurantData = [
  {
    name: 'Restaurant 1',
    address: '123 Main St',
    id: 1,
  },
  {
    name: 'Restaurant 2',
    address: '123 Main St',
    id: 2,
  },
  {
    name: 'Restaurant 3',
    address: '123 Main St',
    id: 3,
  },
  {
    name: 'Restaurant 5',
    address: '123 Main St',
    id: 5,
  },
  {
    name: 'Restaurant 6',
    address: '123 Main St',
    id: 6,
  },
];

const MapScreen = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 6.5}}>
          <Image
            resizeMode="repeat"
            style={styles.image}
            source={require('../assets/Map.png')}
          />
        </View>

        <View style={{flex: 3.5}}>
          <View style={{flex: 1, paddingLeft: 10}}>
            <TextInput
              inlineImageLeft="search"
              style={styles.input}
              onChangeText={onChangeText}
              value={value}
              placeholder="Enter Location"
            />
          </View>

          <View style={{flex: 3}}>
            <ScrollView style={styles.scrollView}>
              {/* {restaurantData.map(item => (
                <View key={item.id} style={[styles.box]}>
                  <View>
                    <Image
                      resizeMode="contain"
                      style={styles.icon}
                      source={require('../assets/icon/donut.png')}
                    />
                  </View>
                  <View style={{marginLeft: 10}}>
                    <Text style={styles.textHeading}>{item.name}</Text>
                    <Text style={styles.text}>{item.address}</Text>
                  </View>
                </View>
              ))} */}
              <FlatList
                data={restaurantData}
                renderItem={({item}) => (
                  <>
                    <View key={item.id} style={[styles.box]}>
                      <View>
                        <Image
                          resizeMode="contain"
                          style={styles.icon}
                          source={require('../assets/icon/donut.png')}
                        />
                      </View>
                      <View style={{marginLeft: 10}}>
                        <Text style={styles.textHeading}>{item.name}</Text>
                        <Text style={styles.text}>{item.address}</Text>
                      </View>
                    </View>
                  </>
                )}
                keyExtractor={item => item.id}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB400',
    flexDirection: 'column',
  },
  box: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    width: 350,
    alignSelf: 'center',
    marginTop: 5,
    paddingBottom: 5,
  },
  scrollView: {},
  icon: {width: 40, height: 40},
  image: {
    height: 450,
    borderWidth: 1.7,
    borderColor: 'black',
  },
  input: {
    height: 40,
    margin: 12,
    width: 350,
    borderWidth: 1,
    padding: 10,
    fontFamily: 'roboto_mono_regular',
  },
  textHeading: {
    fontFamily: 'roboto_mono_regular',
    fontSize: 15,
    color: 'black',
  },
  text: {
    fontFamily: 'roboto_mono_regular',
    color: '#7f7f7f',
  },
  button: {
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
  },
});
