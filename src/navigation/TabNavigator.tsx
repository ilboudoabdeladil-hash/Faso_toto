import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, ShoppingBag, ShoppingCart, User, ListOrdered } from 'lucide-react-native';
import Colors from '../constants/Colors';

// Placeholders pour les écrans (à créer plus tard)
import { View, Text } from 'react-native';
const Placeholder = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Écran {name}</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const ClientTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.textLight,
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: Colors.white,
          borderTopWidth: 1,
          borderTopColor: Colors.border,
        },
        headerStyle: {
          backgroundColor: Colors.white,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: Colors.primary,
        },
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={() => <Placeholder name="Accueil" />}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Commandes"
        component={() => <Placeholder name="Commandes" />}
        options={{
          tabBarIcon: ({ color, size }) => <ListOrdered size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Panier"
        component={() => <Placeholder name="Panier" />}
        options={{
          tabBarIcon: ({ color, size }) => <ShoppingCart size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profil"
        component={() => <Placeholder name="Profil" />}
        options={{
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default ClientTabs;
