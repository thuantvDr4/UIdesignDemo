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
//==import file
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
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

  //=todo: BEGIN-FUNCTION

  //=todo: BEGIN-RETURN
  return (
    <>
      <StatusBar barStyle="dark-content" />
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
        // initialLayout={{width: Dimensions.get('window').width}}
      />
      {/*<TabView*/}
      {/*  swipeEnabled={true}*/}
      {/*  tabBarPosition={'bottom'}*/}
      {/*  navigationState={tabs}*/}
      {/*  renderScene={SceneMap({*/}
      {/*    tab1: Tab1,*/}
      {/*    tab2: Tab2,*/}
      {/*    tab3: Tab3,*/}
      {/*  })}*/}
      {/*  renderTabBar={props => (*/}
      {/*    <TabBar*/}
      {/*      {...props}*/}
      {/*      // renderIcon={props => getTabBarIcon(props)}*/}
      {/*      // labelStyle={{color: 'grey'}}*/}
      {/*      indicatorStyle={{backgroundColor: '#FF1744'}}*/}
      {/*      style={{backgroundColor: 'pink'}}*/}
      {/*      activeColor={'#FF1744'}*/}
      {/*      inactiveColor={'grey'}*/}
      {/*      inactiveOpacity={0.5}*/}
      {/*      activeOpacity={1.0}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*  onIndexChange={index => setTabs({...tabs, index: index})}*/}
      {/*  initialLayout={{width: Dimensions.get('window').width}}*/}
      {/*/>*/}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
