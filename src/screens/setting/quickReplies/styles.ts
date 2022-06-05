import { StyleService } from '@ui-kitten/components';
import { TextStyle, ViewStyle } from 'react-native';
import { hp, wp } from 'src/utils';

interface Styles {
  container: ViewStyle;
  navHeader: ViewStyle;
  modalize: ViewStyle;
  list: ViewStyle;
  headerText: TextStyle;
  textColor: TextStyle;
  navText: TextStyle;
  message: TextStyle;
}
const styles = StyleService.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    paddingTop: hp(25),
  },
  headerText: {
    color: '#636366',
    fontSize: hp(16),
    fontWeight: '400',
    marginHorizontal: hp(13),
    marginBottom: 10,
  },
  navHeader: {
    paddingHorizontal: wp(10),
  },
  navText: {
    color: '#3525E6',
    fontWeight: '600',
  },
  modalize: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  textColor: {
    color: '#3525E6',
  },
  message: {
    opacity: 0.3,
    marginTop: hp(5),
  },
  list: {
    backgroundColor: 'white',
    padding: hp(10),
  },
});
export default styles;
