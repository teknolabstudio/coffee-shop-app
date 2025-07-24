// screens/DetailScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

export default function DetailScreen({ navigation }) {
  const route = useRoute();
  const { name, image, description, price } = route.params;

  const [selectedSize, setSelectedSize] = useState('Small');
  const [selectedSugar, setSelectedSugar] = useState('No Sugar');

  return (
    <ScrollView style={styles.container}>
      {/* ===== IMAGE ===== */}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.coffeeImage} />
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.heartIcon}>
          <Ionicons name="heart-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* ===== TITLE & RATING ===== */}
      <View style={styles.infoSection}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{description}</Text>
        </View>
        <View style={styles.ratingBox}>
          <Ionicons name="star" size={16} color="#fff" />
          <Text style={styles.ratingText}>4.8</Text>
        </View>
      </View>

      {/* ===== CUP SIZE ===== */}
      <View style={styles.sectionBox}>
        <Text style={styles.sectionLabel}>Cup Size</Text>
        <View style={styles.optionRow}>
          {['Small', 'Medium', 'Large'].map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.optionButton,
                selectedSize === size && styles.optionButtonSelected,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedSize === size && styles.optionTextSelected,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* ===== SUGAR LEVEL ===== */}
      <View style={styles.sectionBox}>
        <Text style={styles.sectionLabel}>Sugar Level</Text>
        <View style={styles.optionRow}>
          {['No Sugar', 'Low', 'Medium'].map((level) => (
            <TouchableOpacity
              key={level}
              style={[
                styles.optionButton,
                selectedSugar === level && styles.optionButtonSelected,
              ]}
              onPress={() => setSelectedSugar(level)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedSugar === level && styles.optionTextSelected,
                ]}
              >
                {level}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* ===== ABOUT ===== */}
      <View style={styles.aboutSection}>
        <Text style={styles.sectionLabel}>About</Text>
        <Text style={styles.aboutText} numberOfLines={4}>
          {description} - Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Praesent vel purus eu odio cursus eleifend. Curabitur rutrum ex
          sed sem egestas, ac condimentum erat feugiat.{' '}
          <Text style={styles.readMore}>Read more</Text>
        </Text>
      </View>

      {/* ===== ADD TO CART ===== */}
      <TouchableOpacity style={styles.cartButton}>
        <Text style={styles.cartButtonText}>
          Add to Cart | Rp {price.toLocaleString('id-ID')}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  imageContainer: { position: 'relative' },
  coffeeImage: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#00000080',
    padding: 8,
    borderRadius: 20,
  },
  heartIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#00000080',
    padding: 8,
    borderRadius: 20,
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { color: '#888', marginTop: 4 },
  ratingBox: {
    backgroundColor: '#D2691E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  ratingText: { color: '#fff', marginLeft: 4, fontWeight: 'bold' },
  sectionBox: { marginHorizontal: 20, marginBottom: 20 },
  sectionLabel: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  optionRow: { flexDirection: 'row', justifyContent: 'space-between' },
  optionButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  optionButtonSelected: {
    backgroundColor: '#D2691E',
    borderColor: '#D2691E',
  },
  optionText: { color: '#333' },
  optionTextSelected: { color: '#fff', fontWeight: 'bold' },
  aboutSection: { marginHorizontal: 20, marginBottom: 30 },
  aboutText: { color: '#555', lineHeight: 20 },
  readMore: { color: '#D2691E', fontWeight: 'bold' },
  cartButton: {
    backgroundColor: '#D2691E',
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
  },
  cartButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
