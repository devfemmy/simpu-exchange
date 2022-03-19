import { StyleService } from '@ui-kitten/components';
import { TextStyle, ViewStyle } from 'react-native';
import FONTS from 'src/constants/fonts';

import { hp, wp } from 'src/utils';

interface Styles {
  container: ViewStyle;
  headerContainer: ViewStyle;
  channelName: TextStyle;
  channelTime: TextStyle;
  description: TextStyle;
  buttonStyle: ViewStyle;
  headerText: TextStyle;
  buttonText: TextStyle;
  lowerText: TextStyle;
}
const styles = StyleService.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerContainer: {},
  channelName: {
    fontFamily: FONTS.PRO_SEMI_BOLD,
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 22,
    marginHorizontal: hp(80),
    color: '#1B1212',
    marginVertical: hp(40),
  },
  channelTime: {
    fontFamily: FONTS.PRO_REGULAR,
    fontSize: 14,
    lineHeight: 22,
    color: '#1B1212',
  },
  description: {
    fontFamily: FONTS.PRO_REGULAR,
    fontSize: 14,
    lineHeight: 18,
    color: '#1B1212',
  },
  buttonStyle: {
    justifyContent: 'center',
    width: wp(320),
    alignItems: 'center',
    borderRadius: 14,
    marginTop: hp(30),
  },
  buttonText: {
    fontFamily: FONTS.PRO_REGULAR,
    color: 'white',
    lineHeight: 22,
    fontSize: 17,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: hp(0),
  },
  lowerText: {
    fontSize: 16,
    opacity: 0.5,
    textAlign: 'center',
    marginVertical: hp(20),
  },
});
export default styles;
