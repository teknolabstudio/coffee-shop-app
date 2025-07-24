// screens/CartScreen.js
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

export default function CartScreen() {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(2);

  const subtotal = 100000;
  const discount = 25000;
  const total = subtotal - discount;

  const CartItem = ({ quantity, setQuantity }) => (
    <View style={styles.card}>
      <Image
        source={require('../assets/images/photocoffee.png')}
        style={styles.cardImage}
      />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.title}>Coffee</Text>
        <Text style={styles.subtitle}>With Sugar</Text>
        <Text style={styles.price}>Rp 50.000</Text>

        <Text style={styles.infoText}>
          Cup Size: <Text style={styles.bold}>Small</Text>
        </Text>
        <Text style={styles.infoText}>
          Level Sugar: <Text style={styles.bold}>No Sugar</Text>
        </Text>
      </View>
      <View style={styles.quantityBox}>
        <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
          <Ionicons name="remove" size={20} color="#333" />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
          <Ionicons name="add" size={20} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Cart Items */}
        <CartItem quantity={quantity1} setQuantity={setQuantity1} />
        <CartItem quantity={quantity2} setQuantity={setQuantity2} />

        {/* Price Summary */}
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Subtotal</Text>
          <Text style={styles.priceValue}>Rp {subtotal.toLocaleString()}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Discount</Text>
          <Text style={styles.priceValue}>Rp {discount.toLocaleString()}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>Rp {total.toLocaleString()}</Text>
        </View>

        {/* Payment Methods */}
        <Text style={styles.paymentTitle}>Payment</Text>
        <View style={styles.paymentRow}>
          <Image
            source={require('../assets/images/Visa.png')}
            style={styles.paymentIcon}
          />
          <Image
            source={require('../assets/images/Paypal.png')}
            style={styles.paymentIcon}
          />
          <Image
            source={require('../assets/images/Mastercard.png')}
            style={styles.paymentIcon}
          />
        </View>

        {/* Buy Button */}
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.footerNav}>
        <Ionicons name="home-outline" size={24} color="#999" />
        <Ionicons name="heart-outline" size={24} color="#999" />
        <Ionicons name="cart" size={24} color="#D2691E" />
        <Ionicons name="person-outline" size={24} color="#999" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 12,
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  title: { fontSize: 16, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#888', marginVertical: 2 },
  price: { fontSize: 14, fontWeight: 'bold', marginBottom: 6 },
  infoText: { fontSize: 13, color: '#555' },
  bold: { fontWeight: 'bold' },
  quantityBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
  },
  quantityText: { fontSize: 16, fontWeight: 'bold' },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  priceLabel: { fontSize: 16, color: '#333' },
  priceValue: { fontSize: 16, fontWeight: 'bold' },
  totalLabel: { fontSize: 18, fontWeight: 'bold' },
  totalValue: { fontSize: 18, fontWeight: 'bold', color: '#D2691E' },
  paymentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 30,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginTop: 10,
  },
  paymentIcon: {
    width: 60,
    height: 40,
    marginRight: 16,
    resizeMode: 'contain',
  },
  buyButton: {
    backgroundColor: '#D2691E',
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buyButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
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
