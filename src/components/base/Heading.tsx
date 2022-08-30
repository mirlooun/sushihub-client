import { StyleSheet } from 'react-native';

import DefaultText from '@components/base/DefaultText';

interface HeadingProps {
  name: string;
}

const Heading = ({ name }: HeadingProps) => {
  return (
    <DefaultText fontSize={'big'} style={styles.heading}>
      {name}
    </DefaultText>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    alignSelf: 'center',
  },
});
