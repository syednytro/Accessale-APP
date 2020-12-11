
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, ScrollView, View, Dimensions,Text, FlatList, Image, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { image_url } from '../../Api/Api';

let backbtn;
let exitbtn;
Icon.getImageSource('chevron-left', 25, colors.primary).then(source => backbtn = source);
Icon.getImageSource('x', 25, colors.primary).then(source => exitbtn = source);


const { width } = Dimensions.get('window');

const imageurl = 'http://b482f4360fa1.ngrok.io/'

const AllImages = (props) => {

    const componentId = props.componentId;
    const [ProductDetail, setProductDetail] = useState([]);

    useEffect(() => {
        console.log('my images', props.Images)
    }, [])


    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    return (
        // <ScrollView style={styles.container} horizontal={true}
        //     decelerationRate={0}
        //     snapToInterval={200} //your element width
        //     snapToAlignment={"center"}>
        //     {/* <View> */}
        //         {props.Images.map((i,index) => {
        //             return (
        //                 <View key={index} style={{height:'100%',backgroundColor:"blue"}}>

        //                     <Image  source={{ uri: image_url + i.product_img }} style={{width:'100%',height:'100%'}} />

        //                 </View>
        //             );
        //         })}
        //     {/* </View> */}
        // </ScrollView>
        <ScrollView
            style={styles.container}
            //pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            decelerationRate={0}
            snapToInterval={width}
            snapToAlignment={"center"}
            contentInset={{
                top: 0,
                left: 30,
                bottom: 0,
                right: 0,
            }}>
            {props.Images.map((i, index) => {
                return (
                    <View key={index} style={styles.Imagebox}>
                        <Image source={{ uri: image_url + i.product_img }} style={{ width: '100%', height: '100%' }} />
                    </View>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        marginTop: 80,
    },
    Imagebox: {
        width: width,
        // margin: 10,
        // borderRadius: 10,
      },
});

export default AllImages
