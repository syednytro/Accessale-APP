
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, FlatList, Image, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { actionAdsOffer } from '../../redux/user/action';
import { base_url, image_url } from '../../Api/Api';

let backbtn;
let exitbtn;
Icon.getImageSource('chevron-left', 25, colors.primary).then(source => backbtn = source);
Icon.getImageSource('x', 25, colors.primary).then(source => exitbtn = source);


const imageurl = 'http://b482f4360fa1.ngrok.io/'

const AdsView = (props) => {

    const componentId = props.componentId;
    const dispatch = useDispatch();
    const [ProductDetail, setProductDetail] = useState([]);
    const [ProductImages, setProductImages] = useState([]);
    // const [Offer, setOffer] = useState();

    const { offer, userToken } = useSelector(state => state.appReducerData)
    const [Loading, setLoading] = useState(true);


    useEffect(() => {
        getProductDetail()
    }, [])

    const getProductDetail = async () => {
        setLoading(true);
        const id = props.ads_id
        Axios.get(`${base_url}get-product/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer ' + userToken
            }
        }).then(res => {
            console.log('cat detail', res.data.product)
            if (res.status == 200) {
                setProductDetail(res.data.product)
                setProductImages(res.data.product.images)
                setLoading(false)
                // console.log(ProductDetail.images)
            }
        }).catch(error => {
            console.log('errr', error)
            setLoading(false)
        });
    }

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    const renderDetail = (item) => {
        // console.log('product', item)
        return (
            <View>
                <View style={{ padding: 5, flexDirection: 'row' }}>
                    <View style={{ width: '45%', margin: 5 }}>
                        <Image source={require('../../assets/1.png')} style={{ borderRadius: 10, width: 160, height: 220 }} />
                    </View>
                    <View style={{ width: '45%', margin: 5 }}>
                        <Image source={require('../../assets/3.png')} style={{ margin: 5, borderRadius: 10, width: 160, height: 100 }} />
                        <Image source={require('../../assets/2.png')} style={{ margin: 5, borderRadius: 10, width: 160, height: 100 }} />
                        <TouchableOpacity style={{ justifyContent: 'flex-end', alignItems: 'flex-end', padding: 0 }}>
                            <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 }}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ margin: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20 }}>${ProductDetail.actual_price}</Text>
                        <Icon name={'heart'} size={18} color={colors.secondary} />
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        {/* <Text style={{ fontSize: 16, color: '#464646', fontFamily: "Lato-Regular" }}>{ProductDetail.title}</Text> */}
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <Image source={require('../../assets/map.png')} style={{ width: 20, height: 20 }} />
                            <Text style={{ marginLeft: 5, fontSize: 14, color: '#828282' }}>174 queen street toronto Ontanio fdk</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={{ fontSize: 16, color: '#464646', fontFamily: "Lato-Regular" }}>Description</Text>
                        {/* <Text style={{ fontSize: 14, color: '#828282' }}>{ProductDetail.description}</Text> */}
                    </View>

                </View>
            </View>
        )
    }

    const _ListEmpty = () => {
        return (
            <View style={{ flex: 1, marginVertical: 200, justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{
                    textAlign: 'center', color: colors.primary, fontFamily: 'Lato-Bold',
                    fontSize: 30
                }}>No detail Found</Text>
            </View>
        );
    };

    const _renderallImages = () => {
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'allimages',
                            passProps:{
                                Images : ProductImages
                            },
                            options: {
                                layout: {
                                    orientation: ['portrait'],
                                },
                                statusBar: {
                                    style: 'dark',
                                    visible: true,
                                    backgroundColor: '#F5F6F8',
                                },
                                topBar: {
                                    visible: true,
                                    noBorder: true,
                                    title: {
                                        text: 'All Images',
                                    },
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

    const renderImages = () => {

        const img = ProductImages.slice(0, 3)
        console.log('img')
        return (
            img.map((item, index) => {
                console.log('img', item)
                return (
                    <View key={index} style={{ width: '50%' }}>
                        <Image
                            source={{ uri: image_url + item.product_img }}
                            resizeMode='cover'
                            style={{ margin: 5, borderRadius: 10, width: 160, height: 100 }} />
                        {/* <Image
                            source={{ uri: image_url + img[2].product_img }}
                            resizeMode='cover'
                            style={{ margin: 5, borderRadius: 10, width: 160, height: 100 }} />
                        <TouchableOpacity style={{
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end', marginRight: 10
                        }}>
                            <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 }}>SEE ALL</Text>
                        </TouchableOpacity> */}
                    </View>
                )
            })
        )
    }

    const _offerClose = () => {
        // setOffer(false)
        dispatch(actionAdsOffer(0))
    }

    const _onOfferPage = () => {
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'adspackage',
                            options: {
                                statusBar: {
                                    style: 'dark',
                                    visible: true,
                                    backgroundColor: '#F5F6F8',
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

    const __renderCard = (card) => {
        if (card != 0) {
            return <View style={{ margin: 20, borderRadius: 15, backgroundColor: "#fff", elevation: 10 }}>
                <TouchableOpacity onPress={_offerClose} style={{ padding: 5 }}>
                    <Icon name={'x'} size={18} style={{ color: colors.secondary, justifyContent: 'flex-end', alignSelf: 'flex-end' }} />
                </TouchableOpacity>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Lato-Regular' }}>Still not a top advertisement</Text>
                    <Image source={require('../../assets/smile.png')} style={{ marginLeft: 5, width: 20, height: 20 }} />
                </View>
                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={_onOfferPage} style={{ borderRadius: 5, padding: 8, marginLeft: 10, backgroundColor: colors.secondary }}>
                        <Text style={{ fontFamily: 'Lato-Regular', color: "#fff" }}>click here</Text>
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 10, fontFamily: 'Lato-Regular' }}>to reach more people</Text>
                </View>
            </View>
        } else {
            return <View />
        }
    }

    return (
        <View style={styles.container}>

            <ScrollView>
                {__renderCard(offer)}

                {Loading ? (
                    <ActivityIndicator
                        color='red'
                        size={'large'}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    />
                ) :
                    <View>
                        <View style={{  marginLeft: 10, flexWrap: 'wrap', margin: 5, flexDirection: 'row'  }}>
                            {renderImages()}
                        </View>
                        <TouchableOpacity  onPress={_renderallImages} style={{ margin: 10 }}>
                            <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                                <Text style={{ fontSize: 18 }}>See all</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ margin: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 20 }}>${ProductDetail.actual_price}</Text>
                                <Icon name={'heart'} size={18} color={colors.secondary} />
                            </View>

                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 16, color: '#464646', fontFamily: "Lato-Regular" }}>{ProductDetail.title}</Text>
                                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                    <Image source={require('../../assets/map.png')} style={{ width: 20, height: 20 }} />
                                    <Text style={{ marginLeft: 5, fontSize: 14, color: '#828282' }}>{ProductDetail.address}</Text>
                                </View>
                            </View>

                            <View>
                                <Text style={{ fontSize: 16, color: '#464646', fontFamily: "Lato-Regular" }}>Description</Text>
                                <Text style={{ fontSize: 14, color: '#828282' }}>{ProductDetail.description}</Text>
                            </View>

                        </View>
                    </View>
                }

            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 80
    },
    textInput: {
        width: '80%',
        fontFamily: 'Lato-Regular',
        justifyContent: 'flex-end',
        height: 40,
        fontSize: 15,
    },
    adsLabel: {
        flex: .5, margin: 5, alignItems: 'center'
    },

    adscontainer: {
        justifyContent: 'center', alignItems: "center",
        backgroundColor: "#fff", margin: 0,
        elevation: 5, borderRadius: 20
    },
    adsBox: {
        padding: 5,
    },
    adsImage: {
        resizeMode: 'contain',
        borderRadius: 10,
        margin: 5,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        height: 170
    },
    adsdescriptionbox: {
        width: 150,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    adsPrice: {
        fontSize: 16, fontFamily: 'Lato-Bold', color: colors.primary
    }

});

export default AdsView
