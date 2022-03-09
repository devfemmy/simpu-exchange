import {StyleService} from '@ui-kitten/components';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {hp, wp} from 'src/utils';

interface Styles {
  lowerContainer: ViewStyle;
  imageStyle: ImageStyle;
  buttonContainer: ViewStyle;
  buttonStyle: ViewStyle;
  headerText: TextStyle;
  lowerText: TextStyle;
}
const styles = StyleService.create<Styles>({
  lowerContainer: {
    marginVertical: wp(0),
    paddingHorizontal: wp(20),
  },
  imageStyle: {
    height: '75%',
    resizeMode: 'contain',
    marginTop: hp(20),
  },
  buttonContainer: {
    marginHorizontal: 30,
  },
  buttonStyle: {
    width: '100%',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: hp(10),
  },
  lowerText: {
    fontSize: 16,
    opacity: 0.5,
    textAlign: 'center',
  },
});
export default styles;
