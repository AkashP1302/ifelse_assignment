import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Dashboard from './Dashboard';
import WalletCard from '../components/WalletCard';
import ActivitySection from './ActivitySection';
import TaskSummaryCard from '../components/cards/TaskSummaryCard';
import TabSection from '../components/TabSection';
import ActivityChartCard from '../components/cards/ActivityChartCard';
import UserGreetingCard from '../components/cards/UserGreetingCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles/homeScreen.styles';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80}>
        <ScrollView
          contentContainerStyle={[
            styles.container,
            {paddingBottom: insets.bottom + 100},
          ]}
          showsVerticalScrollIndicator={false}>
          <UserGreetingCard />
          <Dashboard />
          <WalletCard />
          <ActivitySection />
          <TaskSummaryCard />
          <TabSection />
          <ActivityChartCard />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
