import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import LoginBlockButton from '../components/LoginBlockButton';
import useTheme from '../hooks/useTheme';
import illustration from '../assets/illustrations/undraw_cooking_lyxy.png';

const { palette, typography } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    paddingTop: Constants.statusBarHeight,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustration: {
    width: 312,
    height: 296,
  },
  brand: {
    fontSize: typography.size.xl,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  motto: {
    fontSize: typography.size.sm,
    color: palette.text.secondary,
  },
  row: { flexDirection: 'row' },
});

const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.centered}>
      <Image
        style={styles.illustration}
        source={illustration}
      />
    </View>
    <View style={[styles.centered, { marginTop: 32 }]}>
      <Text style={styles.brand}>
        Cookapp
      </Text>
      <Text style={styles.motto}>
        Sharing recipes of hapiness world wide
      </Text>
    </View>
    <View style={{ marginVertical: 24 }}>
      <LoginBlockButton
        icon={{ name: 'email', color: palette.common.white }}
        label={{ placeholder: 'Sign in with Email', color: palette.common.white }}
        style={{ backgroundColor: palette.primary.main, marginBottom: 8 }}
        onPress={() => navigation.navigate('Signin')}
      />
      <LoginBlockButton
        icon={{ name: 'google', color: palette.text.primary }}
        label={{ placeholder: 'Sign in with Google', color: palette.text.primary }}
        style={{ backgroundColor: palette.common.gray.light }}
        onPress={() => {}}
      />
    </View>
    <View style={[styles.centered, styles.row]}>
      <Text style={{ color: palette.text.primary }}>
        Don&#8216;t have an account?
      </Text>
      <TouchableOpacity
        style={{ marginLeft: 4 }}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={{ color: palette.primary.main }}>Sign up</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default WelcomeScreen;
