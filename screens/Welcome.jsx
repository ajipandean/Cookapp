import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import illustration from '../assets/illustrations/undraw_cooking_lyxy.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    paddingTop: Constants.statusBarHeight,
  },
});

const WelcomeScreen = () => (
  <View style={styles.container}>
    <View style={{ alignItems: 'center' }}>
      <Image
        style={{
          width: 312,
          height: 296,
        }}
        source={illustration}
      />
    </View>
    <View style={{ marginTop: 32, alignItems: 'center' }}>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
      }}
      >
        Cookapp
      </Text>
      <Text style={{
        fontSize: 16,
        color: '#888',
      }}
      >
        Sharing recipes of hapiness world wide
      </Text>
    </View>
    <View style={{ marginVertical: 24 }}>
      <TouchableOpacity style={{
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF4D00',
        borderRadius: 100,
        marginBottom: 8,
      }}
      >
        <MaterialCommunityIcons name="email" size={24} color="white" />
        <Text style={{ color: 'white', marginLeft: 8 }}>Login with Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 100,
      }}
      >
        <MaterialCommunityIcons name="google" size={24} color="#444" />
        <Text style={{ color: '#444', marginLeft: 8 }}>Login with Google</Text>
      </TouchableOpacity>
    </View>
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <Text style={{ color: '#444' }}>Don&#8216;t have an account?</Text>
      <TouchableOpacity style={{ marginLeft: 4 }}>
        <Text style={{ color: '#FF4D00' }}>Sign up</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default WelcomeScreen;
