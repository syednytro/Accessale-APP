import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, BackHandler, ActivityIndicator, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { colors } from '../../theme/theme';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { base_url, image_url } from '../../Api/Api';

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

const AdsPackage = (props) => {

    const componentId = props.componentId;

    const { userToken } = useSelector(state => state.appReducerData)
    const [Loading, setLoading] = useState(true);
    const [Offers, setOffer] = useState([]);

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
        getAdsOffer()
    }, []);

    const getAdsOffer = async () => {
        setLoading(true);
        Axios.get(`${base_url}get-offers`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer ' + userToken
            }
        }).then(res => {
            console.log('cat detail', res.data)
            if (res.status == 200) {
                setOffer(res.data.Offers)
                setLoading(false)
            }
        }).catch(error => {
            console.log('errr', error)
            setLoading(false)
        });
    }

    const _Paymentpage = () => {
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'paymentcard',
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

    const _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={_Paymentpage} style={styles.item}>
                <View style={styles.label}>
                    <Icon name={'check-circle'} color={colors.primary} size={22} />
                    <Text style={styles.labelText} >{item.title}</Text>
                </View>
                <View style={styles.salesContainer}>
                    <Text style={[styles.labelText, { fontSize: 14, color: '#747474' }]}>{item.description}</Text>
                    <Image style={styles.imagecontainer} source={require('../../assets/rocket.png')} />
                </View>

                <View style={styles.buttoncontainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttontext}>$ {item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
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
            {Loading ? (
                <ActivityIndicator
                    color='red'
                    size={'large'}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                />
            ) :
                <View style={styles.slidecontainer}>
                    <Carousel
                        sliderWidth={360}
                        itemWidth={300}
                        data={Offers}
                        renderItem={_renderItem}
                    />
                </View>
            }

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

        </View>
    );

}

const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
    },
    slidecontainer: {
        height: 200,
        // marginTop:10,
        marginVertical: 90,
        justifyContent: 'center',
        alignItems: "center"
    },
    item: {
        width: screenWidth - 85,
        height: screenWidth - 220,
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
        color: "#fff",
        fontSize: 18
    },

    offercontainer: {
        backgroundColor: '#fff',
        borderRadius: 10, elevation: 5,
        margin: 20
    },
    Adtext: {
        fontSize: 15, textAlign: 'center',
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

export default AdsPackage;