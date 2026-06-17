import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Search, SlidersHorizontal, Plus } from 'lucide-react-native';
import Colors from '../../constants/Colors';

const { width } = Dimensions.get('window');
const columnWidth = (width - 48) / 2;

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  unitPrice: string;
  image: any;
  badge?: string;
  badgeColor?: string;
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Huile d'Olive Vierge Extra Bio",
    brand: "MAISON D'OR",
    price: 7.90,
    unitPrice: "15.80 € / L",
    image: { uri: 'https://picsum.photos/200/300?random=1' },
    badge: "-15%",
    badgeColor: '#FADBD8',
  },
  {
    id: '2',
    name: "Pennes Rigate Artisanales 500g",
    brand: "PASTA VERA",
    price: 2.90,
    unitPrice: "5.80 € / kg",
    image: { uri: 'https://picsum.photos/200/300?random=2' },
  },
  {
    id: '3',
    name: "Miel de Fleurs Sauvages 250g",
    brand: "ABEILLE DOUCE",
    price: 6.40,
    unitPrice: "25.60 € / kg",
    image: { uri: 'https://picsum.photos/200/300?random=3' },
    badge: "NOUVEAU",
    badgeColor: '#D6EAF8',
  },
  {
    id: '4',
    name: "Café en Grains Éthiopie Moka",
    brand: "CAFÉ NOIR",
    price: 11.90,
    unitPrice: "23.80 € / kg",
    image: { uri: 'https://picsum.photos/200/300?random=4' },
  },
];

const FILTERS = ['Trier', 'Prix', 'Marques', 'Bio'];

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.productCard}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} />
        {item.badge && (
          <View style={[styles.badge, { backgroundColor: item.badgeColor || '#eee' }]}>
            <Text style={styles.badgeText}>{item.badge}</Text>
          </View>
        )}
      </View>

      <View style={styles.productInfo}>
        <Text style={styles.brandName}>{item.brand}</Text>
        <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.unitPrice}>{item.unitPrice}</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price.toFixed(2)} €</Text>
          <TouchableOpacity style={styles.addButton}>
            <Plus size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Épicerie</Text>
        <TouchableOpacity>
          <Search size={24} color={Colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
          <TouchableOpacity style={styles.filterButton}>
            <SlidersHorizontal size={16} color={Colors.text} />
            <Text style={styles.filterButtonText}>Trier</Text>
          </TouchableOpacity>
          {FILTERS.slice(1).map((filter, index) => (
            <TouchableOpacity key={index} style={styles.filterButton}>
              <Text style={styles.filterButtonText}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={MOCK_PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },
  filterContainer: {
    marginBottom: 10,
  },
  filterScroll: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    marginLeft: 6,
  },
  listContainer: {
    padding: 16,
  },
  productCard: {
    width: columnWidth,
    backgroundColor: Colors.white,
    borderRadius: 16,
    marginBottom: 20,
    marginRight: 16,
    // Shadow for Android
    elevation: 3,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    width: '100%',
    height: 150,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  productInfo: {
    padding: 12,
  },
  brandName: {
    fontSize: 10,
    color: Colors.textLight,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.text,
    marginTop: 4,
    height: 40,
  },
  unitPrice: {
    fontSize: 12,
    color: Colors.textLight,
    marginTop: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  addButton: {
    backgroundColor: Colors.secondary,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
