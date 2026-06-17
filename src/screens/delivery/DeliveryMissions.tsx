import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {
  MapPin,
  Clock,
  Navigation as NavIcon,
  CheckCircle2,
  XCircle,
  Package,
} from 'lucide-react-native';
import Colors from '../../constants/Colors';

const { width } = Dimensions.get('window');

const DeliveryMissions = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={{ fontSize: 24 }}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Livraison Express</Text>
        <TouchableOpacity>
          <View style={styles.profileCircle}>
            <Text style={{ fontSize: 12 }}>👤</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Mission Banner */}
        <View style={styles.missionBanner}>
          <View style={styles.bannerLeft}>
             <View style={styles.bellIconContainer}>
               <Text>🔔</Text>
             </View>
             <View style={{ marginLeft: 15 }}>
               <Text style={styles.bannerTitle}>Nouvelle mission disponible !</Text>
             </View>
          </View>
          <View style={styles.urgentBadge}>
            <Text style={styles.urgentText}>Urgent</Text>
          </View>
        </View>

        {/* Map Placeholder */}
        <View style={styles.mapContainer}>
          <Image
            source={{ uri: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/2.3488,48.8534,13/600x400?access_token=pk.placeholder' }}
            style={styles.mapImage}
          />
          <View style={styles.locationOverlay}>
             <View style={styles.locItem}>
               <View style={styles.dotStart} />
               <Text style={styles.locText}>Départ: Dépôt Central</Text>
             </View>
             <View style={styles.line} />
             <View style={styles.locItem}>
               <MapPin size={16} color={Colors.primary} />
               <Text style={styles.locText}>14 Rue de la Paix, Paris</Text>
             </View>
          </View>
        </View>

        {/* Mission Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.estimatedPrice}>
            <Text style={styles.estLabel}>Montant estimé</Text>
            <Text style={styles.estValue}>12,50 €</Text>
          </View>

          <View style={styles.statsGrid}>
             <View style={styles.statBox}>
               <Clock size={20} color={Colors.text} />
               <Text style={styles.statLabelSmall}>Temps est.</Text>
               <Text style={styles.statValueSmall}>25 min</Text>
             </View>
             <View style={styles.statBox}>
               <NavIcon size={20} color={Colors.text} />
               <Text style={styles.statLabelSmall}>Distance</Text>
               <Text style={styles.statValueSmall}>4.2 km</Text>
             </View>
          </View>

          <View style={styles.packageDetails}>
             <View style={styles.pkgHeader}>
               <Package size={18} color={Colors.primary} />
               <Text style={styles.pkgTitle}>Détails du colis</Text>
             </View>
             <View style={styles.pkgRow}>
               <Text style={styles.pkgLabel}>Type</Text>
               <Text style={styles.pkgValue}>Standard</Text>
             </View>
             <View style={styles.pkgRow}>
               <Text style={styles.pkgLabel}>Poids approx.</Text>
               <Text style={styles.pkgValue}>2.5 kg</Text>
             </View>
             <View style={styles.pkgRow}>
               <Text style={styles.pkgLabel}>Instructions</Text>
               <Text style={styles.pkgValue}>Remise en main propre</Text>
             </View>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
           <TouchableOpacity
             style={styles.acceptBtn}
             onPress={() => navigation.navigate('DeliveryProof')}
           >
             <CheckCircle2 size={20} color={Colors.white} />
             <Text style={styles.acceptText}>Accepter</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.refuseBtn}>
             <XCircle size={20} color={Colors.text} />
             <Text style={styles.refuseText}>Refuser</Text>
           </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FD' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.white,
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: Colors.primary },
  profileCircle: { width: 35, height: 35, borderRadius: 17.5, backgroundColor: '#EBF5FB', justifyContent: 'center', alignItems: 'center' },
  scrollContent: { padding: 20 },
  missionBanner: {
    backgroundColor: Colors.secondary,
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerLeft: { flexDirection: 'row', alignItems: 'center' },
  bellIconContainer: { width: 36, height: 36, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
  bannerTitle: { color: Colors.white, fontWeight: 'bold', fontSize: 16, width: 150 },
  urgentBadge: { backgroundColor: 'rgba(255,255,255,0.3)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 15 },
  urgentText: { color: Colors.white, fontSize: 12, fontWeight: 'bold' },
  mapContainer: { height: 250, borderRadius: 20, overflow: 'hidden', marginBottom: 20, position: 'relative' },
  mapImage: { width: '100%', height: '100%' },
  locationOverlay: {
    position: 'absolute',
    top: 15,
    left: 15,
    right: 15,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 12,
    padding: 12,
  },
  locItem: { flexDirection: 'row', alignItems: 'center' },
  dotStart: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#3498DB', marginRight: 10 },
  locText: { fontSize: 13, fontWeight: '600', color: Colors.text },
  line: { width: 1, height: 20, backgroundColor: Colors.textLight, marginLeft: 4.5, marginVertical: 2, borderStyle: 'dashed' },
  detailsContainer: { backgroundColor: Colors.white, borderRadius: 20, padding: 20, marginBottom: 20 },
  estimatedPrice: { alignItems: 'center', borderBottomWidth: 1, borderBottomColor: Colors.border, paddingBottom: 15, marginBottom: 15 },
  estLabel: { fontSize: 14, color: Colors.textLight },
  estValue: { fontSize: 32, fontWeight: 'bold', color: Colors.primary, marginTop: 5 },
  statsGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statBox: { width: (width - 100) / 2, backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.border, borderRadius: 12, padding: 12, alignItems: 'flex-start' },
  statLabelSmall: { fontSize: 12, color: Colors.textLight, marginTop: 5 },
  statValueSmall: { fontSize: 16, fontWeight: 'bold', color: Colors.text },
  packageDetails: { backgroundColor: '#FDF2E9', padding: 15, borderRadius: 12 },
  pkgHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  pkgTitle: { fontWeight: 'bold', fontSize: 15, marginLeft: 8, color: Colors.text },
  pkgRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  pkgLabel: { color: Colors.textLight, fontSize: 13 },
  pkgValue: { fontWeight: '600', color: Colors.text, fontSize: 13 },
  actions: { marginBottom: 30 },
  acceptBtn: { backgroundColor: Colors.primary, height: 56, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  acceptText: { color: Colors.white, fontWeight: 'bold', fontSize: 16, marginLeft: 10 },
  refuseBtn: { backgroundColor: Colors.white, height: 56, borderRadius: 12, borderWidth: 1, borderColor: Colors.text, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  refuseText: { color: Colors.text, fontWeight: 'bold', fontSize: 16, marginLeft: 10 },
});

export default DeliveryMissions;
