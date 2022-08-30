import { View, StyleSheet } from 'react-native';
import MenuItem from '@components/menu-item-list/MenuItem';
import { MenuItem as MenuItemModel } from '@models/MenuItem';
import { useMenuItemDetailsModal } from '@hooks/useMenuItemDetailsModal';

const MenuItemList = () => {
  const { handleModalOpen, MenuItemDetailsModal } = useMenuItemDetailsModal();

  const data: MenuItemModel[] = [
    {
      id: '1',
      title: 'Tempura',
      description: 'Caesar Tempura (6 pcs.)',
      price: 13.9,
      discountedPrice: 9.9,
      category: { title: 'Tempura' },
      image:
        'https://static.wixstatic.com/media/2cd43b_e5828aa119524592ab00126dfa48a944~mv2.png/v1/fill/w_320,h_318,q_90/2cd43b_e5828aa119524592ab00126dfa48a944~mv2.png',
    },
    {
      id: '2',
      title: 'Tempura',
      description: 'Caesar Tempura (6 pcs.)',
      price: 13.9,
      discountedPrice: null,
      category: { title: 'Tempura' },
      image:
        'https://static.wixstatic.com/media/2cd43b_e5828aa119524592ab00126dfa48a944~mv2.png/v1/fill/w_320,h_318,q_90/2cd43b_e5828aa119524592ab00126dfa48a944~mv2.png',
    },
    {
      id: '3',
      title: 'Tempura',
      description: 'Caesar Tempura (6 pcs.)',
      price: 13.9,
      discountedPrice: 9.9,
      category: { title: 'Tempura' },
      image:
        'https://static.wixstatic.com/media/2cd43b_e5828aa119524592ab00126dfa48a944~mv2.png/v1/fill/w_320,h_318,q_90/2cd43b_e5828aa119524592ab00126dfa48a944~mv2.png',
    },
    {
      id: '4',
      title: 'Tempura',
      description: 'Caesar Tempura (6 pcs.)',
      price: 13.9,
      discountedPrice: 9.9,
      category: { title: 'Tempura' },
      image:
        'https://static.wixstatic.com/media/2cd43b_e5828aa119524592ab00126dfa48a944~mv2.png/v1/fill/w_320,h_318,q_90/2cd43b_e5828aa119524592ab00126dfa48a944~mv2.png',
    },
    {
      id: '5',
      title: 'Tempura',
      description: 'Caesar Tempura (6 pcs.)',
      price: 13.9,
      discountedPrice: 9.9,
      category: { title: 'Tempura' },
      image:
        'https://static.wixstatic.com/media/2cd43b_e5828aa119524592ab00126dfa48a944~mv2.png/v1/fill/w_320,h_318,q_90/2cd43b_e5828aa119524592ab00126dfa48a944~mv2.png',
    },
    {
      id: '6',
      title: 'Tempura',
      description: 'Caesar Tempura (6 pcs.)',
      price: 13.9,
      discountedPrice: 9.9,
      category: { title: 'Tempura' },
      image:
        'https://static.wixstatic.com/media/2cd43b_e5828aa119524592ab00126dfa48a944~mv2.png/v1/fill/w_320,h_318,q_90/2cd43b_e5828aa119524592ab00126dfa48a944~mv2.png',
    },
  ];
  return (
    <>
      <View style={styles.container}>
        {data.map((item) => (
          <MenuItem key={item.id} menuItem={item} handleModalOpen={handleModalOpen} />
        ))}
      </View>
      <MenuItemDetailsModal />
    </>
  );
};

export default MenuItemList;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingBottom: 100,
  },
});
