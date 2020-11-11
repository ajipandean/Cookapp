import WelcomeScreen from './Welcome';
import SigninScreen from './Signin';
import SignupScreen from './Signup';
import MainScreen from './Main/Main';

module.exports = [
  {
    name: 'Welcome',
    component: WelcomeScreen,
  },
  {
    name: 'Signin',
    component: SigninScreen,
  },
  {
    name: 'Signup',
    component: SignupScreen,
  },
  {
    name: 'Main',
    component: MainScreen,
  },
];
