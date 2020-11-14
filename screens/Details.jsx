import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const DetailsScreen = () => (
  <View style={styles.container}>
    <Text>Detail screen</Text>
  </View>
);

export default DetailsScreen;
