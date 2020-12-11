import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../theme/theme';
import { Navigation } from "react-native-navigation";

let backbtn;
Icon.getImageSource('chevron-left', 25, colors.primary).then(source => backbtn = source);

const CustomTopbar = () => {

  const _call = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'call',
              options: {
                layout: {
                  orientation: ['portrait'],
                  backgroundColor: "#192650",
                  componentBackgroundColor: '#192650',
                },
                statusBar: {
                  style: 'dark',
                  visible: true,
                  backgroundColor: '#192650',
                },
                topBar: {
                  visible: false,
                  noBorder: true,
                  leftButtons: [
                    {
                      icon: backbtn,
                      id: 'close-modal',
                    }
                  ],
                  elevation: 0,
                },
              },
            },
          },
        ],
      },
    });
  }

  return (
    <View style={styles.navbarcontainer}>
      <Image source={require('../assets/user.png')}
        style={styles.image} />

      <View style={styles.navbar}>

        <View style={styles.navItem}>
          <Text style={{ fontFamily: "Lato-Regular", fontSize: 16 }}>Ralph edwards</Text>
          <Text style={{ fontFamily: "Lato-Light" }}>online</Text>
        </View>

        <View style={styles.rightNav}>
          <TouchableOpacity onPress={_call}>
            <Icon name={'phone'} size={20} style={{ marginRight: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name={'more-vertical'} size={20} style={{ marginLeft: 5 }} />
          </TouchableOpacity>
        </View>

      </View>


    </View>
  );
};


const styles = StyleSheet.create({


  image: {
    width: 40,
    height: 40,
    borderRadius: 100 / 2,
  },
  navbar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5
  },
  navbarcontainer: {
    flexDirection: "row",
    alignItems: 'center'
  },

  logo: {
    width: 45,
    height: 45,
  },
  rightNav: {
    width: '35%',
    flexDirection: "row",
    padding: 10
  },
  navItem: {
    marginLeft: 10,
    width: '65%',
  },

});


export default CustomTopbar;