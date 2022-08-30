import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '@constants/colors';
import DefaultText from '@components/base/DefaultText';
import Icon from '@components/base/Icon';

export const CartControls = (props: { amount: number; handleAmountChange: (action: 'add' | 'remove') => void }) => {
  return (
    <View style={styles.controls}>
      <DefaultText fontSize={'medium'} textType={'regular'} style={{ color: Colors.Coal }}>
        Amount
      </DefaultText>
      <View style={styles.innerWrapper}>
        <TouchableOpacity onPress={() => props.handleAmountChange('remove')}>
          <Icon name={'remove'} />
        </TouchableOpacity>
        <DefaultText fontSize={'pre-big'} textType={'regular'}>
          {props.amount}
        </DefaultText>
        <TouchableOpacity onPress={() => props.handleAmountChange('add')}>
          <Icon name={'add'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    minWidth: 80,
    flexDirection: 'column',
  },
  innerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
