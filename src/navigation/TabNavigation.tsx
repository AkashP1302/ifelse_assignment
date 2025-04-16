import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import type {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import colors from '../constants/colors';

const GroupsScreen: React.FC = () => (
  <View style={styles.screen}>
    <Text>Groups Screen</Text>
  </View>
);

const TeamScreen: React.FC = () => (
  <View style={styles.screen}>
    <Text>Team Screen</Text>
  </View>
);

const SettingScreen: React.FC = () => (
  <View style={styles.screen}>
    <Text>Settings Screen</Text>
  </View>
);

type RootTabParamList = {
  Home: undefined;
  Groups: undefined;
  Team: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}): BottomTabNavigationOptions => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: 2,
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName = 'home';

            switch (route.name) {
              case 'Home':
                iconName = 'line-chart';
                break;
              case 'Groups':
                iconName = 'folder';
                break;
              case 'Team':
                iconName = 'users';
                break;
              case 'Settings':
                iconName = 'cog';
                break;
            }

            return (
              <FontAwesome
                name={iconName}
                size={20}
                color={focused ? colors.primary : colors.gray}
                solid={false}
              />
            );
          },
          tabBarStyle: {
            height: 80,
            backgroundColor: '#fff',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            paddingBottom: Platform.OS === 'ios' ? 20 : 10,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: -3},
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 10,
            position: 'absolute',
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.gray,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarLabel: 'Overview'}}
        />
        <Tab.Screen
          name="Groups"
          component={GroupsScreen}
          options={{tabBarLabel: 'Groups'}}
        />
        <Tab.Screen
          name="Team"
          component={TeamScreen}
          options={{tabBarLabel: 'Team'}}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{tabBarLabel: 'Settings'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
