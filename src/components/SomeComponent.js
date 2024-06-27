import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SomeComponent = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('@user_email');
        if (storedEmail !== null) {
            console.log(storedEmail);
          setEmail(storedEmail);
        }
      } catch (error) {
        console.error('Error retrieving email:', error);
      }
    };

    getEmail();
  }, []);

  return (
    <View>
      <Text>Email: {email}</Text>
    </View>
  );
};

export default SomeComponent;
