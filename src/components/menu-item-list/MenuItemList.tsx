import { View, StyleSheet, Modal } from 'react-native';
import MenuItem from '@components/menu-item-list/MenuItem';
import MenuItemDetails from '@components/menu-item-list/MenuItemDetails';
import { MenuItem as MenuItemModel } from '@models/MenuItem';
import { useState } from 'react';

const MenuItemList = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItemModel | null>(null);

  const handleModalOpen = (menuItem: MenuItemModel) => {
    setModalVisible(true);
    setSelectedMenuItem(menuItem);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedMenuItem(null);
  };

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
      <View style={styles.container}>{data.map((item) => MenuItem({ menuItem: item, handleModalOpen }))}</View>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => handleModalClose()}
      >
        {selectedMenuItem && <MenuItemDetails menuItem={selectedMenuItem} closeModal={handleModalClose} />}
      </Modal>
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
