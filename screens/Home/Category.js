
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, FlatList, Image, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { base_url, image_url } from '../../Api/Api';

let backbtn;
let exitbtn;
Icon.getImageSource('chevron-left', 25, colors.primary).then(source => backbtn = source);
Icon.getImageSource('x', 25, colors.primary).then(source => exitbtn = source);


const CategoryDetail = (props) => {


    const componentId = props.componentId;
    const [CategoryDetail, setCategoryDetail] = useState([1, 2, 3, 4, 5]);
    const { userToken } = useSelector(state => state.appReducerData)
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(props.cat_id, 'id')
        getCateogoriesDetail()
    }, [])

    const getCateogoriesDetail = async () => {
        setLoading(true);
        const id = props.cat_id
        Axios.get(`${base_url}get-ads-against-category/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer ' + userToken
            }
        }).then(res => {
            // console.log('cat detail', res.data.ads)
            if (res.status == 200) {
                setCategoryDetail(res.data.ads)
                setLoading(false)
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

    const _adsForm = () => {
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'addform',
                            options: {
                                layout: {
                                    orientation: ['portrait'],
                                    backgroundColor: "#F5F6F8",
                                    componentBackgroundColor: '#F5F6F8',
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
                                        text: 'Add Your Ad',
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

    const renderDetail = (item, index) => {
        if (item.images.length == 0) {
            console.log('thek hai')
        }
        console.log('cate waly', item.images)
        return (
            <TouchableOpacity onPress={() => _ProductDetail(item)} style={styles.adsLabel}>
                <View style={styles.adscontainer}>
                    <View style={styles.adsBox}>
                        {item.images.length == 0 ? <Text>No image</Text> :
                            <Image source={{ uri: image_url + item.images[0].product_img }}
                                style={styles.adsImage} />}
                        <View style={{ padding: 5 }}>
                            <Text style={{ fontFamily: 'Lato-Regular' }}>{item.title}</Text>
                        </View>
                    </View>

                    <View style={styles.adsdescriptionbox}>
                        <Text style={styles.adsPrice}>${item.actual_price}</Text>
                        <Icon name={'heart'} size={20} color={colors.secondary} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const _ListEmpty = () => {
        return (
            <View style={{ flex: 1, marginVertical: 200, justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{
                    textAlign: 'center', color: colors.primary, fontFamily: 'Lato-Bold',
                    fontSize: 30
                }}>No data Found</Text>
            </View>
        );
    };

    const _ProductDetail = (item) => {
        console.log('cat_id', item.id)
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'productdetail',
                            id: "close-modal",
                            passProps: {
                                product_id: item.id
                            },
                            options: {
                                layout: {
                                    orientation: ['portrait'],
                                    backgroundColor: "#F5F6F8",
                                    componentBackgroundColor: '#F5F6F8',

                                },
                                statusBar: {
                                    style: 'dark',
                                    visible: true,
                                    backgroundColor: '#F5F6F8',
                                },
                                topBar: {
                                    visible: false,
                                    noBorder: true,
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
        <View style={styles.container}>
            <View style={{ alignItems: 'center', flexDirection: "row", marginVertical: 10 }}>
                <Text style={{ marginLeft: 20, fontFamily: 'Lato-Regular', fontSize: 20 }}>Category</Text>
            </View>

            <View style={{
                margin: 10, borderRadius: 10, flexDirection: "row", backgroundColor: "#fff",
                elevation: 5, alignItems: 'center'
            }}>
                <Icon name={'search'} style={{ marginLeft: 10 }} color={'#717171'} size={18} />
                <TextInput
                    placeholder={'Search'}
                    style={styles.textInput} />
                <Image source={require('../../assets/filter.png')} style={{ width: 20, height: 20 }} />
            </View>


            {Loading ? (
                <ActivityIndicator
                    color='red'
                    size={'large'}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                />
            ) :

                <FlatList
                    data={CategoryDetail}
                    renderItem={({ item, index }) => renderDetail(item, index)}
                    numColumns={2}
                    ListEmptyComponent={_ListEmpty}
                />

            }

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
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
        // resizeMode: 'contain',
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

export default CategoryDetail
