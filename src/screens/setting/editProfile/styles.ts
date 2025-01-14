import { StyleService } from '@ui-kitten/components';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { hp, wp } from 'src/utils';

interface Styles {
  container: ViewStyle;
  profileContainer: ViewStyle;
  overLay: ViewStyle;
  cameraStyle: ViewStyle;
  inputContainer: ViewStyle;
  card: ViewStyle;
  inputStyle: ViewStyle;
  imageStyle: ImageStyle;
  textStyle: TextStyle;
  nameText: TextStyle;
  logOut: TextStyle;
}
const styles = StyleService.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  profileContainer: {
    backgroundColor: 'white',
    marginTop: 1,
    padding: wp(15),
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  inputContainer: {
    width: '75%',
  },
  inputStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  overLay: {
    opacity: 0.6,
    backgroundColor: '#000000',
    borderRadius: 33,
    height: hp(66),
  },
  imageStyle: {
    height: hp(66),
  },
  textStyle: {
    fontSize: hp(17),
  },
  nameText: {
    fontSize: hp(17),
    color: '#636366',
    margin: wp(15),
    lineHeight: 22,
  },
  cameraStyle: {
    position: 'relative',
    top: wp(-35),
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
    marginBottom: hp(25),
    minHeight: hp(44),
  },
  logOut: {
    color: '#DA1414',
    fontSize: hp(17),
  },
});
export default styles;
