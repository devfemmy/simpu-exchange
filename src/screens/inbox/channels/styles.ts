import { StyleService } from '@ui-kitten/components';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { hp, wp } from 'src/utils';

interface Styles {
  container: ViewStyle;
  listContainer: ViewStyle;
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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
