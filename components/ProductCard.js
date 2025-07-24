// components/ProductCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Text>Product Card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#ccc',
    margin: 10,
    borderRadius: 8,
  },
});
