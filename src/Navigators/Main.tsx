import AnimatedIcon from '@/Components/AnimatedIcon'
import { SettingsContainer } from '@/Containers'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Settings"
        component={SettingsContainer}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AnimatedIcon />
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={SettingsContainer}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="settings" color={color} size={size} />
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
