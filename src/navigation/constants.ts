import { Dimensions } from 'react-native';

export enum SCREEN_NAME {
  inbox = 'app.screen.inbox',
  settings = 'app.screen.settings',
  simpupay = 'app.screen.simpupay',
}


export type MainStackParamList = {
  [SCREEN_NAME.inbox]: undefined;
};


export const isLargeScreen = Dimensions.get('window').height > 700;
