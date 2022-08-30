import React, { useState } from 'react';
import { MenuItem } from '@models/MenuItem';
import { Modal } from 'react-native';
import MenuItemDetails from '@components/menu-item-list/MenuItemDetails';

export const useMenuItemDetailsModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const handleModalOpen = (menuItem: MenuItem) => {
    setModalVisible(true);
    setSelectedMenuItem(menuItem);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedMenuItem(null);
  };

  const MenuItemDetailsModal = () => {
    return (
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => handleModalClose()}
      >
        {selectedMenuItem && <MenuItemDetails menuItem={selectedMenuItem} closeModal={handleModalClose} />}
      </Modal>
    );
  };

  return {
    handleModalOpen,
    MenuItemDetailsModal,
  };
};
