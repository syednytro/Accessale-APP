import React, { useState, useEffect } from 'react';
import {
    StyleSheet, ScrollView, View, Text, FlatList, BackHandler,
    LayoutAnimation, Image, TextInput, TouchableOpacity, ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { colors } from '../../theme/theme';
import DateTimePicker from '@react-native-community/datetimepicker';
// import ImagePicker from 'react-native-image-picker';
import { add } from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { base_url, image_url } from '../../Api/Api';

let backbtn;
let exitbtn;
Icon.getImageSource('chevron-left', 25, colors.primary).then(source => backbtn = source);
Icon.getImageSource('x', 25, colors.primary).then(source => exitbtn = source);

const adTopbar = {
    component: {
        name: 'adtopbar',
    },
};


const AddForm = (props) => {

    const componentId = props.componentId;


    const dispatch = useDispatch();
    const { userToken } = useSelector(state => state.appReducerData)
    const { productCategory } = useSelector(state => state.appReducerData)

    const [Category, setCategory] = useState([]);
    const [Country, setCountry] = useState(null);
    const [State, setstate] = useState(null);
    const [title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [City, setCity] = useState(null);
    const [address, setAddress] = useState("");
    const [postalcode, setPostalcode] = useState("");
    const [Price, setPrice] = useState("");
    const [Discount, setDiscount] = useState("");
    const [myData, setMyData] = useState([1, 2, 3, 4, 5]);
    const [image, setImage] = useState([]);
    const [images, setImages] = useState(null);
    const [Error, setError] = useState(null);
    const [MyImages, setMyImages] = useState(null);
    const [showCategory, setshowCategory] = useState(null);
    const [showCountry, setshowCountry] = useState(null);
    const [showState, setshowState] = useState(null);
    const [showCity, setshowCity] = useState(null);
    const [loader, setLoader] = useState(false);
    const [loginProgress, setLoginProgress] = useState(false);

    useEffect(() => {
    }, []);

    const pickMultiple = () => {
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            includeExif: true,
            forceJpg: true,
        }).then(images => {
            // console.log('img', images)
            setMyImages(images)
            setImages(images)
            let imageArray = [];
            images.map((v, i) => {
                console.log('reccc', v)
                let baseImg = getBase64(v.path)
                imageArray.push(baseImg)
                setImage(imageArray);
            })
            // setImage(imageArray);
            // console.log('NEWWWW', imageArray);
        }).catch(e => alert(e));
    }

    const getBase64 = async (photo) => {
        const filepath = photo;
        const imageUriBase64 = await RNFS.readFile(filepath, 'base64');
        let imgData = imageUriBase64;
        return imgData;
    }

    const _onViewAds = (item) => {

        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'adsview',
                            passProps: {
                                ads_id: item
                            },
                            options: {
                                statusBar: {
                                    style: 'dark',
                                    visible: true,
                                    backgroundColor: '#F5F6F8',
                                },
                                topBar: {
                                    visible: true,
                                    noBorder: true,
                                    title: adTopbar,

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

    const _SelectCategory = () => {
        Navigation.showOverlay({
            component: {
                name: 'adsCategory',
                passProps: {
                    catGet: _CategoryLoad
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

    const countrySelect = (item) => {
        console.log('country', item)
        setCountry(item)
        setshowCountry(item.name)
    }

    const stateSelect = (item) => {
        console.log('state', item)
        setstate(item)
        setshowState(item.name)
    }

    const citySelect = (item) => {
        console.log('city', item)
        setCity(item)
        setshowCity(item.name)
    }

    const AddressSelect = (item) => {
        setAddress(item)
    }

    const PostalCodeSelect = (item) => {
        setPostalcode(item)
    }

    const _SelectLocation = () => {
        Navigation.showOverlay({
            component: {
                name: 'adslocation',

                passProps: {
                    country: countrySelect,
                    Address: AddressSelect,
                    PostalCode: PostalCodeSelect,
                    SelectState: stateSelect,
                    SelectCity: citySelect

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

    const _PriceGet = (item) => {
        setPrice(item)
    }

    const _DiscountGet = (item) => {
        // console.log('discount',item)
        setDiscount(item)
    }

    const _SelectPrice = () => {
        Navigation.showOverlay({
            component: {
                name: 'adsPrice',
                passProps: {
                    PriceProp: _PriceGet,
                    Discountprop: _DiscountGet
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

    const _CategoryLoad = (item) => {
        let cateId = [item.id]
        setCategory(cateId)
        setshowCategory(item.category_name)
    }

    const _ontitlechange = (text) => {
        // console.log(text)
        setTitle(text)
    }

    const _onDescchange = (text) => {
        setDescription(text)
    }

    const _onPreviewPage = () => {

        if (title == "") {
            setError('Please Enter Title')
        } else if (image.length < 1) {
            setError('Please Select Image')
        } else if (Description == "") {
            setError('Please Enter Description')
        } else if (Category == null) {
            setError('Please Select category')
        } else if (Country == null) {
            setError('Please Select Country')
        } else if (Price == "") {
            setError('Please Enter price')
        } else {
            setLoginProgress(true);
            let user = {
                title: title,
                images: image,
                description: Description,
                categories: Category,
                postal_code: postalcode,
                address: address,
                country_id: Country.id,
                state_id: State.id,
                city_id: City.id,
                actual_price: Price,
                discounted_price: Discount
            }
            Axios(`${base_url}insert-ads-post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': 'Bearer ' + userToken
                },
                data: user
            }).then(res => {
                console.log('ads response', res)
                setLoginProgress(false);
                _onViewAds(res.data.id)
                setTitle('')
                setImage(null)
                setDescription("")
                setCategory()
                setPostalcode("")
                setAddress("")
                setCountry(null)
                setstate(null)
                setCity(null)
                setPrice("")
                setDiscount("")
            }).catch(error => {
                console.log('errr', error.response)
                setLoginProgress(false);
            });
        }
    }

    const _previewData = () => {
        let user = {
            title: title,
            images: MyImages,
            description: Description,
            address: address,
            actual_price: Price,
        }

        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'addpreview',
                            passProps: {
                                PreviewItem: user,
                                postData: _PostDataClick

                            },
                            options: {
                                statusBar: {
                                    style: 'dark',
                                    visible: true,
                                    backgroundColor: '#F5F6F8',
                                },
                                topBar: {
                                    visible: true,
                                    noBorder: true,
                                    title: adTopbar,


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

    const _renderButtonProgress = () => {
        if (loginProgress) {
            return <ActivityIndicator size="small" color="#fff" animating={loginProgress} />
        } else {
            return <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular', color: "#fff" }}>Post Ad</Text>
        }
    }

    const renderSelectedImages = () => {
        console.length('csks')
        //   return  MyImages.map((v, i) => {
        //         console.log('reccc', v.path)
        //     })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 20, fontFamily: "Lato-Regular", }}>Add Your Ad</Text>
            </View>

            <View style={{ justifyContent: "center", alignItems: 'center' }}>
                {Error == null ? <Text></Text> : <Text style={{ color: "red", fontSize: 16 }}>{Error}</Text>}
            </View>

            <View style={{ margin: 10, paddingBottom: 100 }}>


                <View style={styles.titlecontainer}>
                    <Text style={styles.titletext}>Title</Text>
                    <TextInput
                        onChangeText={(text) => _ontitlechange(text)}
                        style={styles.textInput} />
                </View>

                <TouchableOpacity style={styles.imageBox} onPress={pickMultiple}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Image source={require('../../assets/photo.png')} style={{ width: 20, height: 20 }} />
                        {MyImages == null ?
                            <Text style={[styles.textStyle, { marginLeft: 10 }]}>Add Image</Text> :
                            <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                                {MyImages.map((img, index) => {
                                    return (
                                        <View style={{ flexDirection: "row", margin: 10, flexWrap: 'wrap', }}>
                                            <Image source={{ uri: img.path }}
                                                style={{ borderRadius: 10, width: 60, height: 60 }} />
                                        </View>
                                    )

                                })}
                            </View>
                        }
                    </View>
                    <View>
                        <Image source={require('../../assets/addicon.png')}
                            style={{ width: 20, height: 20 }} />
                    </View>
                </TouchableOpacity>

                <View style={styles.descriptioncontainer}>
                    <Text style={styles.textStyle}>Description</Text>
                    <TextInput multiline={true}
                        onChangeText={(text) => _onDescchange(text)}
                        style={styles.textInput} />
                </View>

                <TouchableOpacity onPress={_SelectCategory} style={styles.imagecontainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/badge.png')} style={{ width: 25, height: 20 }} />
                        {showCategory == null ? <Text style={[styles.textStyle, { marginLeft: 10 }]}>Select Category</Text>
                            :
                            <Text style={[styles.textStyle, { marginLeft: 10 }]}>{showCategory}</Text>
                        }
                    </View>
                    <View>
                        <Image source={require('../../assets/chevron.png')} style={{ width: 20, height: 20 }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={_SelectLocation} style={styles.imagecontainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/map.png')} style={{ width: 15, height: 20 }} />
                        {showCountry == null && showState == null && showCity == null ?
                            <Text style={[styles.textStyle, { marginLeft: 10 }]}>Location</Text>
                            :
                            <Text style={[styles.textStyle, { marginLeft: 10 }]}>{showCity} {showState} {showCountry}</Text>

                        }
                    </View>
                    <View>
                        <Image source={require('../../assets/chevron.png')} style={{ width: 20, height: 20 }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={_SelectPrice} style={styles.imagecontainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/frame.png')} style={{ width: 15, height: 20 }} />
                        {Price == "" ? <Text style={[styles.textStyle, { marginLeft: 10 }]}>Price</Text>
                            :
                            <Text style={[styles.textStyle, { marginLeft: 10 }]}>{Price}</Text>
                        }
                    </View>
                    <View>
                        <Image source={require('../../assets/chevron.png')} style={{ width: 20, height: 20 }} />
                    </View>
                </TouchableOpacity>

                <View style={{
                    marginTop: 20, margin: 10, height: 80, flexDirection: "row",
                    // justifyContent: 'space-between'
                }}>

                    {/* <TouchableOpacity onPress={_previewData} style={{
                        height: 40, justifyContent: "center", alignItems: 'center',
                        marginVertical: 10, padding: 10
                    }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular', }}>Preview Ad</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity onPress={_onPreviewPage} style={{
                        height: 55, justifyContent: "center", alignItems: 'center',
                        borderRadius: 5, padding: 20, width: '100%', backgroundColor: colors.primary
                    }}>
                        {_renderButtonProgress()}
                        {/* <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular', color: "#fff" }}>Post Ad</Text> */}
                    </TouchableOpacity>

                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        marginTop: 10,
    },
    textInput: {
        width: '100%',
        fontFamily: 'Lato-Regular',
        fontSize: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:"red",
        width: '100%',
        alignItems: 'center',
        // backgroundColor: 'gray',
    },
    childRow: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // backgroundColor: 'gray',
    },
    button1: {
        width: '100%',
        height: 54,
        alignItems: 'center',
        paddingLeft: 35,
        paddingRight: 35,
        fontSize: 12,
    },


    titlecontainer: {
        borderBottomWidth: .5,
        margin: 5,
        height: 55,
    },
    descriptioncontainer: {
        borderBottomWidth: .5,
        margin: 5,
        minHeight: 50
        // height: 60
    },
    titletext: {
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        color: colors.primary
    },

    imageBox: {
        borderBottomWidth: .5,
        // height: 50,
        alignItems: 'center',
        minHeight: 50,
        // backgroundColor:"red",
        justifyContent: 'space-between',
        margin: 5,
        flexDirection: "row",
    },
    imagecontainer: {
        borderBottomWidth: .5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5, flexDirection: "row",
    },

    textStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
    },

    bottomView: {
        width: '100%',
        height: 70,
        padding: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        // position: 'absolute',
        // marginTop:60,
        // bottom: 0,
    },

});



export default AddForm;