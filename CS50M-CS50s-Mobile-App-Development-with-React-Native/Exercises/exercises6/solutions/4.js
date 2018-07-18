import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createTabNavigator, createStackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Home Screen</Text>
    <Button
      title="Go to Jane's Contact Screen"
      onPress={() => {
        navigation.navigate('ContactScreen', { name: 'Jane' });
      }}
    />
  </View>
);

const InfoScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Contact Info</Text>
  </View>
);

const FriendsScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Friends</Text>
    <Button
      title="Go to Bob's Contact Screen"
      onPress={() => {
        navigation.push('ContactScreen', { name: 'Bob' });
      }}
    />
  </View>
);

/////
// Do not edit anything above this line
/////

// The reasoning for this solution is explained here:
// https://v2.reactnavigation.org/docs/common-mistakes.html#explicitly-rendering-more-than-one-navigator

const ContactScreen = createTabNavigator({
  InfoScreen,
  FriendsScreen,
});

const AppNavigator = createStackNavigator({
  HomeScreen,
  ContactScreen,
});

export default AppNavigator;
