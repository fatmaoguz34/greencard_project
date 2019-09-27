import {createStackNavigator,createAppContainer} from 'react-navigation';


import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import ForgotPassword from './src/pages/ForgotPassword';


const RootStack = createStackNavigator(
  
{
  Signup:Signup,
  Login:Login,
  ForgotPassword:ForgotPassword,
  
  
},

{
  initialRouteName: 'Login',
  headerMode: 'none',
  defaultNavigationOptions:{
  headerVisible: false,

 }
  
});

const App = createAppContainer(RootStack);

export default App;
