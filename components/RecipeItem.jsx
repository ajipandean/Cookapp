import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import avatar from '../assets/avatars/avatar-01.jpg';
import recipe from '../assets/recipes/example-01.jpg';
import useTheme from '../hooks/useTheme';

const { radius, typography, palette } = useTheme();

const styles = StyleSheet.create({
  publisherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  publisherAvatarWrapper: {
    borderRadius: radius.pills,
    overflow: 'hidden',
    marginRight: 8,
  },
  publisherName: {
    fontSize: typography.size.sm,
  },
  publishDate: {
    fontSize: typography.size.xs,
    color: palette.text.secondary,
  },
  recipeImageWrapper: {
    overflow: 'hidden',
    marginVertical: 12,
    borderRadius: radius.normal,
  },
  recipeText: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: typography.size.sm,
  },
  metaWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const RecipeItem = () => (
  <View style={{ marginBottom: 24 }}>
    <TouchableOpacity style={styles.publisherContainer}>
      <View style={styles.publisherAvatarWrapper}>
        <Image
          style={{
            width: 32,
            height: 32,
          }}
          source={avatar}
        />
      </View>
      <View>
        <Text style={styles.publisherName}>Chef Junaedi</Text>
        <Text style={styles.publishDate}>Mon, 23 April 2020 01:00 AM</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.recipeImageWrapper}>
      <Image
        style={{
          width: '100%',
          height: 180,
          resizeMode: 'cover',
        }}
        source={recipe}
      />
    </TouchableOpacity>

    <View>
      <Text style={styles.recipeText}>Rendang Daging Wueenaakkkk!!!!</Text>
      <View style={styles.metaWrapper}>
        <View style={styles.metaItem}>
          <MaterialCommunityIcons
            name="clock"
            size={16}
            style={{ color: palette.text.secondary, marginRight: 4 }}
          />
          <Text style={{ color: palette.text.secondary }}>8m</Text>
        </View>
        <View style={styles.metaWrapper}>
          <TouchableOpacity style={[styles.metaItem, { marginRight: 8 }]}>
            <MaterialCommunityIcons
              name="thumb-up"
              size={16}
              style={{ color: palette.text.secondary, marginRight: 4 }}
            />
            <Text style={{ color: palette.text.secondary }}>564k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.metaItem}>
            <MaterialCommunityIcons
              name="comment"
              size={16}
              style={{ color: palette.text.secondary, marginRight: 4 }}
            />
            <Text style={{ color: palette.text.secondary }}>827</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

export default RecipeItem;
