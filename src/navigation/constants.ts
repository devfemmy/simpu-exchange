import { Dimensions } from 'react-native';

export enum SCREEN_NAME {
  auth = 'app.screen.auth',
  welcome = 'app.screen.auth.welcome',
  phone = 'app.screen.auth.phone',
  otp = 'app.screen.auth.otp',
  main = 'app.screen.main',
  inner = 'app.screen.inner',
  inbox = 'app.screen.inbox',
  settings = 'app.screen.settings',
  simpupay = 'app.screen.simpupay',
  reviewpay = 'app.screen.reviewpay',
  request = 'app.screen.request',
  editprofile = 'app.screen.editprofile',
  privacy = 'app.screen.privacy',
  datastorage = 'app.screen.datastorage',
  channel = 'app.screen.inbox.channel',
  chat = 'app.screen.inbox.chat',
}

export type MainStackParamList = {
  [SCREEN_NAME.auth]: undefined;
  [SCREEN_NAME.welcome]: undefined;
  [SCREEN_NAME.phone]: undefined;
  [SCREEN_NAME.otp]: undefined;
  [SCREEN_NAME.main]: undefined;
  [SCREEN_NAME.inner]: undefined;
  [SCREEN_NAME.inbox]: undefined;
  [SCREEN_NAME.settings]: undefined;
  [SCREEN_NAME.simpupay]: undefined;
  [SCREEN_NAME.channel]: undefined;
  [SCREEN_NAME.chat]: undefined;
  [SCREEN_NAME.request]: undefined;
  [SCREEN_NAME.reviewpay]: undefined;
  [SCREEN_NAME.editprofile]: undefined;
  [SCREEN_NAME.privacy]: undefined;
  [SCREEN_NAME.datastorage]: undefined;
};

export const isLargeScreen = Dimensions.get('window').height > 700;
