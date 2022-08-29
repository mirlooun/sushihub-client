import DefaultText from '@components/base/DefaultText';
import BaseScreen from '@components/base/BaseScreen';
import Colors from '@constants/colors';

const Welcome = () => {
  return (
    <BaseScreen backgroundColor={Colors.White}>
      <DefaultText>Welcome</DefaultText>
    </BaseScreen>
  );
};

export default Welcome;
