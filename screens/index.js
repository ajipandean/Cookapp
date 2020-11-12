import WelcomeScreen from './Welcome';
import SigninScreen from './Signin';
import SignupScreen from './Signup';
import MainScreen from './Main/Main';

module.exports = [
  {
    name: 'Welcome',
    component: WelcomeScreen,
    options: {
      headerTitleAlign: 'center',
      headerShown: false,
    },
  },
  {
    name: 'Signin',
    component: SigninScreen,
    options: {},
  },
  {
    name: 'Signup',
    component: SignupScreen,
    options: {},
  },
  {
    name: 'Main',
    component: MainScreen,
    options: {},
  },
];
