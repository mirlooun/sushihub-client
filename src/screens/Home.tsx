import { ScrollView } from 'react-native';

import BaseScreen from '@components/base/BaseScreen';
import { Header, CategoryChoice } from '@components/header';
import MenuItemList from '@components/menu-item-list/MenuItemList';

import Colors from '@constants/colors';

const Home = () => {
  return (
    <BaseScreen backgroundColor={Colors.Grey}>
      <ScrollView stickyHeaderIndices={[1]}>
        <Header />
        <CategoryChoice />
        <MenuItemList />
      </ScrollView>
    </BaseScreen>
  );
};

export default Home;
