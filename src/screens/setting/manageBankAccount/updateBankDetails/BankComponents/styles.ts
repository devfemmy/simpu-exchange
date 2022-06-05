import { StyleService } from '@ui-kitten/components';
import { TextStyle, ViewStyle } from 'react-native';
import { hp } from 'src/utils';

interface Styles {
  container: ViewStyle;
  addContainer: ViewStyle;
  headerText: TextStyle;
  scanText: TextStyle;
  description: TextStyle;
  addText: TextStyle;
  addressContainer: ViewStyle;
  countryCode: ViewStyle;
  phoneContainer: ViewStyle;
  identity: ViewStyle;
  relativeContainer: ViewStyle;
  selectContainer: ViewStyle;
  textIdentity: TextStyle;
  desc: TextStyle;
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
    color: '#0E1B42',
    fontWeight: '400',
    lineHeight: hp(22),
    fontSize: hp(16),
  },
  addContainer: {
    marginTop: hp(15),
  },
  addressContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(60, 60, 67, 0.29)',
  },
  phoneContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(60, 60, 67, 0.29)',
  },
  countryCode: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  identity: {
    marginTop: 40,
  },
  relativeContainer: {
    marginBottom: hp(30),
  },
  description: {
    lineHeight: hp(22),
  },
  scanText: {
    fontSize: hp(20),
    marginBottom: 5,
    fontWeight: '400',
  },
  selectContainer: {
    borderWidth: 0,
    marginBottom: hp(30),
  },
  textIdentity: {
    marginBottom: hp(10),
  },
  desc: {
    opacity: 0.3,
    marginVertical: hp(25),
  },
});
export default styles;
