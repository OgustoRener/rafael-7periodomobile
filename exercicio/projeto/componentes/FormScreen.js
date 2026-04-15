import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';

import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { auth, db } from '../src/config/firebaseConfig';

export default function FormScreen() {
  const [carName, setCarName] = useState('');
  const [clientName, setClientName] = useState('');
  const [rentValue, setRentValue] = useState('');
  const [rentDate, setRentDate] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const resetForm = () => {
    setCarName('');
    setClientName('');
    setRentValue('');
    setRentDate('');
  };

  const handleSave = async () => {
    if (!carName || !clientName || !rentValue || !rentDate) {
      setIsSuccess(false);
      setModalMessage('Por favor, preencha todos os campos.');
      setModalVisible(true);
      return;
    }

    const numericValue = Number(String(rentValue).replace(',', '.'));
    if (!Number.isFinite(numericValue) || numericValue <= 0) {
      setIsSuccess(false);
      setModalMessage('Informe um valor de aluguel válido.');
      setModalVisible(true);
      return;
    }

    const uid = auth.currentUser?.uid;
    if (!uid) {
      setIsSuccess(false);
      setModalMessage('Você precisa estar autenticado para registrar um aluguel.');
      setModalVisible(true);
      return;
    }

    try {
      await addDoc(collection(db, 'alugueis'), {
        carName,
        clientName,
        rentValue: numericValue,
        rentDate,
        userId: uid,
        createdAt: Timestamp.now(),
      });

      setIsSuccess(true);
      setModalMessage('Aluguel registrado com sucesso!');
      setModalVisible(true);
      resetForm();
    } catch (error) {
      setIsSuccess(false);
      setModalMessage('Falha ao registrar: ' + error.message);
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Aluguel</Text>

      <TextInput style={styles.input} placeholder="Nome do carro" value={carName} onChangeText={setCarName} />
      <TextInput style={styles.input} placeholder="Nome do cliente" value={clientName} onChangeText={setClientName} />
      <TextInput
        style={styles.input}
        placeholder="Valor do aluguel"
        value={rentValue}
        onChangeText={setRentValue}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data do aluguel (DD/MM/AAAA)"
        value={rentDate}
        onChangeText={setRentDate}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={[styles.modalTitle, { color: isSuccess ? '#28a745' : '#dc3545' }]}>
              {isSuccess ? 'Sucesso' : 'Erro'}
            </Text>
            <Text style={styles.modalMessage}>{modalMessage}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '82%',
    backgroundColor: '#fff',
    padding: 22,
    borderRadius: 14,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 18,
  },
  modalButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

