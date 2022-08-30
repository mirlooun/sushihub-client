import moment from 'moment';
import { View } from 'react-native';

import DefaultText from '@components/base/DefaultText';

import { Colors } from '@constants/index';
import useAuth from '@context/userContext';

const Greeting = () => {
  const { getUser } = useAuth();
  const currentTime = moment();
  const morning = moment(currentTime.format('YYYY-MM-DD') + ' 06:00');
  const afternoon = moment(currentTime.format('YYYY-MM-DD') + ' 12:00');
  const evening = moment(currentTime.format('YYYY-MM-DD') + ' 18:00');
  const nextDay = currentTime.clone().add(1, 'day').startOf('day');

  let greetingTime;

  if (currentTime.isBetween(morning, afternoon)) {
    greetingTime = 'Morning';
  } else if (currentTime.isBetween(morning, evening)) {
    greetingTime = 'Afternoon';
  } else if (currentTime.isBetween(evening, nextDay)) {
    greetingTime = 'Evening';
  }

  const greetingMessage = `${greetingTime}, ${getUser()?.firstName}`;

  return (
    <View>
      <DefaultText textType={'light'} fontSize={'medium'} style={{ color: Colors.Coal }}>
        {greetingMessage}
      </DefaultText>
    </View>
  );
};

export default Greeting;
