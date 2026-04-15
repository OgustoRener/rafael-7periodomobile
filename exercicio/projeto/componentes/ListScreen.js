import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../src/config/firebaseConfig';

export default function ListScreen() {
  const [items, setItems] = useState([]);
  const [uid, setUid] = useState(() => auth.currentUser?.uid ?? null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUid(user?.uid ?? null);
    });
    return unsub;
  }, []);

  const q = useMemo(() => {
    if (!uid) return null;
    return query(
      collection(db, 'alugueis'),
      where('userId', '==', uid)
    );
  }, [uid]);

  useEffect(() => {
    if (!q) return;
    setError(null);
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));

        list.sort((a, b) => {
          const aSec = a?.createdAt?.seconds ?? 0;
          const bSec = b?.createdAt?.seconds ?? 0;
          return bSec - aSec;
        });

        setItems(list);
      },
      (err) => {
        setError(err?.message ?? 'Erro desconhecido ao consultar o Firestore.');
        setItems([]);
      }
    );
    return unsub;
  }, [q]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.carName}</Text>
      <Text style={styles.line}>Cliente: {item.clientName}</Text>
      <Text style={styles.line}>Valor: R$ {Number(item.rentValue ?? 0).toFixed(2)}</Text>
      <Text style={styles.line}>Data: {item.rentDate}</Text>
    </View>
  );

  if (!uid) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>Você precisa estar autenticado para ver os registros.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {error ? <Text style={styles.errorText}>Erro: {error}</Text> : null}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum aluguel cadastrado ainda.</Text>}
        contentContainerStyle={items.length === 0 ? styles.emptyContainer : undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 12 },
  emptyContainer: { flexGrow: 1, justifyContent: 'center' },
  emptyText: { textAlign: 'center', color: '#666', fontSize: 16 },
  errorText: {
    color: '#dc3545',
    fontSize: 14,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 6, color: '#333' },
  line: { fontSize: 14, color: '#444', marginTop: 2 },
});

