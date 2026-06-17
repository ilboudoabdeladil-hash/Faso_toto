import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { MapPin, Bell, Minus, Plus, CreditCard, ChevronRight, Lock } from 'lucide-react-native';
import Colors from '../../constants/Colors';

const { width } = Dimensions.get('window');

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: any;
}

const INITIAL_CART: CartItem[] = [
  {
    id: '1',
    name: 'Salade Fraîcheur Bio',
    description: 'Portion individuelle',
    price: 12.50,
    quantity: 1,
    image: { uri: 'https://picsum.photos/200/200?random=10' },
  },
  {
    id: '2',
    name: 'Jus Orange & Gingembre',
    description: '33cl - Pressé à froid',
    price: 4.90,
    quantity: 2,
    image: { uri: 'https://picsum.photos/200/200?random=11' },
  },
];

const CartScreen = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = 2.50;
  const total = subTotal + deliveryFee;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <MapPin size={20} color={Colors.primary} />
          <Text style={styles.locationText}>Livraison à : <Text style={styles.locationBold}>Paris 75001</Text></Text>
        </View>
        <TouchableOpacity>
          <Bell size={24} color={Colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Mon Panier Section */}
        <Text style={styles.sectionTitle}>Mon Panier</Text>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <View style={styles.itemBottom}>
                <Text style={styles.itemPrice}>{item.price.toFixed(2)} €</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityBtn}
                    onPress={() => updateQuantity(item.id, -1)}
                  >
                    <Minus size={16} color={Colors.text} />
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityBtn}
                    onPress={() => updateQuantity(item.id, 1)}
                  >
                    <Plus size={16} color={Colors.text} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}

        {/* Adresse Section */}
        <Text style={styles.sectionTitle}>Adresse de livraison</Text>
        <View style={styles.addressCard}>
          <View style={styles.addressHeader}>
            <View style={styles.addressTypeContainer}>
              <View style={styles.dot} />
              <Text style={styles.addressLabel}>Bureau Paris</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.modifierLink}>Modifier</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.addressText}>14 Rue de la Paix</Text>
          <Text style={styles.addressText}>75001 Paris, France</Text>
          <View style={styles.deliveryTime}>
             <Text style={styles.timeIcon}>🕒</Text>
             <Text style={styles.timeText}>Livré vers 12h30</Text>
          </View>
        </View>

        {/* Mode de paiement Section */}
        <Text style={styles.sectionTitle}>Mode de paiement</Text>
        <View style={styles.paymentContainer}>
          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => setPaymentMethod('card')}
          >
            <View style={styles.paymentLeft}>
              <CreditCard size={20} color={Colors.text} />
              <Text style={styles.paymentLabel}>Carte Bancaire (••• 4242)</Text>
            </View>
            <View style={[styles.radio, paymentMethod === 'card' && styles.radioActive]}>
               {paymentMethod === 'card' && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => setPaymentMethod('apple')}
          >
             <View style={styles.paymentLeft}>
              <Text style={styles.paymentIcon}></Text>
              <Text style={styles.paymentLabel}>Apple Pay</Text>
            </View>
            <View style={[styles.radio, paymentMethod === 'apple' && styles.radioActive]} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => setPaymentMethod('paypal')}
          >
             <View style={styles.paymentLeft}>
              <Text style={styles.paymentIcon}>🅿️</Text>
              <Text style={styles.paymentLabel}>PayPal</Text>
            </View>
            <View style={[styles.radio, paymentMethod === 'paypal' && styles.radioActive]} />
          </TouchableOpacity>
        </View>

        {/* Récapitulatif */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Sous-total</Text>
            <Text style={styles.summaryValue}>{subTotal.toFixed(2)} €</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Frais de livraison</Text>
            <Text style={styles.summaryValue}>{deliveryFee.toFixed(2)} €</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>{total.toFixed(2)} €</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bouton de confirmation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.payButton}>
          <Lock size={18} color={Colors.white} />
          <Text style={styles.payButtonText}>Confirmer et Payer ({total.toFixed(2)} €)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FD',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: Colors.white,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 8,
    fontSize: 16,
    color: Colors.text,
  },
  locationBold: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginTop: 20,
    marginBottom: 15,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
  itemDescription: {
    fontSize: 13,
    color: Colors.textLight,
    marginTop: 2,
  },
  itemBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
    borderRadius: 20,
    paddingHorizontal: 4,
  },
  quantityBtn: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  addressCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  addressTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.secondary,
    marginRight: 8,
  },
  addressLabel: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  modifierLink: {
    color: Colors.primary,
    fontWeight: '600',
  },
  addressText: {
    color: Colors.textLight,
    fontSize: 14,
    marginBottom: 2,
  },
  deliveryTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  timeIcon: {
    fontSize: 14,
    marginRight: 5,
  },
  timeText: {
    fontSize: 13,
    color: Colors.textLight,
  },
  paymentContainer: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  paymentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  paymentLabel: {
    fontSize: 15,
    color: Colors.text,
    marginLeft: 12,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioActive: {
    borderColor: Colors.primary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  summaryContainer: {
    marginTop: 25,
    paddingBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryLabel: {
    color: Colors.textLight,
    fontSize: 15,
  },
  summaryValue: {
    color: Colors.text,
    fontWeight: '600',
    fontSize: 15,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
  },
  totalValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Colors.white,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  payButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  payButtonText: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default CartScreen;
