import {Text, Button} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const HeaderlessScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>헤더 X</Text>
      <Button onPress={() => navigation.pop()} title="뒤로가기" />
    </SafeAreaView>
  );
};

export default HeaderlessScreen;
