import { StyleService } from '@ui-kitten/components';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import FONTS from 'src/constants/fonts';
import { hp, wp } from 'src/utils';

interface Styles {
  container: ViewStyle;
  lowerContainer: ViewStyle;
  formContainer: ViewStyle;
  onboardImage: ImageStyle;
  buttonContainer: ViewStyle;
  buttonStyle: ViewStyle;
  headerText: TextStyle;
  lowerText: TextStyle;
  fineText: TextStyle;
  cellStyle: ViewStyle;
  cellFocusedStyle: ViewStyle;
  otp: TextStyle;
}
const styles = StyleService.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lowerContainer: {
    marginVertical: wp(0),
    paddingHorizontal: wp(20),
    marginHorizontal: wp(40),
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
    width: '80%',
    alignSelf: 'center',
    marginVertical: hp(20),
  },
  headerText: {
    fontFamily: FONTS.PRO_REGULAR,
    fontSize: 24,
    textAlign: 'center',
    marginVertical: hp(20),
  },
  lowerText: {
    fontSize: 16,
    opacity: 0.5,
    textAlign: 'center',
    marginVertical: hp(5),
    fontFamily: FONTS.PRO_REGULAR,
  },
  fineText: {
    fontSize: 12,
    textAlign: 'center',
    marginVertical: hp(5),
    lineHeight: 18,
    fontFamily: FONTS.PRO_REGULAR,
    color: 'color-neutral-5',
    paddingHorizontal: wp(50),
  },
  cellStyle: {
    borderBottomWidth: 2,
    borderColor: 'color-info-500',
  },
  cellFocusedStyle: {
    borderColor: 'black',
  },
  formContainer: {
    marginVertical: 20,
    paddingHorizontal: hp(20),
    marginBottom: hp(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  otp: {
    fontFamily: FONTS.PRO_REGULAR,
    fontSize: 14,
    lineHeight: 30,
    alignSelf: 'center',
    color: 'color-info-500',
  },
});
export default styles;
