import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import BlockButton from '../components/BlockButton';
import FormInputField from '../components/FormInputField';
import illustration from '../assets/illustrations/undraw_fill_forms_yltj.png';
import useTheme from '../hooks/useTheme';

const { palette, typography } = useTheme();

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
    height: 198,
  },
  head: {
    fontWeight: 'bold',
    fontSize: typography.size.xl,
  },
});

const SignupScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={{
        padding: 24,
        paddingTop: Constants.statusBarHeight,
      }}
      >
        <View style={styles.centered}>
          <Image
            style={[styles.illustration, { marginTop: 24 }]}
            source={illustration}
          />
        </View>
        <View style={{ marginTop: 32, marginBottom: 16 }}>
          <Text style={styles.head}>Join with us</Text>
        </View>
        <View>
          <FormInputField
            state={email}
            setState={setEmail}
            options={{
              keyboardType: 'email-address',
              placeholder: 'Email...',
            }}
          />
          <FormInputField
            state={password}
            setState={setPassword}
            options={{
              placeholder: 'Password...',
              secureTextEntry: true,
            }}
          />
          <FormInputField
            state={confirmPass}
            setState={setConfirmPass}
            options={{
              placeholder: 'Confirm password...',
              secureTextEntry: true,
            }}
          />
        </View>
        <TouchableOpacity style={{ marginBottom: 24 }}>
          <Text style={{ color: palette.text.secondary }}>Show password</Text>
        </TouchableOpacity>
        <BlockButton
          label="Sign up"
          bgColor={palette.primary.main}
          textColor={palette.common.white}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
