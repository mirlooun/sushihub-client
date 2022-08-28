import Colors from '@constants/colors';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import Header from '@components/header/Header';
import MenuItemList from '@components/menu-item-list/MenuItemList';
import { ScrollView } from 'react-native-gesture-handler';
import CategoryChoice from '@components/header/CategoryChoice';
import BaseScreen from '@components/base/BaseScreen';

const Home = () => {
  return (
    <BaseScreen>
      <ScrollView stickyHeaderIndices={[1]}>
        <Header />
        <CategoryChoice />
        <MenuItemList />
        <ExpoStatusBar style="auto" backgroundColor={Colors.Grey} />
      </ScrollView>
    </BaseScreen>
  );
};

export default Home;
