import { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import DefaultText from '@components/base/DefaultText';

import Colors from '@constants/colors';

const CategoryChoice = () => {
  const categories = ['All', 'Urumaki', 'Tempura Maki', 'Hosomaki', 'Backed Maki', 'Drinks', 'Additional'];

  const [choosenCategory, setChoosenCategory] = useState('All');

  return (
    <View style={styles.container}>
      <DefaultText fontSize={'pre-big'} textType={'medium'} style={styles.textWrapper}>
        Choose category
      </DefaultText>
      <FlatList
        contentContainerStyle={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={(item) => Category({ categoryName: item.item, choosenCategory, setChoosenCategory })}
      />
    </View>
  );
};

export default CategoryChoice;

interface CategoryProps {
  categoryName: string;
  choosenCategory: string;
  setChoosenCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Category = (props: CategoryProps) => {
  const { categoryName, choosenCategory, setChoosenCategory } = props;

  const isSame = categoryName === choosenCategory;

  return (
    <TouchableOpacity onPress={() => setChoosenCategory(categoryName)}>
      <DefaultText
        fontSize={'small'}
        style={[
          { backgroundColor: isSame ? Colors.Salmon : Colors.Grey },
          { color: isSame ? Colors.White : Colors.Black },
          styles.categoryWrapper,
        ]}
      >
        {categoryName}
      </DefaultText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: Colors.Grey,
  },
  categoryWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 15,
  },
  list: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  textWrapper: {
    paddingHorizontal: 30,
  },
});
