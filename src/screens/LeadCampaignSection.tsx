import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import LeadCampaignCard from '../components/cards/LeadCampaignCard';
import {leadCampaignData} from '../jsonData/leadCampaignData';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const LeadCampaignSection = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <View style={{padding: 4, flexDirection: 'row'}}>
        {[...Array(2)].map((_, index) => (
          <View key={index} style={{marginRight: 5}}>
            <ShimmerPlaceholder
              width={130}
              height={150}
              autoRun={true}
              style={{borderRadius: 10}}
            />
          </View>
        ))}
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={styles.cardWrapper}>
        {leadCampaignData.map((item, index) => (
          <View style={styles.cardContainer} key={index}>
            <LeadCampaignCard
              title={item.title}
              description={item.description}
              completed={item.completed}
              pending={item.pending}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default LeadCampaignSection;

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '49%',
  },
});
