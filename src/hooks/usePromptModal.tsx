import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, StyleSheet } from 'react-native';
import Colors from '@constants/colors';
import DefaultText from '@components/base/DefaultText';

interface PromptModalProps {
  onAgree: () => void;
}

export const usePromptModal = ({ onAgree }: PromptModalProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handlePromptModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const PromptModal = () => {
    return (
      <Modal visible={isModalVisible} animationType={'fade'} onRequestClose={handleModalClose} transparent={true}>
        <TouchableOpacity
          onPress={handleModalClose}
          style={{
            flex: 1,
            opacity: 0.3,
            backgroundColor: Colors.Black,
          }}
        ></TouchableOpacity>
        <View style={styles.container}>
          <DefaultText>Are you sure?</DefaultText>
          <TouchableOpacity onPress={handleModalClose} style={[buttonStyles.container, buttonStyles.negative]}>
            <DefaultText fontSize={'medium'} style={{ color: Colors.Salmon }}>
              No
            </DefaultText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onAgree();
              handleModalClose();
            }}
            style={[buttonStyles.container, buttonStyles.positive]}
          >
            <DefaultText fontSize={'medium'} style={{ color: Colors.Green }}>
              Yes
            </DefaultText>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return {
    handlePromptModalOpen,
    PromptModal,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    height: 60,
    width: 320,
    top: '42%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.White,
    padding: 12,
    paddingLeft: 22,
    borderRadius: 33,
  },
});

const buttonStyles = StyleSheet.create({
  container: {
    width: 68,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 25,
  },
  positive: {
    backgroundColor: Colors.Green + '30',
  },
  negative: {
    backgroundColor: Colors.Salmon + '30',
  },
});
