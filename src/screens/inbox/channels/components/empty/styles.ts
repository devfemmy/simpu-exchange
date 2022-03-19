import { StyleService } from '@ui-kitten/components';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import FONTS from 'src/constants/fonts';
import { hp, wp } from 'src/utils';

interface Styles {
  container: ViewStyle;
  emptyText: TextStyle;
  onboardImage: ImageStyle;
  buttonContainer: ViewStyle;
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
    paddingVertical: hp(50),
  },
  emptyText: {
    fontFamily: FONTS.PRO_REGULAR,
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 22,
    marginHorizontal: hp(80),
    color: '#6F7FAF',
    marginVertical: hp(40),
  },
  onboardImage: {
    height: '75%',
    resizeMode: 'contain',
    marginTop: hp(20),
  },
  buttonContainer: {
    marginHorizontal: 30,
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
