import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import screens from './index';

const Tab = createBottomTabNavigator();

const MainScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      showLabel: false,
      inactiveTintColor: '#888',
    }}
  >
    {screens.map((screen) => (
      <Tab.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name={screen.icon}
              size={size}
              color={color}
            />
          ),
        }}
      />
    ))}
  </Tab.Navigator>
);

export default MainScreen;
