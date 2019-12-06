import { Authenticator, AmplifyTheme } from "aws-amplify-react-native";
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={AmplifyTheme.inputLabel}>Test</Text>
      <TextInput style={AmplifyTheme.input}></TextInput>
      <Authenticator amplifyConfig={{}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
