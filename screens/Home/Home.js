
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, FlatList, Image, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RNNDrawer, SideMenuView } from "react-native-navigation-drawer-extension";
import Axios from 'axios';
import { actionCategory } from '../../redux/user/action';
import { base_url, image_url } from '../../Api/Api';
import { useDispatch, useSelector } from 'react-redux';


const imageurl = 'http://9b1aa250dd6c.ngrok.io/'

const Home = (props) => {

    const componentId = props.componentId;

    const dispatch = useDispatch();
    const { userToken, } = useSelector(state => state.appReducerData)

    const [myData, setMyData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [Category, setCategory] = useState([]);
    const [text, setText] = useState('');
    const [token, setToken] = useState(false);
    const [Product, setProduct] = useState([]);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        getCateogories()
        getProduct()
    }, [])

    const getCateogories = async () => {
        setLoading(true);
        await Axios.get(`${base_url}get-all-categories`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer ' + userToken
            }
        }).then(res => {
            // console.log('categories', res.data)
            if (res.status == 200) {
                // console.log('aya')
                setCategory(res.data.categories)
                dispatch(actionCategory(res.data.categories));

            }
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            console.log('errr', error)
        });
    }

    const getProduct = async () => {

        await Axios.get(`${base_url}get-homepage-products`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer ' + userToken
            }
        }).then(res => {
            // console.log('products', res.data.ads)
            if (res.status == 200) {
                setProduct(res.data.ads)
            }

        }).catch(error => {
            console.log('errr', error)
        });
    }

    const renderItem = (item, index) => {
        console.log(item.product_img)
        return (
            <TouchableOpacity onPress={() => _ProductDetail(item)} style={styles.adsLabel}>
                <View style={styles.adscontainer}>
                    <View style={styles.adsBox}>
                        {
                            item.image !== null ?
                                <Image style={styles.adsImage}
                                    source={{ uri: image_url + item.image.product_img }} />
                                :
                                <Image style={styles.adsImage}
                                    source={require('../../assets/imagenotfound.png')} />

                        }

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

    const getDrawer = () => {
        // console.log('draweeeeer')
        RNNDrawer.showDrawer({
            component: {
                name: "categorydrawer",
                passProps: {
                    categoryitem: Category,
                    direction: "left",
                    drawerScreenWidth: "70%",
                    style: {
                        backgroundColor: '#fff',
                        // marginLeft: 30
                    },
                    parentComponentId: componentId,
                },
            }
        });

    }

    const _filter = () => {

        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'filter',
                            id: "close-modal",
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

    const _AdsScreen = () => {

        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'addhome',
                            id: "close-modal",
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

    const _categoryDetail = (item) => {
        // console.log('cat_id', item.id)
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'categorydetail',
                            id: "close-modal",
                            passProps: {
                                cat_id: item.id
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

    const _ProductDetail = (item) => {
        // console.log('cat_id', item.id)
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

    const renderCategory = (item, index) => {
        // console.log('img', image_url + item.category_icon)
        if (index + 1 == 8) {
            return (
                <View style={styles.labelcontainer}>
                    <TouchableOpacity onPress={() => getDrawer()} style={styles.label}>
                        <View style={[styles.labelIcon, { backgroundColor: '#2B0CEA', }]}>
                            <Image source={require('../../assets/viewall.png')} />
                        </View>
                        <View style={styles.labeltextcontainer}>
                            <Text style={styles.labeltext}>View All</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <TouchableOpacity onPress={() => _categoryDetail(item)} style={styles.labelcontainer}>
                    <View style={styles.label}>
                        <View style={[styles.labelIcon, { backgroundColor: '#FE0072', }]}>
                            <Image style={{ width: 20, height: 20 }}
                                source={{ uri: image_url + item.category_icon }} />
                        </View>
                        <View style={styles.labeltextcontainer}>
                            <Text style={styles.labeltext}>{item.category_name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    const searchData = (text) => {
        const newData = Product.filter(item => {
            const itemData = item.title.toUpperCase();
            const textData = text.toUpperCase();
            // console.log('filtt',itemData.indexOf(textData) > 1)
            return itemData.indexOf(textData) > -1
        });
        setText(text)
        setProduct(newData)
    }

    return (
        <View sty={styles.container}>

            <View style={{ margin: 10 }}>

                <View style={{ alignItems: 'center', flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/Mascot.png')}
                            style={{ width: 46, height: 64 }} />
                        <Text style={{ marginLeft: 10, fontFamily: 'Lato-Bold', fontSize: 20 }}>Explore</Text>
                    </View>

                    <TouchableOpacity onPress={_AdsScreen} style={{ justifyContent: 'center', alignItems: "center", width: 89, height: 30, backgroundColor: colors.primary, borderRadius: 8 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: ':Lato-Regular' }}>My Ads</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    marginHorizontal: 10,
                    marginVertical: 10, borderRadius: 12, flexDirection: "row", backgroundColor: "#fff",
                    elevation: 10, alignItems: 'center'
                }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Icon name={'search'} style={{ marginLeft: 10 }} color={'#717171'} size={18} />
                        <TextInput
                            placeholder={'Search'}
                            value={text}
                            onChangeText={(text) => searchData(text)}
                            style={styles.textInput} />

                    </View>

                    <TouchableOpacity onPress={_filter} style={{ padding: 5 }} >
                        <Icon name={'sliders'} style={{ marginLeft: 10 }} color={'#717171'} size={18} />
                    </TouchableOpacity>
                </View>

            </View>

            {Loading ? (
                <ActivityIndicator
                    color='red'
                    size={'large'}
                    style={styles.loader}
                />
            ) :

                <ScrollView>
                    <View style={{ marginVertical: 15, marginLeft: 15 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Lato-Bold' }}>Categories</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>

                        <FlatList
                            data={Category.slice(0, 8)}
                            renderItem={({ item, index }) => renderCategory(item, index)}
                            numColumns={4}
                        />
                    </View>

                    <View style={{ paddingBottom: 400 }}>
                        <FlatList
                            data={Product}
                            renderItem={({ item, index }) => renderItem(item, index)}
                            numColumns={2}
                        />
                    </View>

                </ScrollView>
            }

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    textInput: {
        width: 300,
        fontFamily: 'Lato-Regular',
        justifyContent: 'flex-end',
        height: 40,
        fontSize: 15,
    },

    labelcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    },
    label: {
        alignItems: "center",
        width: '25%',
        justifyContent: 'space-between',
        padding: 5
    },
    loader: {
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelIcon: {
        marginVertical: 5,
        width: 51,
        height: 51,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 17
    },
    labeltextcontainer: {
        // marginVertical: 15,
        // height: 12,
        width: 100,
        padding: 5,
        // backgroundColor:"yellow",
        alignItems: "center",
        justifyContent: "center"
    },
    labeltext: {
        fontSize: 12,
        fontFamily: "Lato-Regular"
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
        // resizeMode: '',
        borderRadius: 10,
        margin: 5,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        height: 170
    },
    adsdescriptionbox: {
        width: 150, padding: 10, flexDirection: 'row',
        justifyContent: 'space-between'
    },
    adsPrice: {
        fontSize: 16, fontFamily: 'Lato-Bold', color: colors.primary
    }



});

export default Home
