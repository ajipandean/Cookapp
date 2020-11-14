import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';
import RecipeItem from '../../components/RecipeItem';
import banner from '../../assets/banners/banner-01.jpg';
import avatar from '../../assets/avatars/avatar-01.jpg';

const { palette, radius, typography } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.common.white,
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  avatar: {
    width: 80,
    height: 80,
  },
  imageOuterWrapper: {
    position: 'absolute',
    bottom: -50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  imageInnerWrapper: {
    zIndex: 1,
    borderRadius: radius.pills,
    overflow: 'hidden',
    borderWidth: 8,
    borderColor: palette.common.white,
  },
  username: {
    fontSize: typography.size.md,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 4,
    color: palette.text.secondary,
  },
  followButton: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: palette.primary.main,
    borderRadius: radius.pills,
    flexDirection: 'row',
    alignItems: 'center',
  },
  followButtonLabel: {
    marginLeft: 4,
    color: palette.common.white,
  },
  recipesTitle: {
    marginBottom: 24,
    fontSize: typography.size.md,
    fontWeight: 'bold',
  },
});

const ProfileScreen = () => (
  <View style={styles.container}>
    <View style={{ position: 'relative' }}>
      <Image
        style={styles.banner}
        source={banner}
      />
      <View style={styles.imageOuterWrapper}>
        <View style={styles.imageInnerWrapper}>
          <Image
            style={styles.avatar}
            source={avatar}
          />
        </View>
      </View>
    </View>
    <ScrollView>
      <View style={{ alignItems: 'center', marginTop: 58, paddingHorizontal: 24 }}>
        <Text style={styles.username}>Chef Junaedi</Text>
        <Text style={styles.description}>Love cooking more than anything.</Text>
        <TouchableOpacity style={styles.followButton}>
          <MaterialCommunityIcons
            name="plus"
            size={24}
            color={palette.common.white}
          />
          <Text style={styles.followButtonLabel}>Follow</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 24, marginTop: 24 }}>
        <Text style={styles.recipesTitle}>My Recipes</Text>
        <View>
          {[1, 2, 3, 4, 5].map((i) => (
            <RecipeItem key={i} />
          ))}
        </View>
      </View>
    </ScrollView>
  </View>
);

export default ProfileScreen;
