// screens/WelcomeScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/images/backgroundss.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        {/* Gambar Totebag & Cup */}
        <Image source={require('../assets/images/bagncup.png')} style={styles.bagcup} />

        {/* Teks Judul */}
        <Text style={styles.title}>
          Coffee so good your{'\n'}taste buds will love it
        </Text>

        {/* Teks Deskripsi */}
        <Text style={styles.subtitle}>
          The best grain, the finest roast, the most powerful flavor.
        </Text>

        {/* Tombol Get Started */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)', // Supaya teks tetap terlihat
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 60,
  },
    bagcup: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginTop: 100,
    },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#eee',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#D2691E',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
