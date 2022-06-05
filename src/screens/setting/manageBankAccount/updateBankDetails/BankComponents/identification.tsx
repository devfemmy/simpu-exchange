import React from 'react';
import { View } from 'react-native';
import { IndexPath, Select, SelectItem, Text } from '@ui-kitten/components';
import { Input } from 'src/components/common/CustomInput';
import styles from './styles';
import PassportImg from '../../../../../assets/images/passport_img.svg';
import { globalStyles } from 'src/styles/globalStyles';
import { Button } from 'src/components/common/Button';
import { ScrollView } from 'react-native-gesture-handler';

const Identification = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<any>(
    new IndexPath(0),
  );
  const data = ['National ID (NIN)', 'Passport'];
  const displayValue = data[selectedIndex.row];
  const renderOption = (title: string) => <SelectItem title={title} />;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.addText}>You must add a government issued ID.</Text>
        <View style={styles.addContainer}>
          <View>
            <Text style={styles.textIdentity}>Identification Type</Text>
            <Select
              style={styles.selectContainer}
              value={displayValue}
              selectedIndex={selectedIndex}
              onSelect={index => setSelectedIndex(index)}
            >
              {data.map(renderOption)}
            </Select>
          </View>
          <Input placeholder="National Identification Number" />
          <View style={[globalStyles.shadowCard, styles.identity]}>
            <View style={[styles.relativeContainer, globalStyles.rowCenter]}>
              <PassportImg width={150} height={130} />
            </View>
            <View>
              <Text style={[globalStyles.textCenter, styles.scanText]}>
                Scan or upload NIN slip
              </Text>
              <Text style={[globalStyles.textCenter, styles.description]}>
                This information is required by our regulators and financial
                partners. It is completely secure and confidential.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.relativeContainer}>
        <Button title="Submit" />
      </View>
    </View>
  );
};

export default Identification;
