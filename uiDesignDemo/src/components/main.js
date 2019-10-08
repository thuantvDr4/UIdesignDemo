/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, Fragment, useRef} from 'react';
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
import * as Animatable from 'react-native-animatable';
//==import file
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
//=todo: BEGIN-MAIN
const Main = () => {
  //=todo: BEGIN-SETUP CONST
  const view1 = useRef(null);
  const view2 = useRef(null);
  const [defaultState, setDefaultState] = useState({
    isShow: true,
  });

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
    // alert('swipe up');
    if (defaultState.isShow) {
      setDefaultState({...defaultState, isShow: false});
      view1.current.fadeInLeft(300);
      view2.current.fadeInLeft(300);
    }
  }
  function _onSwipeDown(gestureState) {
    // alert('swipe down');
    if (!defaultState.isShow) {
      return setDefaultState({...defaultState, isShow: true});
    }
  }

  //=todo: BEGIN-RETURN
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <GestureRecognizer
        onSwipeUp={_onSwipeUp}
        onSwipeDown={_onSwipeDown}
        config={config}
        style={styles.container}>
        <SafeAreaView style={styles.container}>
          {defaultState.isShow && (
            <Animatable.View
              ref={view1}
              style={{backgroundColor: 'blue', height: 80}}
            />
          )}

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

          {defaultState.isShow && (
            <Animatable.View
              ref={view2}
              style={{backgroundColor: 'grey', height: 80}}
            />
          )}
        </SafeAreaView>
      </GestureRecognizer>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
