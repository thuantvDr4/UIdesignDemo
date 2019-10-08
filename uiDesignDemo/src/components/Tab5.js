/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
//==import libs
import {Container, Header, Content, Tab, Tabs} from 'native-base';
//==import file

//=todo: BEGIN-MAIN
const Tab5 = () => {
  //=todo: BEGIN-SETUP CONST

  //=todo: BEGIN-FUNCTION

  //=todo: BEGIN-RETURN
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text>TAB 5</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Tab5;
