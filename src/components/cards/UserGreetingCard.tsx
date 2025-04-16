import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import {userData} from '../../jsonData/userData';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import styles from './styles/UserGreetingCard.style';

const UserGreetingCard = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <View style={{padding: 4, flexDirection: 'row'}}>
        {[...Array(1)].map((_, index) => (
          <View key={index} style={{marginRight: 8}}>
            <ShimmerPlaceholder
              width={370}
              height={100}
              autoRun={true}
              style={{borderRadius: 10}}
            />
          </View>
        ))}
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>Hi, {userData.name}</Text>
        <View style={styles.phoneRow}>
          <FontAwesome name="phone" size={16} color="#999" />
          <Text style={styles.phoneText}>{userData.phone}</Text>
        </View>
      </View>
      <Image source={{uri: userData.imageUrl}} style={styles.profileImage} />
    </View>
  );
};

export default UserGreetingCard;
