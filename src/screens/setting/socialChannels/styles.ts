import { StyleService } from '@ui-kitten/components';
import { TextStyle, ViewStyle } from 'react-native';
import { hp } from 'src/utils';

interface Styles {
  container: ViewStyle;
  addContainer: ViewStyle;
  headerText: TextStyle;
  addText: TextStyle;
}
const styles = StyleService.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: hp(20),
  },
  headerText: {
    color: '#636366',
    fontSize: hp(16),
    fontWeight: '400',
    marginHorizontal: hp(13),
    marginBottom: 10,
  },
  addText: {
    color: '#3525E6',
    fontWeight: 'bold',
  },
  addContainer: {
    marginTop: hp(8),
  },
});
export default styles;
