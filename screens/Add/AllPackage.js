import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, BackHandler, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { colors } from '../../theme/theme';

let backbtn;
let exitbtn;
Icon.getImageSource('chevron-left', 25, colors.primary).then(source => backbtn = source);
Icon.getImageSource('x', 25, colors.primary).then(source => exitbtn = source);

const { width: screenWidth } = Dimensions.get('window')

const PackageOffer = [
    {
        id: "1",
        price: '$13.99',
        title: "Select top Ad for 7 days"
    }, {
        id: "2",
        price: '$22.99',
        title: "Select top Ad for 3 days "
    }, {
        id: "3",
        price: '$28.99',
        title: "Select top Ad for 10 days"
    },
]

const AllPackage = (props) => {


    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    const back = () => {
        Navigation.dismissModal(componentId);
        return true;
    };

    useEffect(() => {
        console.log(props.updatedata)
        BackHandler.addEventListener("hardwareBackPress", back);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", back);
    }, []);



    const _AdsReview = () => {
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'adreview',
                            options: {
                                layout: {
                                    orientation: ['portrait'],
                                    backgroundColor: "#fff",
                                    componentBackgroundColor: '#fff',
                                },
                                statusBar: {
                                    style: 'dark',
                                    visible: true,
                                    backgroundColor: '#fff',
                                },
                                topBar: {
                                    visible: true,
                                    noBorder: true,
                                    rightButtons: [
                                        {
                                            icon: exitbtn,
                                            id: 'close-modal'
                                        }

                                    ],
                                    leftButtons: [
                                        {
                                            icon: backbtn,
                                            id: 'close-modal',
                                        }
                                    ],
                                    elevation: 0,
                                    drawBehind: true,
                                    background: {
                                        color: 'transparent',
                                    },
                                },
                            },
                        },
                    },
                ],
            },
        });
    }

    const _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={_AdsReview} style={styles.item}>
                <View style={styles.label}>
                    <Icon name={'check-circle'} color={colors.primary} size={22} />
                    <Text style={styles.labelText} >{item.title}</Text>
                </View>
                <View style={styles.salesContainer}>
                    <Text style={[styles.labelText, { fontSize: 14, color: '#747474' }]} >Boost Your Sales</Text>
                    <Image style={styles.imagecontainer} source={require('../../assets/rocket.png')} />
                </View>

                <View style={styles.buttoncontainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttontext}>{item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>

            <FlatList
                data={PackageOffer}
                renderItem={_renderItem}

            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        // justifyContent:"center",
        alignItems: "center"
    },
    slidecontainer: {
        height: 170,
        marginVertical: 80,
        justifyContent: 'center',
        alignItems: "center"
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: screenWidth - 85,
        height: screenWidth - 200,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10,
    },
    label: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    labelText: {
        fontFamily: "Lato-Regular",
        fontSize: 16,
        color: '#272727',
        marginLeft: 10
    },
    salesContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttoncontainer: {
        marginVertical: 20,
        padding: 10,
        justifyContent: "center",
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        width: 140
    },
    buttontext: {
        fontFamily: 'Lato-Bold',
        color: "#fff"
    },


    imagecontainer: {
        width: 15,
        height: 15,
        marginLeft: 10
    }

})

export default AllPackage;