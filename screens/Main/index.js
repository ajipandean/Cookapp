import HomeScreen from './Home';
import ExploreScreen from './Explore';
import FavoriteScreen from './Favorite';
import ProfileScreen from './Profile';

module.exports = [
  {
    name: 'Home',
    icon: 'home',
    component: HomeScreen,
  },
  {
    name: 'Explore',
    icon: 'compass',
    component: ExploreScreen,
  },
  {
    name: 'Favorites',
    icon: 'heart',
    component: FavoriteScreen,
  },
  {
    name: 'Profile',
    icon: 'account-circle',
    component: ProfileScreen,
  },
];
