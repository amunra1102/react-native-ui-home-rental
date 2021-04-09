import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../../constants/colors';
import houses from '../../constants/houses';

const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const categoryList = ['Popular', 'Recommended', 'Nearest'];
    return (
      <View style={styles.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}>
            <Text
              style={[
                styles.categoryListText,
                index === selectedCategoryIndex &&
                  styles.activeCategoryListText,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const ListOptions = () => {
    const optionList = [
      {title: 'Buy a Home', img: require('../../assets/house1.jpg')},
      {title: 'Rent a Home', img: require('../../assets/house2.jpg')},
    ];

    return (
      <View style={styles.optionListContainer}>
        {optionList.map((option, index) => (
          <View style={styles.optionCard} key={index}>
            <Image source={option.img} style={styles.optionCardImage} />
            <Text style={styles.optionTitle}>{option.title}</Text>
          </View>
        ))}
      </View>
    );
  };

  const Card = ({house}) => {
    return (
      <Pressable onPress={() => navigation.navigate('DetailScreen', house)}>
        <View style={styles.card}>
          <Image source={house.image} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{house.title}</Text>
            <Text style={styles.optionPrice}>$1.500</Text>
          </View>
          <Text style={styles.cardLocation}>{house.location}</Text>
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
              <Text style={styles.facilityText}>100m</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  useEffect(() => {
    Icon.loadFont();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <View>
          <Text style={styles.location}>Location</Text>
          <Text style={styles.place}>Canada</Text>
        </View>
        <Image
          source={require('../../assets/person.jpg')}
          style={styles.profileImage}
        />
      </View>
      <ScrollView>
        <View style={styles.searchBar}>
          <View style={styles.searchInputContainer}>
            <Icon name="search" size={25} color={COLORS.grey} />
            <TextInput placeholder="Search address, city, location" />
          </View>
          <View style={styles.sortButton}>
            <Icon name="tune" size={25} color={COLORS.white} />
          </View>
        </View>
        <ListOptions />
        <ListCategories />
        <FlatList
          snapToInterval={width - 20}
          contentContainerStyle={styles.flatList}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={houses}
          renderItem={({item}) => <Card house={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  location: {
    color: COLORS.grey,
  },
  place: {
    color: COLORS.dark,
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.light,
  },
  sortButton: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  optionListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  optionCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  optionCardImage: {
    width: '100%',
    height: 140,
    borderRadius: 10,
  },
  optionTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryListContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: COLORS.grey,
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderColor: COLORS.dark,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 5,
  },
  card: {
    height: 250,
    width: width - 40,
    backgroundColor: COLORS.white,
    elevation: 10,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  flatList: {
    paddingLeft: 20,
    paddingVertical: 20,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.blue,
  },
  cardLocation: {
    fontSize: 14,
    marginTop: 5,
    color: COLORS.grey,
  },
  facilityContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  facility: {
    flexDirection: 'row',
    marginRight: 15,
  },
  facilityText: {
    marginLeft: 5,
    color: COLORS.grey,
  },
});

export default HomeScreen;
