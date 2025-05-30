import * as React from 'react';

import { Text, View, StyleSheet } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';



function Home({ route }) {
  const { usuario, contrasena } = route.params || {};
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>Usuario: {usuario || 'No hay usuario'}</Text>
      <Text style={styles.text}>Contraseña: {contrasena || 'No hay contraseña'}</Text>
    </View>
  );
}

function Buscador() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>Buscador</Text>
    </View>
  );
}

function Perfil() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>Perfil</Text>
    </View>
  );
}



function ScreenA2() {
  return <View style={styles.homeScreen}></View>;
}

function ScreenB2() {
  return <View style={styles.homeScreen}></View>;
}

function ScreenC2() {
  return <View style={styles.homeScreen}></View>;
}



const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();

function StackANavigator({ route }) {
  const { usuario, contrasena } = route.params || {};
  return (
    <StackA.Navigator>
      <StackA.Screen 
        name="HomeScreen" 
        component={Home} 
        initialParams={{ usuario, contrasena }}
      />
      <StackA.Screen name="ScreenA2" component={ScreenA2} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="BuscadorScreen" component={Buscador} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
    </StackB.Navigator>
  );
}

function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="PerfilScreen" component={Perfil} />
      <StackC.Screen name="ScreenC2" component={ScreenC2} />
    </StackC.Navigator>
  );
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={StackANavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Buscador"
          component={StackBNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={StackCNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}



const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default MyTabs;
