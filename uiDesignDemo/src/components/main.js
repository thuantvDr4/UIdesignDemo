/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
//==import libs
import {Container, Header, Content, Tab, Tabs} from 'native-base';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
//==import file
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
//=todo: BEGIN-MAIN
const Main = () => {
  //=todo: BEGIN-SETUP CONST
  const [tabs, setTabs] = useState({
    index: 0,
    routes: [
      {key: 'tab1', title: 'tab1'},
      {key: 'tab2', title: 'tab2'},
      {key: 'tab3', title: 'tab3'},
    ],
  });
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  //=todo: BEGIN-FUNCTION
  function _onSwipeUp(gestureState) {
    alert('swipe up');
  }
  function _onSwipeDown(gestureState) {
    alert('swipe down');
  }

  //=todo: BEGIN-RETURN
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <GestureRecognizer
        onSwipeUp={_onSwipeUp}
        onSwipeDown={_onSwipeDown}
        config={config}
        style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={{backgroundColor: 'blue', height: 80}} />
          <TabView
            swipeEnabled={true}
            animationEnabled={true}
            tabBarPosition={'top'}
            navigationState={tabs}
            renderScene={SceneMap({
              tab1: Tab1,
              tab2: Tab2,
              tab3: Tab3,
            })}
            renderTabBar={props => (
              <TabBar
                {...props}
                // renderIcon={props => getTabBarIcon(props)}
                // labelStyle={{color: 'grey'}}
                indicatorStyle={{backgroundColor: '#FF1744'}}
                style={{backgroundColor: 'pink'}}
                activeColor={'#FF1744'}
                inactiveColor={'grey'}
                inactiveOpacity={0.5}
                activeOpacity={1.0}
              />
            )}
            onIndexChange={index => setTabs({...tabs, index: index})}
            initialLayout={{width: Dimensions.get('window').width}}
          />

          <View style={{backgroundColor: 'grey', height: 80}} />
        </SafeAreaView>
      </GestureRecognizer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
