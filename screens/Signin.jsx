import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import useTheme from '../hooks/useTheme';
import illustration from '../assets/illustrations/undraw_mobile_login_ikmv.png';

const { palette, typography, radius } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.common.white,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustration: {
    width: 312,
    height: 234,
  },
  head: {
    marginTop: 32,
    marginBottom: 16,
    fontWeight: 'bold',
    fontSize: typography.size.xl,
  },
  input: {
    borderColor: palette.common.gray.main,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontFamily: 'Roboto',
    borderRadius: radius.normal,
  },
  button: {
    backgroundColor: palette.primary.main,
    borderRadius: radius.pills,
    padding: 16,
    alignItems: 'center',
  },
});

const SigninScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [shown, setShown] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={{
        padding: 24,
        paddingTop: Constants.statusBarHeight,
      }}
      >
        <View style={[styles.centered]}>
          <Image
            style={styles.illustration}
            source={illustration}
          />
        </View>
        <Text style={styles.head}>Welcome back</Text>
        <View>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            type="text"
            placeholder="Email"
            style={[styles.input, { marginBottom: 8 }]}
          />
          <TextInput
            secureTextEntry={!shown}
            value={password}
            onChangeText={(text) => setPassword(text)}
            textContentType="password"
            placeholder="Password"
            style={styles.input}
          />
          <TouchableOpacity
            style={{ marginTop: 8, marginBottom: 24 }}
            onPress={() => setShown(!shown)}
          >
            <Text style={{ color: palette.text.secondary }}>
              {shown ? 'Hide' : 'Show'}
              {' '}
              password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: palette.common.white }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SigninScreen;
