import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Driver
            </Text>
            <View style={styles.navSectionStyle}>
            <View style={styles.navItemStyle}>
            <IOSIcon name="ios-car" size={25} />
              <Text onPress={this.navigateToScreen('Page1')}>
                Start Driving
              </Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Rider
            </Text>
            <View style={styles.navSectionStyle}>
            <View style={styles.navItemStyle}>
            <IOSIcon name="ios-car" size={25} />
              <Text onPress={this.navigateToScreen('Page1')}>
                Find Ride
              </Text>
              </View>
            </View>
            {/* <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                Page2
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                Page3
              </Text>
            </View>             */}
          </View>
          {/* <View>
            <Text style={styles.sectionHeadingStyle}>
              Section 3
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page4')}>
              Page4
              </Text>
            </View>
          </View> */}
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;