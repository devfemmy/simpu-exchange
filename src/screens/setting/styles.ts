import { StyleService } from '@ui-kitten/components';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { hp, wp } from 'src/utils';

interface Styles {
  container: ViewStyle;
  lowerContainer: ViewStyle;
  onboardImage: ImageStyle;
  buttonContainer: ViewStyle;
  buttonStyle: ViewStyle;
  headerText: TextStyle;
  lowerText: TextStyle;
  nameContainer: ViewStyle;
  cardList: ViewStyle;
}
const styles = StyleService.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  lowerContainer: {
    marginVertical: wp(0),
    paddingHorizontal: wp(20),
  },
  onboardImage: {
    height: hp(79),
    resizeMode: 'contain',
    marginTop: hp(5),
    borderRadius: 25,
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
    fontSize: 18,
    textAlign: 'center',
    marginBottom: hp(3),
    color: '#0A0748',
    fontWeight: '600',
    lineHeight: 22,
  },
  lowerText: {
    fontSize: 15,
    opacity: 0.5,
    textAlign: 'center',
    marginVertical: 1.5,
  },
  nameContainer: {
    backgroundColor: 'white',
    minHeight: hp(100),
    paddingVertical: hp(20),
    marginBottom: hp(10),
  },
  cardList: {
    backgroundColor: 'white',
    marginVertical: hp(10),
    marginHorizontal: hp(10),
    borderRadius: 10,
  },
});
export default styles;
