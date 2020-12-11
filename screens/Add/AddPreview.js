import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, BackHandler, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { colors } from '../../theme/theme';
import { base_url, image_url } from '../../Api/Api';
import RNFS from 'react-native-fs';

let backbtn;
let exitbtn;
Icon.getImageSource('chevron-left', 25, colors.primary).then(source => backbtn = source);
Icon.getImageSource('x', 25, colors.primary).then(source => exitbtn = source);

const AddPreview = (props) => {

    const [myData, setMyData] = useState([1, 2, 3, 4, 5]);
    const componentId = props.componentId;
    const [Myads, setMyads] = useState(props.AddPost);
    // const [Image, setImage] = useState([]);



    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    useEffect(() => {
        // console.log('item', props.PreviewItem)
        // console.log('method', props.postData)
    }, []);


    const _AdsPackage = () => {
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'adspackage',
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


    
    const getBase64 = async (photo) => {
        const filepath = photo;
        const imageUriBase64 = await RNFS.readFile(filepath, 'base64');
        let imgData = imageUriBase64;
        return imgData;
    }

    const _PostAd = () => {

        // let imageArray = [];
        // Myads.Image.map((v, i) => {
        //     console.log('reccc', v.path)
        //     let baseImg = getBase64(v.path)
        //     imageArray.push(baseImg)
        //     setImage(imageArray);
        // })

        let user = {
            title: Myads.title,
            Image: Myads.image,
            description: Myads.Description,
            category: Myads.Category,
            postal_code: Myads.postalcode,
            address: Myads.address,
            country_id: Myads.Country.id,
            state_id: Myads.State.id,
            city_id: Myads.City.id,
            actual_price: Myads.Price,
            discounted_price: Myads.Discount
        }

        console.log('user',user)

    }

    // const renderImages = () => {
    //     console.log('img', Myads.Image)
    //     let img = Myads.Image

    //     return img.map((i, key) => {
    //         console.log('iiii', key)
    //         if (key < 3) {
    //             if (key == 0) {
    //                 return (
    //                     <TouchableOpacity style={{ width: 160, height: 220 }} key={key}>
    //                         <Image
    //                             source={{ uri: i }}
    //                             resizeMode='cover'
    //                             style={{ borderRadius: 10, marginLeft: 10, width: 160, height: 220 }} />
    //                     </TouchableOpacity>
    //                 )
    //             }
    //             else {
    //                 return (

    //                     <View style={{
    //                         backgroundColor: "red", marginLeft: 10,
    //                         flexDirection: 'column', justifyContent: "space-between", width: 80, height: 190
    //                     }}>


    //                     </View>

    //                 )
    //             }
    //         }
    //     })


    //     // const img = Myads.image
    //     // return (
    //     //     <View style={{ flexDirection: "row" }}>
    //     //          <View style={{ width: '50%' }}>
    //     //             <Image
    //     //                 source={{ uri: image_url + Myads.image[0] }}
    //     //                 resizeMode='cover'
    //     //                 style={{ borderRadius: 10, marginLeft: 10, width: 160, height: 220 }} />
    //     //         </View> 

    //     //         <View  style={{ width: '50%' }}>
    //     //             <Image
    //     //                 source={{ uri: image_url + img[1] }}
    //     //                 resizeMode='cover'
    //     //                 style={{ margin: 5, borderRadius: 10, width: 160, height: 100 }} />
    //     //                   <Image
    //     //                 source={{ uri: image_url + img[2] }}
    //     //                 resizeMode='cover'
    //     //                 style={{ margin: 5, borderRadius: 10, width: 160, height: 100 }} />
    //     //             <TouchableOpacity style={{
    //     //                 justifyContent: 'flex-end',
    //     //                 alignItems: 'flex-end', marginRight: 10
    //     //             }}>
    //     //                 <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 }}>SEE ALL</Text>
    //     //             </TouchableOpacity>
    //     //         </View>
    //     //     </View>
    //     // )
    // }

    return (
        <View style={styles.container}>

            <ScrollView>
                <Text>dlmgd</Text>

                <View>
                    <View style={{ flexDirection: 'row', height: 230 }}>
                        {/* {renderImages()} */}
                    </View>

                    {/* <View style={{ margin: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 20 }}>${Myads.actual_price}</Text>
                            <Icon name={'heart'} size={18} color={colors.secondary} />
                        </View>

                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontSize: 16, color: '#464646', fontFamily: "Lato-Regular" }}>{Myads.title}</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                <Image source={require('../../assets/map.png')} style={{ width: 20, height: 20 }} />
                                <Text style={{ marginLeft: 5, fontSize: 14, color: '#828282' }}>{Myads.address}</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 16, color: '#464646', fontFamily: "Lato-Regular" }}>Description</Text>
                            <Text style={{ fontSize: 14, color: '#828282' }}>{Myads.description}</Text>
                        </View>

                    </View> */}
                </View>

            </ScrollView>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={_PostAd} style={styles.button}>
                    <Text style={styles.buttontext}>Post Ad</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 40,
    },
    textInput: {
        width: '100%',
        fontFamily: 'Lato-Regular',
        fontSize: 15,
    },
    button: {
        marginVertical: 10,
        backgroundColor: colors.primary,
        width: 300,
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    buttontext: {
        fontSize: 18,
        color: colors.white,
        fontFamily: 'Lato-Bold'
    },
    bottomView: {
        width: '100%',
        height: 70,
        // flexDirection: "row",
        // justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    titlecontainer: {
        borderBottomWidth: .5,
        margin: 5
    },
    titletext: {
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        color: colors.primary
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
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },

});



export default AddPreview;