import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LayoutDashboard, Package, ClipboardList, User } from 'lucide-react-native';
import Colors from '../constants/Colors';
import SellerDashboard from '../screens/seller/SellerDashboard';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { View, Text } from 'react-native';

const Placeholder = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Écran {name}</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const SellerTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.textLight,
        tabBarStyle: { height: 65, paddingBottom: 10, paddingTop: 10 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={SellerDashboard}
        options={{
          tabBarIcon: ({ color, size }) => <LayoutDashboard size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="MyProducts"
        component={() => <Placeholder name="Mes Produits" />}
        options={{
          tabBarLabel: 'Produits',
          tabBarIcon: ({ color, size }) => <Package size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="MyOrders"
        component={() => <Placeholder name="Mes Ventes" />}
        options={{
          tabBarLabel: 'Ventes',
          tabBarIcon: ({ color, size }) => <ClipboardList size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default SellerTabs;
