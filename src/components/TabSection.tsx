import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LeadCampaignSection from '../screens/LeadCampaignSection';
import styles from './styles/TabSection.style';
import colors from '../constants/colors';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState<
    'Recent' | 'All Group' | 'Archived'
  >('Recent');

  const renderContent = () => {
    switch (activeTab) {
      case 'Recent':
        return <LeadCampaignSection />;
      case 'All Group':
        return <Text style={styles.contentText}>Showing all items...</Text>;
      case 'Archived':
        return (
          <Text style={styles.contentText}>Showing archived items...</Text>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Tabs and Filter Icon */}
      <View style={styles.tabRow}>
        <View style={styles.tabs}>
          {['Recent', 'All Group', 'Archived'].map(tab => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab as any)}
                style={[styles.tabButton, isActive && styles.activeTabButton]}>
                <Text
                  style={[styles.tabText, isActive && styles.activeTabText]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity onPress={() => console.log('Filter clicked')}>
          <FontAwesome name="sliders" size={20} color={colors.gray} />
        </TouchableOpacity>
      </View>

      {/* Dynamic Content */}
      <View style={styles.contentBox}>{renderContent()}</View>
    </View>
  );
};

export default TabSection;
