import { StyleService } from '@ui-kitten/components';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import FONTS from 'src/constants/fonts';
import { hp, wp } from 'src/utils';

interface Styles {
  container: ViewStyle;
  listContainer: ViewStyle;
  tabContainer: ViewStyle;
  tab: ViewStyle;
  tabText: TextStyle;
  tabInactive: ViewStyle;
  tabTextInactive: TextStyle;
  lowerContainer: ViewStyle;
  onboardImage: ImageStyle;
  buttonContainer: ViewStyle;
  buttonStyle: ViewStyle;
  headerText: TextStyle;
  lowerText: TextStyle;
}
const styles = StyleService.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: hp(20),
    marginHorizontal: wp(10),
  },
  tab: {
    borderRadius: 14,
    backgroundColor: 'rgba(0,0,0,0.06)',
    padding: 10,
    minWidth: wp(170),
    minHeight: hp(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontFamily: FONTS.PRO_REGULAR,
    fontSize: 13,
    lineHeight: 16,
    color: 'color-charcoal',
    fontWeight: '700',
  },
  tabInactive: {
    borderRadius: 14,
    backgroundColor: 'transparent',
    padding: 10,
    minWidth: wp(170),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTextInactive: {
    fontFamily: FONTS.PRO_REGULAR,
    fontSize: 13,
    lineHeight: 16,
    opacity: 0.5,
    color: 'color-charcoal',
    fontWeight: '700',
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
    width: '80%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
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
