import React from 'react';
import { View, Text, Pressable, StyleSheet, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = () => {
  const handlePress = (boxNumber: number) => {
    Alert.alert(`Box ${boxNumber} Pressed!`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Pressable style={[styles.box, styles.firstBox]} onPress={() => handlePress(1)}>
            <Text style={styles.boxText}>Theory Questions</Text>
          </Pressable>
          <Pressable style={[styles.box, styles.secondBox]} onPress={() => handlePress(2)}>
            <Text style={styles.boxText}>Road Signs</Text>
          </Pressable>
          <Pressable style={[styles.box, styles.thirdBox]} onPress={() => handlePress(3)}>
            <Text style={styles.boxText}>Driving Videos</Text>
          </Pressable>
          <Pressable style={[styles.box, styles.fourthBox]} onPress={() => handlePress(4)}>
            <Text style={styles.boxText}>My Chat AI</Text>
          </Pressable>
          <Pressable style = {[styles.box, styles.fifthBox]} onPress= {() => handlePress(5)}>
            <Text style={styles.boxText}>My thoughts </Text>
          </Pressable>
        </ScrollView>

        <SafeAreaView style={styles.footer}>
          <Pressable style={styles.footerButton} onPress={() => Alert.alert('Footer pressed')}>
            <Text style={styles.footerText}>Footer Button</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 150, // Increased padding to account for Expo's footer
  },
  box: {
    width: 350,
    height: 100,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  firstBox: {
    backgroundColor: '#007AFF',
  },
  secondBox: {
    backgroundColor: '#34C759',
  },
  thirdBox: {
    backgroundColor: '#FF9500',
  },
  fourthBox: {
    backgroundColor: '#FF2D55',
  },
  fifthBox: {
    backgroundColor: '#5856D6',
  },
  boxText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    height: 70,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButton: {
    backgroundColor: '#005BBB',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});