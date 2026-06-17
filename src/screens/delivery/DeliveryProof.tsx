import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Camera, ChevronLeft, HelpCircle, Info, CheckCircle } from 'lucide-react-native';
import Colors from '../../constants/Colors';

const DeliveryProof = ({ navigation }: any) => {
  const [note, setNote] = useState('');

  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Preuve de Livraison</Text>
        <TouchableOpacity>
          <HelpCircle size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Recapitualtif */}
        <View style={styles.recapCard}>
           <View style={styles.recapHeader}>
             <View>
               <Text style={styles.recapLabel}>RÉCAPITULATIF</Text>
               <Text style={styles.cmdNumber}>N° CMD-4029</Text>
             </View>
             <View style={styles.statusBadge}>
               <Text style={styles.statusText}>En cours</Text>
             </View>
           </View>
           <View style={styles.locationContainer}>
             <Text>📍 12 Rue de la Paix, Paris</Text>
           </View>
        </View>

        {/* Photo Section */}
        <Text style={styles.sectionTitle}>PHOTO DU COLIS LIVRÉ</Text>
        <TouchableOpacity style={styles.photoContainer}>
          <View style={styles.cameraIconBg}>
            <Camera size={32} color={Colors.primary} />
          </View>
          <Text style={styles.photoMainText}>Prendre une photo</Text>
          <Text style={styles.photoSubText}>Capturez le colis devant la porte ou dans la boîte aux lettres</Text>
        </TouchableOpacity>

        {/* Note Section */}
        <Text style={styles.sectionTitle}>NOTE OU COMMENTAIRE (OPTIONNEL)</Text>
        <TextInput
          style={styles.noteInput}
          placeholder="Ex: Laissé derrière le pot de fleurs, voisin prévenu..."
          multiline
          numberOfLines={4}
          value={note}
          onChangeText={setNote}
        />

        {/* Info Alert */}
        <View style={styles.infoAlert}>
          <Info size={18} color={Colors.info} />
          <Text style={styles.infoText}>La photo est requise pour finaliser l'étape.</Text>
        </View>
      </ScrollView>

      {/* Action Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirmButton} disabled>
          <CheckCircle size={20} color={Colors.white} opacity={0.5} />
          <Text style={styles.confirmText}>Confirmer la livraison</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FD' },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.white,
  },
  appBarTitle: { fontSize: 18, fontWeight: 'bold', color: Colors.primary },
  scrollContent: { padding: 20 },
  recapCard: { backgroundColor: Colors.white, borderRadius: 16, padding: 20, marginBottom: 25 },
  recapHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  recapLabel: { fontSize: 12, color: Colors.textLight, fontWeight: 'bold' },
  cmdNumber: { fontSize: 20, fontWeight: 'bold', color: Colors.text, marginTop: 4 },
  statusBadge: { backgroundColor: '#FAD7A0', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  statusText: { color: Colors.primary, fontSize: 12, fontWeight: 'bold' },
  locationContainer: { marginTop: 5 },
  sectionTitle: { fontSize: 13, fontWeight: 'bold', color: Colors.text, marginBottom: 12, marginTop: 10 },
  photoContainer: {
    backgroundColor: '#F4F6FB',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    borderStyle: 'dashed',
    marginBottom: 25,
  },
  cameraIconBg: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#FBEEE6', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  photoMainText: { fontSize: 18, fontWeight: 'bold', color: Colors.text, marginBottom: 8 },
  photoSubText: { fontSize: 13, color: Colors.textLight, textAlign: 'center', paddingHorizontal: 20 },
  noteInput: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 15,
    height: 120,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 20,
  },
  infoAlert: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#EBF5FB', padding: 12, borderRadius: 12 },
  infoText: { marginLeft: 10, color: '#2E86C1', fontSize: 13 },
  footer: { padding: 20, backgroundColor: Colors.white, borderTopWidth: 1, borderTopColor: Colors.border },
  confirmButton: {
    backgroundColor: '#BDC3C7', // Disabled color
    height: 56,
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmText: { color: Colors.white, fontWeight: 'bold', fontSize: 16, marginLeft: 10 },
});

export default DeliveryProof;
