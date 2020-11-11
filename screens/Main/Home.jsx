import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Home screen</Text>
  </View>
);

export default HomeScreen;
