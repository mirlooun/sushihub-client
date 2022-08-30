import { View, StyleSheet } from 'react-native';

import { DefaultText, Button } from '@components/base';

import { Colors, NavBarHeight } from '@constants/index';
import { formatCurrency } from '@utils/priceFormatter';

interface TotalContainerProps {
  total: number;
}

const TotalContainer = ({ total }: TotalContainerProps) => {
  const formattedTotal = formatCurrency(total);
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <DefaultText fontSize={'medium'} style={{ color: Colors.Coal }}>
          Subtotal
        </DefaultText>
        <DefaultText fontSize={'medium'} style={{ color: Colors.Coal }}>
          {formattedTotal}
        </DefaultText>
      </View>
      <View style={styles.dash}></View>
      <View style={[styles.textWrapper, { marginBottom: 10 }]}>
        <DefaultText fontSize={'big'}>Total</DefaultText>
        <DefaultText fontSize={'big'} style={{ color: Colors.Coal }}>
          {formattedTotal}
        </DefaultText>
      </View>
      <Button title={'Order'} color={Colors.White} backgroundColor={Colors.Salmon} btnSize={'small'} />
    </View>
  );
};

export default TotalContainer;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    backgroundColor: Colors.White,
    height: 210,
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: NavBarHeight - 10,
  },
  textWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dash: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.Coal,
    marginVertical: 10,
  },
});
