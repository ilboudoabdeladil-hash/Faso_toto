import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MapPin, History, User, LifeBuoy } from 'lucide-react-native';
import Colors from '../constants/Colors';
import DeliveryMissions from '../screens/delivery/DeliveryMissions';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { View, Text } from 'react-native';

const Placeholder = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Écran {name}</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const DeliveryTabs = () => {
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
        name="Missions"
        component={DeliveryMissions}
        options={{
          tabBarIcon: ({ color, size }) => <MapPin size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="History"
        component={() => <Placeholder name="Historique" />}
        options={{
          tabBarLabel: 'Historique',
          tabBarIcon: ({ color, size }) => <History size={size} color={color} />,
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
      <Tab.Screen
        name="Support"
        component={() => <Placeholder name="Support" />}
        options={{
          tabBarIcon: ({ color, size }) => <LifeBuoy size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default DeliveryTabs;
