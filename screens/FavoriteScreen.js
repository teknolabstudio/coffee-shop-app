// screens/FavoriteScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const favoriteData = [
  {
    id: '1',
    name: 'Cappuccino',
    subtitle: 'With Sugar',
    price: 'Rp4.50',
    image: require('../assets/images/cappuccino.png'),
  },
  {
    id: '2',
    name: 'Latte',
    subtitle: 'No Sugar',
    price: 'Rp5.00',
    image: require('../assets/images/photocoffee.png'),
  },
  {
    id: '3',
    name: 'Espresso',
    subtitle: 'Strong',
    price: 'Rp3.20',
    image: require('../assets/images/photocoffee.png'),
  },
  {
    id: '4',
    name: 'Mocha',
    subtitle: 'With Chocolate',
    price: 'Rp6.00',
    image: require('../assets/images/cappuccino.png'),
  },
];

export default function FavoriteScreen() {
  const navigation = useNavigation();

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Detail', item)}
    >
      <Image source={item.image} style={styles.cardImage} />
      <TouchableOpacity style={styles.favoriteIcon}>
        <Ionicons name="heart" size={20} color="red" />
      </TouchableOpacity>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Your Favorite Coffee</Text>
      <FlatList
        data={favoriteData}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Bottom Navigation */}
      <View style={styles.footerNav}>
        <Ionicons name="home-outline" size={24} color="#999" />
        <Ionicons name="heart" size={24} color="#D2691E" />
        <Ionicons name="cart-outline" size={24} color="#999" />
        <Ionicons name="person-outline" size={24} color="#999" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
    padding: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 16,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  price: {
    fontWeight: 'bold',
  },
  addBtn: {
    backgroundColor: '#D2691E',
    borderRadius: 20,
    padding: 6,
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
