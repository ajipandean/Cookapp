import WelcomeScreen from './Welcome';
import SigninScreen from './Signin';
import SignupScreen from './Signup';
import MainScreen from './Main/Main';

module.exports = [
  {
    name: 'Welcome',
    component: WelcomeScreen,
    options: { headerShown: false },
  },
  {
    name: 'Signin',
    component: SigninScreen,
    options: { headerShown: false },
  },
  {
    name: 'Signup',
    component: SignupScreen,
    options: {},
  },
  {
    name: 'Main',
    component: MainScreen,
    options: { headerShown: false },
  },
];
