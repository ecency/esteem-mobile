import {
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';
import { BaseNavigator } from '../navigation';
import { default as ROUTES } from '../constants/routeNames';

// Screens
import {
  Editor,
  Follows,
  Login,
  PinCode,
  Post,
  Profile,
  RootComponent,
  Settings,
  Splash,
  SteemConnect,
  Voters,
} from '../screens';

// Components
import { SideMenu, Search } from '../components';

const mainNavigation = createDrawerNavigator(
  {
    [ROUTES.SCREENS.HOME]: {
      screen: BaseNavigator,
    },
  },
  {
    contentComponent: SideMenu,
  },
);

const stackNavigatior = createStackNavigator(
  {
    [ROUTES.DRAWER.MAIN]: {
      screen: mainNavigation,
      navigationOptions: {
        header: () => null,
      },
    },
    [ROUTES.SCREENS.PROFILE]: {
      screen: RootComponent()(Profile),
      navigationOptions: {
        header: () => null,
      },
    },
    [ROUTES.SCREENS.POST]: {
      screen: Post,
      navigationOptions: {
        header: () => null,
      },
    },
    [ROUTES.SCREENS.EDITOR]: {
      screen: RootComponent()(Editor),
      navigationOptions: {
        header: () => null,
      },
    },
    [ROUTES.SCREENS.VOTERS]: {
      screen: RootComponent()(Voters),
      navigationOptions: {
        header: () => null,
      },
    },
    [ROUTES.SCREENS.FOLLOWS]: {
      screen: RootComponent()(Follows),
      navigationOptions: {
        header: () => null,
      },
    },
    [ROUTES.SCREENS.SETTINGS]: {
      screen: RootComponent()(Settings),
      navigationOptions: {
        header: () => null,
      },
    },
    [ROUTES.SCREENS.SEARCH_MODAL]: {
      screen: Search,
      navigationOptions: {
        mode: 'modal',
        header: () => null,
      },
    },
  },
  {
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 1,
    },
    transitionConfig: () => ({
      containerStyle: {
        backgroundColor: 'transparent',
      },
    }),
  },
);

export default createSwitchNavigator(
  {
    stackNavigatior,
    [ROUTES.SCREENS.LOGIN]: { screen: RootComponent()(Login) },
    [ROUTES.SCREENS.PINCODE]: { screen: RootComponent()(PinCode) },
    [ROUTES.SCREENS.SPLASH]: { screen: Splash },
    [ROUTES.SCREENS.STEEM_CONNECT]: { screen: RootComponent()(SteemConnect) },
  },
  {
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 1,
    },
    transitionConfig: () => ({
      containerStyle: {
        backgroundColor: 'transparent',
      },
    }),
  },
);
