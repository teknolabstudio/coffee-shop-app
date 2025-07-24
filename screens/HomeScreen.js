// screens/HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const popularCoffees = [
  {
    id: 1,
    name: 'Cappuccino',
    subtitle: 'With Sugar',
    price: 42000,
    image: require('../assets/images/photocoffee.png'),
  },
  {
    id: 2,
    name: 'Latte',
    subtitle: 'With Sugar',
    price: 40000,
    image: require('../assets/images/photocoffee.png'),
  },
  {
    id: 3,
    name: 'Espresso',
    subtitle: 'With Sugar',
    price: 35000,
    image: require('../assets/images/photocoffee.png'),
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/images/photoprofile.png')} style={styles.profile} />
        <Feather name="map-pin" size={20} color="#333" style={styles.icon} />
        <Text style={styles.locationText}>Jakarta, ID</Text>
        <Ionicons name="notifications-outline" size={22} color="#333" style={styles.notification} />
      </View>

      {/* Greeting */}
      <View style={styles.greeting}>
        <Text style={styles.greet}>Good Morning,</Text>
        <Text style={styles.username}>Dams</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchSection}>
        <View style={styles.searchBox}>
          <Feather name="search" size={20} color="#999" />
          <TextInput placeholder="Search coffee..." placeholderTextColor="#999" style={styles.input} />
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Feather name="filter" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {['Cappuccino', 'Latte', 'Espresso', 'Mocha'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.categoryBtn}>
            <Ionicons name="cafe-outline" size={20} color="#333" />
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Popular Section */}
      <Text style={styles.sectionTitle}>Popular</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsRow}>
        {popularCoffees.map((coffee) => (
          <TouchableOpacity
            key={coffee.id}
            onPress={() =>
              navigation.navigate('Detail', {
                id: coffee.id,
                name: coffee.name,
                image: coffee.image,
                description: coffee.subtitle,
                price: coffee.price,
              })
            }
          >
            <View style={styles.card}>
              <Image source={coffee.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{coffee.name}</Text>
              <Text style={styles.cardSubtitle}>{coffee.subtitle}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.price}>Rp{coffee.price.toLocaleString()}</Text>
                <TouchableOpacity style={styles.addBtn}>
                  <Ionicons name="add" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Special Offer */}
      <Text style={styles.sectionTitle}>Special Offer</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsRow}>
        {[false, true].map((fav, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate('Favorite')}
            activeOpacity={0.8}
          >
            <View style={styles.specialCard}>
              <Image
                source={require('../assets/images/cappuccino.png')}
                style={styles.specialImage}
              />
              <TouchableOpacity style={styles.favoriteIcon}>
                <Ionicons
                  name={fav ? 'heart' : 'heart-outline'}
                  size={20}
                  color={fav ? 'red' : '#999'}
                />
              </TouchableOpacity>
              <Text style={styles.cardTitle}>Cappuccino</Text>
              <Text style={styles.cardSubtitle}>With Sugar</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.price}>Rp4.50</Text>
                <TouchableOpacity style={styles.addBtn}>
                  <Ionicons name="add" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footerNav}>
        <Ionicons name="home" size={24} color="#333" />
        <Ionicons
          name="heart-outline"
          size={24}
          color="#999"
          onPress={() => navigation.navigate('Favorite')}
        />
        <Ionicons
          name="cart-outline"
          size={24}
          color="#999"
          onPress={() => navigation.navigate('Cart')}
        />
        <Ionicons name="person-outline" size={24} color="#999" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 50, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  profile: { width: 40, height: 40, borderRadius: 20 },
  icon: { marginLeft: 10 },
  locationText: { marginLeft: 6, fontSize: 14, fontWeight: '500' },
  notification: { marginLeft: 'auto' },
  greeting: { marginBottom: 20 },
  greet: { fontSize: 18, color: '#888' },
  username: { fontSize: 24, fontWeight: 'bold' },
  searchSection: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 45,
  },
  input: { marginLeft: 10, flex: 1 },
  filterBtn: { backgroundColor: '#D2691E', borderRadius: 30, padding: 10, marginLeft: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  categories: { flexDirection: 'row', marginBottom: 20 },
  categoryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: { marginLeft: 6 },
  cardsRow: { marginBottom: 20 },
  card: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginRight: 16,
    padding: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: { width: '100%', height: 100, borderRadius: 16 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  cardSubtitle: { fontSize: 12, color: '#888' },
  cardFooter: { flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' },
  price: { fontWeight: 'bold' },
  addBtn: { backgroundColor: '#D2691E', borderRadius: 20, padding: 6 },
  specialCard: {
    width: 180,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginRight: 16,
    padding: 10,
    elevation: 4,
  },
  specialImage: { width: '100%', height: 100, borderRadius: 16 },
  favoriteIcon: { position: 'absolute', top: 10, right: 10 },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
});
