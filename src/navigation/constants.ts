import {Dimensions} from 'react-native';

export enum SCREEN_NAME {
  auth = 'app.screen.auth',
  welcome = 'app.screen.auth.welcome',
  phone = 'app.screen.auth.phone',
  otp = 'app.screen.auth.otp',
  main = 'app.screen.main',
  inbox = 'app.screen.inbox',
  settings = 'app.screen.settings',
  simpupay = 'app.screen.simpupay',
}

export type MainStackParamList = {
  [SCREEN_NAME.auth]: undefined;
  [SCREEN_NAME.welcome]: undefined;
  [SCREEN_NAME.phone]: undefined;
  [SCREEN_NAME.otp]: undefined;
  [SCREEN_NAME.main]: undefined;
  [SCREEN_NAME.inbox]: undefined;
  [SCREEN_NAME.settings]: undefined;
  [SCREEN_NAME.simpupay]: undefined;
};

export const isLargeScreen = Dimensions.get('window').height > 700;
