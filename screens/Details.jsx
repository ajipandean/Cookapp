import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import banner from '../assets/recipes/example-01.jpg';
import useTheme from '../hooks/useTheme';
import ingredients from '../data/ingredients';

const { typography, palette } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.common.white,
  },
  banner: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
  recipeTitle: {
    fontSize: typography.size.md,
    fontWeight: '700',
    marginBottom: 16,
  },
  recipeDescription: {
    color: palette.text.secondary,
    marginBottom: 16,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const DetailsScreen = () => (
  <ScrollView>
    <View style={styles.container}>
      <View>
        <Image
          style={styles.banner}
          source={banner}
        />
      </View>
      <View style={{ padding: 24 }}>
        <Text style={styles.recipeTitle}>Rendang Daging Wueeenaaakkk!!!</Text>
        <Text style={styles.recipeDescription}>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusantium itaque
          nemo recusandae expedita optio illo maiores debiti
          s est praesentium, excepturi ea, esse, ratione f
          ugiat nulla iusto hic! Facere, quasi, delectus.
        </Text>
        <View style={{
          ...styles.flexRow,
          justifyContent: 'space-between',
        }}
        >
          <View style={styles.flexRow}>
            {[1, 2, 3, 4, 5].map((i) => (
              <MaterialCommunityIcons
                key={`icon-${i}`}
                name="star"
                size={16}
                color={palette.warning.main}
              />
            ))}
            <Text style={{ marginLeft: 4, color: palette.text.secondary }}>5.0 (123)</Text>
          </View>
          <View style={styles.flexRow}>
            <View style={{
              ...styles.flexRow,
              marginRight: 8,
            }}
            >
              <MaterialCommunityIcons
                name="thumb-up"
                size={16}
                color={palette.text.secondary}
              />
              <Text style={{ marginLeft: 4, color: palette.text.secondary }}>4.5K</Text>
            </View>
            <View style={styles.flexRow}>
              <MaterialCommunityIcons
                name="comment"
                size={16}
                color={palette.text.secondary}
              />
              <Text style={{ marginLeft: 4, color: palette.text.secondary }}>4.5K</Text>
            </View>
          </View>
        </View>

        <View style={{
          ...styles.flexRow,
          marginTop: 24,
          justifyContent: 'space-evenly',
        }}
        >
          <View style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="clock"
              size={32}
              color={palette.text.secondary}
            />
            <Text style={{ color: palette.text.secondary }}>8 minutes</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="silverware"
              size={32}
              color={palette.text.secondary}
            />
            <Text style={{ color: palette.text.secondary }}>8 peple</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="flash"
              size={32}
              color={palette.text.secondary}
            />
            <Text style={{ color: palette.text.secondary }}>450 cal</Text>
          </View>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={{
            fontSize: typography.size.md,
            fontWeight: '700',
            marginBottom: 8,
          }}
          >
            Ingredients
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={ingredients}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginRight: 8 }}>
                <View style={{ borderRadius: 8, overflow: 'hidden' }}>
                  <Image
                    style={{
                      width: 120,
                      height: 120,
                    }}
                    source={item.photo}
                  />
                </View>
                <Text>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  </ScrollView>
);

export default DetailsScreen;
