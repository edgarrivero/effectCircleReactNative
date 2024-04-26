import React from 'react';
import { View, Text, Button } from 'react-native';

const LoggedInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome!</Text>
      <Text>You are now logged in.</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()} // O cualquier otra navegación que desees
      />
    </View>
  );
};

export default LoggedInScreen;