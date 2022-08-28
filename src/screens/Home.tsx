import Colors from '@constants/colors';
import Header from '@components/header/Header';
import MenuItemList from '@components/menu-item-list/MenuItemList';
import { ScrollView } from 'react-native-gesture-handler';
import CategoryChoice from '@components/header/CategoryChoice';
import BaseScreen from '@components/base/BaseScreen';

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
