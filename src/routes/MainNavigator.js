import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeatherIcon from "feather-icons-react";

import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";
import DonationScreen from "../screens/DonationScreen";
import AccountScreen from "../screens/AccountScreen";

import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  useEffect(() => {
    console.log("[App] onRegister: ");

    return () => {
      console.log("[App] unRegister");
    };
  }, []);

  const sizeIcon = 20;
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: "below-icon",
        activeTintColor: COLORS.primary,
        tabStyle: {
          paddingVertical: 5,
        },
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FeatherIcon icon="home" color={color} size="20" />
          ),
        }}
      />

      <Tab.Screen
        name="Artikel"
        component={ArticleScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <FeatherIcon icon="calendar" color={color} size={sizeIcon} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Donasi"
        component={DonationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FeatherIcon icon="droplet" color={color} size={sizeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Akun"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FeatherIcon icon="user" color={color} size={sizeIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
