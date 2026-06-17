import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {
  TrendingUp,
  Truck,
  Users,
  Plus,
  Package,
  FileText,
  ChevronRight,
  MoreHorizontal,
} from 'lucide-react-native';
import Colors from '../../constants/Colors';

const { width } = Dimensions.get('window');

const AdminDashboard = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity>
          <Text style={{ fontSize: 24 }}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Dashboard Admin</Text>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://picsum.photos/100/100?random=30' }}
            style={styles.adminAvatar}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Banner */}
        <View style={styles.welcomeBanner}>
          <Text style={styles.welcomeText}>Bonjour, Administrateur</Text>
          <Text style={styles.welcomeSub}>Voici le résumé de votre activité aujourd'hui.</Text>
          <View style={styles.statusBadge}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Système en ligne</Text>
          </View>
        </View>

        {/* Mini Stats Cards */}
        <View style={styles.statCard}>
          <View style={styles.statIconContainer}>
             <Text>💵</Text>
          </View>
          <View style={styles.statInfo}>
            <Text style={styles.statLabel}>Chiffre d'affaires</Text>
            <Text style={styles.statValue}>4 250 €</Text>
            <Text style={styles.statTrend}>📈 +12% vs hier</Text>
          </View>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statIconContainer}>
             <Text>🚚</Text>
          </View>
          <View style={styles.statInfo}>
            <Text style={styles.statLabel}>Commandes actives</Text>
            <Text style={styles.statValue}>48</Text>
            <Text style={styles.statSub}>12 en cours de préparation</Text>
          </View>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statIconContainer}>
             <Text>👥</Text>
          </View>
          <View style={styles.statInfo}>
            <Text style={styles.statLabel}>Nouveaux clients</Text>
            <Text style={styles.statValue}>15</Text>
            <Text style={styles.statTrend}>📈 +5% cette semaine</Text>
          </View>
        </View>

        {/* Weekly Sales Chart Placeholder */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Ventes de la semaine</Text>
            <TouchableOpacity><Text style={styles.detailsLink}>Détails ›</Text></TouchableOpacity>
          </View>
          <View style={styles.chartArea}>
             {[30, 50, 20, 60, 100, 40, 55].map((h, i) => (
               <View key={i} style={styles.chartCol}>
                 <View style={[styles.chartBar, { height: h, backgroundColor: i === 4 ? Colors.secondary : '#FAD7A0' }]} />
                 <Text style={styles.chartLabel}>{['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'][i]}</Text>
               </View>
             ))}
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.subTitle}>Actions Rapides</Text>
        <TouchableOpacity style={styles.actionBtnPrimary}>
          <Plus size={18} color={Colors.white} />
          <Text style={styles.actionBtnTextPrimary}>Ajouter un produit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtnSecondary}>
          <Package size={18} color={Colors.text} />
          <Text style={styles.actionBtnTextSecondary}>Gérer les stocks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtnSecondary}>
          <FileText size={18} color={Colors.text} />
          <Text style={styles.actionBtnTextSecondary}>Voir les rapports</Text>
        </TouchableOpacity>

        {/* Recent Orders */}
        <View style={styles.sectionHeader}>
          <Text style={styles.subTitle}>Commandes Récentes</Text>
          <TouchableOpacity><Text style={styles.detailsLink}>Tout voir ›</Text></TouchableOpacity>
        </View>

        {[
          { id: 'CMD-#4029', time: 'Aujourd\'hui, 14:30', user: 'Jean Dupont', price: '125,00 €', status: 'En préparation', statusColor: '#EBF5FB', textColor: '#2E86C1' },
          { id: 'CMD-#4028', time: 'Aujourd\'hui, 11:15', user: 'Marie Martin', price: '88,50 €', status: 'En livraison', statusColor: '#E8F6F3', textColor: '#16A085' }
        ].map((order, index) => (
          <View key={index} style={styles.orderItem}>
            <View style={styles.orderIcon}>
               <Truck size={20} color={Colors.primary} />
            </View>
            <View style={styles.orderInfo}>
              <Text style={styles.orderId}>{order.id}</Text>
              <Text style={styles.orderSub}>{order.time} • {order.user}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.orderPrice}>{order.price}</Text>
              <View style={[styles.orderStatus, { backgroundColor: order.statusColor }]}>
                <Text style={[styles.statusLabelSmall, { color: order.textColor }]}>• {order.status}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FD' },
  appBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15, backgroundColor: Colors.white },
  appBarTitle: { fontSize: 18, fontWeight: 'bold', color: Colors.primary },
  adminAvatar: { width: 35, height: 35, borderRadius: 17.5 },
  scrollContent: { padding: 20 },
  welcomeBanner: { backgroundColor: Colors.primary, borderRadius: 20, padding: 20, marginBottom: 20 },
  welcomeText: { color: Colors.white, fontSize: 18, fontWeight: 'bold' },
  welcomeSub: { color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 4 },
  statusBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.2)', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, marginTop: 15 },
  statusDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#2ECC71', marginRight: 8 },
  statusText: { color: Colors.white, fontSize: 12, fontWeight: '500' },
  statCard: { flexDirection: 'row', backgroundColor: Colors.white, borderRadius: 16, padding: 15, marginBottom: 12, alignItems: 'center', elevation: 1 },
  statIconContainer: { width: 45, height: 45, borderRadius: 12, backgroundColor: '#F8F9FD', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  statInfo: { flex: 1 },
  statLabel: { fontSize: 13, color: Colors.textLight },
  statValue: { fontSize: 20, fontWeight: 'bold', color: Colors.text, marginTop: 2 },
  statTrend: { fontSize: 11, color: Colors.success, marginTop: 2 },
  statSub: { fontSize: 11, color: Colors.textLight, marginTop: 2 },
  sectionCard: { backgroundColor: Colors.white, borderRadius: 16, padding: 20, marginVertical: 10 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: Colors.text },
  detailsLink: { fontSize: 13, color: Colors.secondary, fontWeight: '600' },
  chartArea: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', height: 120 },
  chartCol: { alignItems: 'center', width: (width - 120) / 7 },
  chartBar: { width: 12, borderRadius: 6 },
  chartLabel: { fontSize: 9, color: Colors.textLight, marginTop: 8 },
  subTitle: { fontSize: 18, fontWeight: 'bold', color: Colors.text, marginTop: 20, marginBottom: 15 },
  actionBtnPrimary: { backgroundColor: Colors.secondary, height: 50, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  actionBtnTextPrimary: { color: Colors.white, fontWeight: 'bold', fontSize: 15, marginLeft: 10 },
  actionBtnSecondary: { backgroundColor: Colors.white, height: 50, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  actionBtnTextSecondary: { color: Colors.text, fontWeight: 'bold', fontSize: 15, marginLeft: 10 },
  orderItem: { flexDirection: 'row', backgroundColor: Colors.white, borderRadius: 16, padding: 12, marginBottom: 10, alignItems: 'center' },
  orderIcon: { width: 40, height: 40, borderRadius: 10, backgroundColor: '#FDF2E9', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  orderInfo: { flex: 1 },
  orderId: { fontSize: 14, fontWeight: 'bold', color: Colors.text },
  orderSub: { fontSize: 11, color: Colors.textLight, marginTop: 2 },
  orderPrice: { fontSize: 14, fontWeight: 'bold', color: Colors.text },
  orderStatus: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10, marginTop: 4 },
  statusLabelSmall: { fontSize: 10, fontWeight: 'bold' },
});

export default AdminDashboard;
