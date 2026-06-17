import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  Plus,
  TrendingUp,
  ShoppingBag,
  AlertTriangle,
  MoreVertical,
  Euro,
} from 'lucide-react-native';
import Colors from '../../constants/Colors';

const { width } = Dimensions.get('window');

const SellerDashboard = () => {
  return (
    <View style={styles.container}>
      {/* App Bar / Header */}
      <View style={styles.appBar}>
        <TouchableOpacity>
          <Text style={{ fontSize: 24 }}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>L'Élan Dynamique</Text>
        <TouchableOpacity>
          <View style={styles.profileCircle}>
            <Text style={{ fontSize: 12 }}>👤</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Bonjour, Vendeur 👋</Text>
          <Text style={styles.subtitle}>Voici le résumé de votre activité aujourd'hui.</Text>
        </View>

        <TouchableOpacity style={styles.addProductBtn}>
          <Plus size={20} color={Colors.white} />
          <Text style={styles.addProductText}>Ajouter un produit</Text>
        </TouchableOpacity>

        {/* Stats Cards */}
        <View style={styles.statCard}>
          <View style={styles.statHeader}>
            <Text style={styles.statLabel}>Chiffre d'affaires (Jour)</Text>
            <View style={[styles.statIconContainer, { backgroundColor: '#EBF5FB' }]}>
               <Euro size={20} color={Colors.info} />
            </View>
          </View>
          <Text style={styles.statValue}>1,245.00 €</Text>
          <Text style={styles.statTrend}>+12.5% vs hier</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statHeader}>
            <Text style={styles.statLabel}>Ventes du jour</Text>
            <View style={[styles.statIconContainer, { backgroundColor: '#F4ECF7' }]}>
               <ShoppingBag size={20} color="#8E44AD" />
            </View>
          </View>
          <Text style={styles.statValue}>34</Text>
          <Text style={styles.statSubValue}>Articles vendus</Text>
        </View>

        <View style={[styles.statCard, { borderLeftWidth: 4, borderLeftColor: Colors.error }]}>
          <View style={styles.statHeader}>
            <Text style={styles.statLabel}>Stock Critique</Text>
            <View style={[styles.statIconContainer, { backgroundColor: '#FDEDEC' }]}>
               <AlertTriangle size={20} color={Colors.error} />
            </View>
          </View>
          <Text style={styles.statValue}>5</Text>
          <Text style={[styles.statSubValue, { color: Colors.error }]}>Produits à réapprovisionner</Text>
        </View>

        {/* Chart Section Placeholder */}
        <View style={styles.chartContainer}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Ventes sur 7 jours</Text>
            <TouchableOpacity>
              <MoreVertical size={20} color={Colors.textLight} />
            </TouchableOpacity>
          </View>
          <View style={styles.chartPlaceholder}>
             {/* Simulating bar chart */}
             {[40, 70, 30, 90, 100, 60, 80].map((h, i) => (
               <View key={i} style={styles.chartBarContainer}>
                 <View style={[styles.chartBar, { height: h, backgroundColor: i === 4 ? Colors.secondary : '#FAD7A0' }]} />
                 <Text style={styles.chartDay}>{['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'][i]}</Text>
               </View>
             ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FD',
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: Colors.white,
  },
  appBarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  profileCircle: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#EBF5FB',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  scrollContent: {
    padding: 20,
  },
  welcomeSection: {
    marginBottom: 25,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textLight,
    marginTop: 5,
  },
  addProductBtn: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 25,
  },
  addProductText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  statCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  statLabel: {
    fontSize: 15,
    color: Colors.textLight,
    fontWeight: '500',
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
  },
  statTrend: {
    fontSize: 13,
    color: Colors.success,
    marginTop: 5,
    fontWeight: '600',
  },
  statSubValue: {
    fontSize: 13,
    color: Colors.textLight,
    marginTop: 5,
  },
  chartContainer: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
  },
  chartPlaceholder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 150,
    paddingTop: 20,
  },
  chartBarContainer: {
    alignItems: 'center',
    width: (width - 120) / 7,
  },
  chartBar: {
    width: 15,
    borderRadius: 4,
  },
  chartDay: {
    fontSize: 10,
    color: Colors.textLight,
    marginTop: 10,
  },
});

export default SellerDashboard;
