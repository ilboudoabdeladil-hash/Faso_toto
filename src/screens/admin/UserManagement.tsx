import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Search, MoreVertical, Shield, Store, Truck, User, Plus } from 'lucide-react-native';
import Colors from '../../constants/Colors';

const USERS = [
  { id: '1', name: 'Jean Dupont', email: 'jean.dupont@elan.fr', role: 'ADMIN', status: 'Actif', initials: 'JD' },
  { id: '2', name: 'Marie Laurent', email: 'boutique.marie@email.com', role: 'VENDEUR', status: 'Actif', initials: 'ML' },
  { id: '3', name: 'Paul Bernard', email: 'paul.livraison@email.com', role: 'LIVREUR', status: 'Suspendu', initials: 'PB' },
  { id: '4', name: 'Sophie Martin', email: 'sophie.m@client.com', role: 'CLIENT', status: 'Actif', initials: 'SM' },
];

const UserManagement = () => {
  const [filter, setFilter] = useState('Tous');

  const renderUser = ({ item }: any) => (
    <View style={styles.userCard}>
      <View style={styles.cardHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.initials}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userEmail}>{item.email}</Text>
        </View>
        <TouchableOpacity>
          <MoreVertical size={20} color={Colors.textLight} />
        </TouchableOpacity>
      </View>

      <View style={styles.cardFooter}>
         <View style={[styles.badge, styles.roleBadge]}>
            {item.role === 'ADMIN' && <Shield size={12} color={Colors.textLight} />}
            {item.role === 'VENDEUR' && <Store size={12} color={Colors.textLight} />}
            {item.role === 'LIVREUR' && <Truck size={12} color={Colors.textLight} />}
            {item.role === 'CLIENT' && <User size={12} color={Colors.textLight} />}
            <Text style={styles.badgeText}>{item.role}</Text>
         </View>
         <View style={[styles.badge, item.status === 'Actif' ? styles.activeBadge : styles.suspendedBadge]}>
            <View style={[styles.dot, { backgroundColor: item.status === 'Actif' ? '#D35400' : '#E74C3C' }]} />
            <Text style={[styles.badgeText, { color: item.status === 'Actif' ? '#D35400' : '#E74C3C' }]}>{item.status}</Text>
         </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity><Text style={{ fontSize: 24 }}>☰</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>L'Élan Dynamique</Text>
        <View style={styles.profileCircle}><Text>👤</Text></View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color={Colors.textLight} />
          <TextInput placeholder="Rechercher un utilisateur, email..." style={styles.searchInput} />
        </View>
      </View>

      <View style={styles.filterBar}>
        <Text style={styles.filterLabel}>Filtrer par :</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Tous', 'Client', 'Vendeur', 'Livreur', 'Admin'].map((f) => (
            <TouchableOpacity
              key={f}
              style={[styles.filterBtn, filter === f && styles.filterBtnActive]}
              onPress={() => setFilter(f)}
            >
              <Text style={[styles.filterBtnText, filter === f && styles.filterBtnTextActive]}>{f}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={USERS}
        renderItem={renderUser}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListFooterComponent={
          <TouchableOpacity style={styles.loadMore}>
            <Text style={styles.loadMoreText}>Charger plus d'utilisateurs</Text>
          </TouchableOpacity>
        }
      />

      <TouchableOpacity style={styles.fab}>
        <Plus size={24} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FD' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: Colors.white },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: Colors.primary },
  profileCircle: { width: 35, height: 35, borderRadius: 17.5, backgroundColor: '#EBF5FB', justifyContent: 'center', alignItems: 'center' },
  searchContainer: { padding: 20 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F2F5', borderRadius: 12, paddingHorizontal: 15, height: 50 },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 14 },
  filterBar: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginBottom: 15 },
  filterLabel: { fontSize: 13, color: Colors.textLight, marginRight: 10 },
  filterBtn: { paddingHorizontal: 15, paddingVertical: 8, borderRadius: 15, backgroundColor: '#EBF5FB', marginRight: 8 },
  filterBtnActive: { backgroundColor: Colors.primary },
  filterBtnText: { fontSize: 13, color: Colors.text },
  filterBtnTextActive: { color: Colors.white, fontWeight: 'bold' },
  list: { padding: 20, paddingBottom: 100 },
  userCard: { backgroundColor: Colors.white, borderRadius: 20, padding: 20, marginBottom: 15, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 5 },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#5D6D7E', justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: Colors.white, fontWeight: 'bold', fontSize: 16 },
  userInfo: { flex: 1, marginLeft: 15 },
  userName: { fontSize: 18, fontWeight: 'bold', color: Colors.text },
  userEmail: { fontSize: 13, color: Colors.textLight, marginTop: 2 },
  cardFooter: { flexDirection: 'row', marginTop: 15 },
  badge: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8, marginRight: 10, backgroundColor: '#F0F2F5' },
  roleBadge: { backgroundColor: '#E5E8E8' },
  activeBadge: { backgroundColor: '#FDF2E9' },
  suspendedBadge: { backgroundColor: '#FDEDEC' },
  badgeText: { fontSize: 11, fontWeight: 'bold', marginLeft: 5, color: '#566573' },
  dot: { width: 6, height: 6, borderRadius: 3, marginRight: 6 },
  loadMore: { alignItems: 'center', paddingVertical: 15 },
  loadMoreText: { color: Colors.textLight, fontSize: 13, textDecorationLine: 'underline' },
  fab: { position: 'absolute', bottom: 30, right: 20, width: 56, height: 56, borderRadius: 28, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center', elevation: 5 },
});

export default UserManagement;
