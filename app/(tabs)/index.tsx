import { Image } from 'expo-image';
import { Platform, StyleSheet, View, TextInput, Pressable } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
  };

  const handleGoogleLogin = () => {
    console.log('Logging in with Google');
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "transparent", light: "transparent" }}
        //@ts-ignore
        headerHeight={200}
        contentContainerStyle={styles.contentContainer}
        
      >
        <View style={styles.formContainer}>
          <ThemedText style={styles.title}>MET DRIVING</ThemedText>
          
          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Login Button */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#FF5733' : '#007AFF' },
            ]}
            onPress={handleLogin}
          >
            <ThemedText style={styles.buttonText}>Sign In</ThemedText>
            
          </Pressable>

          {/* Google Login Button */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#FF5733' : '#DB4437' }, // Google red color
            ]}
            onPress={handleGoogleLogin} 
          >
            <ThemedText style={styles.buttonText}>Sign In with Google</ThemedText>
          </Pressable>

          {/* Additional Links */}
          <View style={styles.linksContainer}>
            <Pressable>
              <ThemedText style={styles.linkText}>Forgot Password?</ThemedText>
            </Pressable>
            <Pressable>
              <ThemedText style={styles.linkText}>Create Account</ThemedText>
            </Pressable>
          </View>
        </View>
      </ParallaxScrollView>
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start', 
  },
  formContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 10, 
  
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    
    
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  linkText: {
    color: '#007AFF',
    fontSize: 14,
  },
});