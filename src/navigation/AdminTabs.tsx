import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BarChart3, ClipboardList, Package, Truck } from 'lucide-react-native';
import Colors from '../constants/Colors';
import AdminDashboard from '../screens/admin/AdminDashboard';
import UserManagement from '../screens/admin/UserManagement';
import { View, Text } from 'react-native';

const Placeholder = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Écran {name}</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const AdminTabs = () => {
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
        name="Stats"
        component={AdminDashboard}
        options={{
          tabBarLabel: 'Analytics',
          tabBarIcon: ({ color, size }) => <BarChart3 size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="AdminOrders"
        component={() => <Placeholder name="Commandes Globales" />}
        options={{
          tabBarLabel: 'Commandes',
          tabBarIcon: ({ color, size }) => <ClipboardList size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="AdminProducts"
        component={() => <Placeholder name="Gestion Produits" />}
        options={{
          tabBarLabel: 'Produits',
          tabBarIcon: ({ color, size }) => <Package size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="AdminUsers"
        component={UserManagement}
        options={{
          tabBarLabel: 'Utilisateurs',
          tabBarIcon: ({ color, size }) => <Truck size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminTabs;
