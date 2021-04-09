import React, {useEffect} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../../constants/colors';

const OnBoardScreen = ({navigation}) => {
  useEffect(() => {
    Icon.loadFont();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <Image
        source={require('../../assets/onboardImage.jpg')}
        style={styles.image}
      />
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={[styles.indicator, styles.indicatorAction]} />
      </View>
      <View style={styles.info}>
        <View>
          <Text style={styles.title}>Find your</Text>
          <Text style={styles.title}>sweet home</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>
            Schedule visits in just a few clicks
          </Text>
          <Text style={styles.textStyle}>visit in just a few clicks</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => navigation.navigate('HomeScreen')}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Get Started</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image: {
    height: 420,
    width: '100%',
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  indicatorAction: {
    backgroundColor: COLORS.dark,
  },
  info: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  textContainer: {
    marginTop: 10,
  },
  textStyle: {
    fontSize: 16,
    color: COLORS.grey,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  button: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: COLORS.dark,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: COLORS.white,
  },
});

export default OnBoardScreen;
