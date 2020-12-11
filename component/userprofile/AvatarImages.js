import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Text, FlatList,BackHandler, TouchableOpacity, Animated, TouchableWithoutFeedback, Easing, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme';

const Details = [
  {
    type: "1",
    image: require('../../assets/avtar1.png'),
  },
  {
    type: "2",
    image: require('../../assets/avtar2.png'),
  },
  {
    type: "3",
    image: require('../../assets/avtar3.png')
  },
  {
    type: "4",
    image: require('../../assets/avtar4.png')
  },
  // {
  //   type: "5",
  //   image: require('../../assets/avtar4.png')
  // },
  // {
  //   type: "6",
  //   image: require('../../assets/avtar4.png')
  // },

]

const AvatarImages = (props) => {

  const componentId = props.componentId;
   
  useEffect(() => {
    // console.log('avaaa',props.dataimage)
      BackHandler.addEventListener("hardwareBackPress", back);

      return () =>
          BackHandler.removeEventListener("hardwareBackPress", back);
  }, []);

  const back = () => {
      Navigation.dismissOverlay(componentId);
      return true;
  };


  const [alertY, setalertY] = useState(new Animated.Value(0))
  const [avtarimage, setavtarimage] = useState(Details)

  const _closeAlert = () => {
    Navigation.dismissOverlay(props.componentId)
  };

  const _renderimage = () =>
    avtarimage.map((item, index) => {
      return (
        <View style={{
          flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10,
          backgroundColor: "blue"
        }}>
          <View style={{ flexDirection: 'row', margin: 5, borderRadius: 20, width: 70, height: 70, justifyContent: "center", alignItems: 'center' }}>
            {/* <Image source={require('./assets/smile.png')} height={80} width={80} /> */}
            <Image height={80} width={80} source={item.image} />
          </View>
        </View>
      )
    })


  const alertTranslateY = alertY.interpolate({
    inputRange: [0, 1],
    outputRange: [150, 0],
    extrapolate: 'clamp',
  });

  const GetImage = (item) => {
    // console.warn(item, 'item')
    _closeAlert()

    Navigation.showOverlay({
      component: {
        name: 'profileimages',
        passProps:{
          data:item,
          imageprop: props.dataimage
        },
        options: {
          overlay: {
            interceptTouchOutside: true,
          },
          statusBar: {
            backgroundColor: '#fff',
            style: 'dark',
          },
        },
      },
    });


  }

  return (
    <Animated.View style={{
      ...styles.container,
      height: 260,
      maxHeight: 260,
      padding: 20,
      marginHorizontal: 10,
      backgroundColor: '#fff',
      transform: [
        { translateY: alertTranslateY }
      ]
    }}>

      <View style={styles.alertDetails}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
          <Image source={require('../../assets/smile.png')} height={30} width={30} style={styles.icon} />
        </View>

        <Text style={styles.txt}>Choosse Avatar</Text>
      </View>

      <FlatList
        data={avtarimage}
        renderItem={({ item }) =>
          <View style={{ padding: 10,justifyContent:'flex-end',alignItems:'center' }}>
            <TouchableOpacity onPress={() => GetImage(item.type)} style={{
              margin: 5, borderRadius: 20,
              width: 70, height: 70, justifyContent: "center", alignItems: 'center'
            }}>
              <Image height={80} width={80} source={item.image} />
            </TouchableOpacity>
          </View>
        }
        numColumns={3}
      />

    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    justifyContent:"center",
    alignItems:'center'
  },
  txt: {
    fontSize: 16,
    marginLeft: 20,
    color: colors.primary,
    textAlign: 'center',
    fontFamily: 'Lato-Regular'

  },
  icon: {
    alignSelf: 'center'
  },
  alertDetails: {
    marginVertical: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default AvatarImages;
