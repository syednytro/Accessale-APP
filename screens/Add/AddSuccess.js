import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
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
    {
        id: "4",
        price: '$33.99',
        title: "Select top Ad for 15 days"
    },
    {
        id: "5",
        price: '$55.99',
        title: "Select top Ad for 30 days"
    }
]

const AddSuccess = () => {

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.item}>
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
            </View>
        );
    }

    const _AllPackage = () => {
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'allpackage',
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

    return (
        <View style={{ flex: 1, }}>

            <View>
                <View style={{ marginVertical: 10, justifyContent: "space-between", alignItems: "center" }}>
                    {/* <View style={{ borderRadius: 300 / 2, justifyContent: 'center',
                     alignItems: 'center', height: 300, width: 300, backgroundColor: '#2B365C' }}> */}
                    <View style={{
                        borderRadius: 250 / 2, alignItems: "center", justifyContent: 'center', height: 150, width: 150,
                        alignItems: 'center'
                    }}>
                        <Image source={require('../../assets/success.png')} style={{ width: 150, height: 150 }} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: "center" }}>
                        <Text style={{ fontSize: 22, fontFamily: "Lato-Bold" }}>congrats Jane</Text>
                        <Text style={{ fontSize: 16, color: "#747474", fontFamily: "Lato-Regular" }}>your add has been posted</Text>
                    </View>

                </View>
            </View>
            <View style={styles.slidecontainer}>
                <Carousel
                    sliderWidth={360}
                    itemWidth={280}
                    data={PackageOffer}
                    renderItem={_renderItem}
                />
            </View>

            <TouchableOpacity onPress={_AllPackage} style={styles.offercontainer}>
                <View style={styles.label}>
                    <Text style={[styles.labelText, { fontSize: 16, color: '#272727' }]} >Collect your free 3 days offer</Text>
                    <Image style={styles.imagecontainer} source={require('../../assets/gift.png')} />
                </View>
                <View style={styles.salesContainer}>
                    <Text style={[styles.labelText, { fontSize: 14, color: '#747474' }]} >No worries we get you</Text>
                    <Image style={styles.imagecontainer} source={require('../../assets/bicep.png')} />
                </View>

                <View style={{ margin: 10, padding: 5 }}>
                    <Text style={styles.Adtext}>Share our app on
               your story / post and don't forget to tag us to get your 3 free days of Top Free Ad</Text>
                    <View style={styles.sendBtn}>
                        <Icon name={'send'} color={colors.primary} size={24} />
                    </View>
                </View>
            </TouchableOpacity>

            <View style={{margin:5,alignItems:"center"}}>
                <View style={{backgroundColor:colors.primary,padding:10,borderRadius:10,width:'40%',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:16,fontFamily:'Lato-Bold',color:'#fff'}}>Home</Text>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
    },
    slidecontainer: {
        // backgroundColor:"red",
        height: 160,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: "center"
    },
    item: {
        width: screenWidth - 85,
        height: screenWidth - 220,
        backgroundColor: '#fff',
        elevation: 10,
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

    offercontainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5, margin: 20
    },
    Adtext: {
        fontSize: 15,
        textAlign: 'center',
        color: "#192650",
        fontFamily: 'Lato-Regular'
    },
    sendBtn: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    imagecontainer: {
        width: 15,
        height: 15,
        marginLeft: 10
    }

})

export default AddSuccess;