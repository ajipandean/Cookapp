import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SignupScreen = () => (
  <View style={styles.container}>
    <Text>Signup screen</Text>
  </View>
);

export default SignupScreen;
