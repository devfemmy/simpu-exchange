import { Dimensions } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

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
  managesocials = 'app.screen.managesocials',
  manageaccount = 'app.screen.manageaccount',
  updateaccount = 'app.screen.updateaccount',
  connectsocials = 'app.screen.connectsocials',
  quickreplies = 'app.screen.quickreplies',
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
  [SCREEN_NAME.managesocials]: undefined;
  [SCREEN_NAME.manageaccount]: undefined;
  [SCREEN_NAME.updateaccount]: {
    name: string;
  };
  [SCREEN_NAME.connectsocials]: {
    name: string;
  };
  [SCREEN_NAME.quickreplies]: undefined;
};
export type SocialScreenRouteProp = RouteProp<
  MainStackParamList,
  SCREEN_NAME.connectsocials
>;
export type UpdateAccountScreenRouteProp = RouteProp<
  MainStackParamList,
  SCREEN_NAME.updateaccount
>;
export type QuickReplyNavigationProp = StackNavigationProp<
  MainStackParamList,
  SCREEN_NAME.quickreplies
>;

export const isLargeScreen = Dimensions.get('window').height > 700;
