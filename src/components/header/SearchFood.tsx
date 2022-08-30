import DefaultText from '@components/base/DefaultText';
import Search from '@components/header/Search';

const SearchFood = () => {
  return (
    <>
      <DefaultText fontSize={'big'}>What do you want to eat today?</DefaultText>
      <Search />
    </>
  );
};

export default SearchFood;
