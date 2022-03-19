import { StyleService } from '@ui-kitten/components';
import { ImageStyle, ViewStyle } from 'react-native';
import { hp, wp } from 'src/utils';

interface Styles {
  lowerContainer: ViewStyle;
  imageStyle: ImageStyle;
  buttonContainer: ViewStyle;
  buttonStyle: ViewStyle;
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
});
export default styles;
