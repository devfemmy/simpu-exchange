import { StyleService } from '@ui-kitten/components';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import FONTS from 'src/constants/fonts';
import { hp, wp } from 'src/utils';

interface Styles {
  container: ViewStyle;
  lowerContainer: ViewStyle;
  onboardImage: ImageStyle;
  buttonContainer: ViewStyle;
  buttonStyle: ViewStyle;
  headerText: TextStyle;
  lowerText: TextStyle;
  fineText: TextStyle;
  formContainer: ViewStyle;
}
const styles = StyleService.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lowerContainer: {
    marginVertical: wp(0),
    paddingHorizontal: wp(20),
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
    width: '100%',
    alignSelf: 'center',
    marginVertical: hp(20),
  },
  formContainer: {
    marginVertical: 20,
    paddingHorizontal: hp(20),
    marginBottom: hp(30),
    justifyContent: 'center',
    alignItems: 'center',
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
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: hp(0),
  },
  lowerText: {
    fontSize: 18,
    color: 'color-charcoal',
    fontFamily: FONTS.PRO_REGULAR,
    textAlign: 'center',
    opacity: 0.5,
    lineHeight: 30,
    marginVertical: hp(20),
    marginHorizontal: wp(30),
  },
});
export default styles;
