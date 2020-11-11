import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>Profile screen</Text>
  </View>
);

export default ProfileScreen;
