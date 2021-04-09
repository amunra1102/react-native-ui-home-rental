import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../../constants/colors';

const {width} = Dimensions.get('screen');

const DetailScreen = ({navigation, route}) => {
  const house = route.params;

  const InteriorImage = ({image}) => (
    <Image source={image} style={styles.interiorImage} />
  );

  useEffect(() => {
    Icon.loadFont();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.backgroundImageContainer}>
          <ImageBackground style={styles.backgroundImage} source={house.image}>
            <View style={styles.header}>
              <View style={styles.headerButton}>
                <Icon
                  name="arrow-back-ios"
                  size={20}
                  onPress={navigation.goBack}
                />
              </View>
              <View style={styles.headerButton}>
                <Icon name="favorite" size={20} color={COLORS.red} />
              </View>
            </View>
          </ImageBackground>
          <View style={styles.virtualTag}>
            <Text style={styles.virtualText}>Virtual tour</Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.detailTitleRating}>
            <Text style={styles.title}>{house.title}</Text>
            <View style={styles.rating}>
              <View style={styles.ratingTag}>
                <Text style={styles.ratingTagText}>4.8</Text>
              </View>
              <Text style={styles.ratingNumber}>155 ratings</Text>
            </View>
          </View>
          <Text style={styles.location}>{house.location}</Text>
          <View style={styles.facilityContainer}>
            <View style={styles.facility}>
              <Icon name="hotel" size={18} />
              <Text style={styles.facilityText}>2</Text>
            </View>
            <View style={styles.facility}>
              <Icon name="bathtub" size={18} />
              <Text style={styles.facilityText}>2</Text>
            </View>
            <View style={styles.facility}>
              <Icon name="aspect-ratio" size={18} />
              <Text style={styles.facilityText}>100m area</Text>
            </View>
          </View>
          <Text style={styles.description}>{house.details}</Text>
          <FlatList
            keyExtractor={(_, key) => key.toString()}
            contentContainerStyle={styles.flatList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={house.interiors}
            renderItem={({item}) => <InteriorImage image={item} />}
          />
          <View style={styles.footer}>
            <View>
              <Text style={styles.price}>$1.500</Text>
              <Text style={styles.priceText}>Total Price</Text>
            </View>
            <View style={styles.bookNowButton}>
              <Text style={styles.buttonText}>Book Now</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    height: 350,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerButton: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  virtualTag: {
    top: -20,
    width: 120,
    backgroundColor: COLORS.dark,
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  virtualText: {
    color: COLORS.white,
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  detailTitleRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTagText: {
    color: COLORS.white,
  },
  ratingNumber: {
    fontSize: 13,
    marginLeft: 5,
  },
  location: {
    color: COLORS.grey,
    fontSize: 16,
  },
  facilityContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  facility: {
    flexDirection: 'row',
    marginRight: 15,
  },
  facilityText: {
    marginLeft: 5,
    color: COLORS.grey,
  },
  description: {
    marginTop: 20,
    color: COLORS.grey,
  },
  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  flatList: {
    marginTop: 20,
  },
  footer: {
    height: 70,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  price: {
    color: COLORS.blue,
    fontWeight: 'bold',
    fontSize: 18,
  },
  priceText: {
    color: COLORS.grey,
    fontWeight: 'bold',
    fontSize: 12,
  },
  bookNowButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: COLORS.white,
  },
});

export default DetailScreen;
