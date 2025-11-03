import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from 'react-native';

const CATEGORIES = [
  {
    title: 'Engine Parts',
    data: [
      { id: '1', name: 'Oil Filter', price: 'Rp 45.000' },
      { id: '2', name: 'Spark Plug', price: 'Rp 30.000' },
      { id: '3', name: 'Air Filter', price: 'Rp 60.000' },
    ],
  },
  {
    title: 'Body Parts',
    data: [
      { id: '4', name: 'Side Mirror', price: 'Rp 120.000' },
      { id: '5', name: 'Bumper', price: 'Rp 400.000' },
      { id: '6', name: 'Headlamp', price: 'Rp 250.000' },
    ],
  },
  {
    title: 'Electrical',
    data: [
      { id: '7', name: 'Battery', price: 'Rp 550.000' },
      { id: '8', name: 'Ignition Coil', price: 'Rp 150.000' },
      { id: '9', name: 'Alternator', price: 'Rp 800.000' },
    ],
  },
];

export default function SparepartCatalog() {
  return (
    <ScrollView style={styles.container}>
      {/* Header image dari URL */}
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGwM51CUxh2qbBD4_iRxoqZys9O2KgXQfcg&s',
        }}
        style={styles.headerImage}
      />

      {CATEGORIES.map((category) => (
        <View key={category.title} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category.title}</Text>
          <FlatList
            data={category.data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemCard}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            )}
          />
          <Text style={styles.totalText}>Total items: {category.data.length}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
  },
  headerImage: {
    width: '100%',
    height: 180,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 10,
  },
  categoryContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  itemCard: {
    backgroundColor: '#f2f3f7',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    color: '#222',
  },
  itemPrice: {
    fontSize: 14,
    color: '#007bff',
  },
  totalText: {
    textAlign: 'right',
    color: '#555',
    marginTop: 4,
    fontSize: 12,
  },
});
