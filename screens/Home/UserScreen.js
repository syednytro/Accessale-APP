
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";
import { RNNDrawer, SideMenuView } from "react-native-navigation-drawer-extension";


let backbtn;
let exitbtn;
Icon.getImageSource('chevron-left', 25, colors.primary).then(source => backbtn = source);
Icon.getImageSource('x', 25, colors.primary).then(source => exitbtn = source);


const UserScreen = (props) => {

    const componentId = props.componentId;

    const [myData, setMyData] = useState([1, 2, 3, 4, 5]);

    const getDrawer = () => {
        RNNDrawer.showDrawer({
            component: {
                name: "categorydrawer",
                passProps: {
                    direction: "left",
                    drawerScreenWidth: "70%",
                    style: {
                        backgroundColor: '#fff',
                        marginLeft: 30
                    },
                    parentComponentId: componentId,
                },
            }
        });

    }

    const _report = () => {
        // alert('sfs')
        Navigation.showOverlay({
            component: {
                name: 'report',
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

    const _userForm = () => {

        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'userform',
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
                                        text: 'Create Post',
                                        fontSize: 18,
                                        fontFamily: "Lato-Bold"
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

    const Renderitem = () => {

        return (

            <View style={{ backgroundColor: '#fff', elevation: 5, borderRadius: 20, margin: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", margin: 10, justifyContent: "space-between", }}>
                    <View style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/user.png')}
                            style={{ width: 30, height: 30, }} />
                        <Text style={{ marginLeft: 10, fontSize: 16, fontFamily: 'Lato-Regular' }}>john doe</Text>
                    </View>
                    <TouchableOpacity onPress={_userForm}>
                        <Icon name={'more-vertical'} size={22} style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 200, width: '100%' }}>
                    <Image source={require('../../assets/user-post.png')}
                        style={{ height: 180, width: '100%' }} />
                </View>

                <View style={{ marginLeft: 25 }}>
                    <Text style={{ fontSize: 18, fontFamily: "Lato-Regular" }}>Lorem Ipsum dolor simit amet </Text>
                </View>

                <View style={{ marginVertical: 5 }}>
                    <View style={{ marginLeft: 25 }}>
                        <Text style={{ fontSize: 14, color: 'gray', fontFamily: "Lato-Regular" }}> lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...</Text>
                    </View>
                </View>

                <View style={{ margin: 5, flexDirection: "row", justifyContent: 'center' }}>
                    <View style={{ width: '50%', flexDirection: "row" }}>

                        <View style={{
                            flexDirection: 'row', width: 40,
                            padding: 5, alignItems: "center", justifyContent: "space-between"
                        }} >
                            <Icon name={'message-circle'} color={'#4859f1'} size={18} />
                            <Text style={{ fontSize: 14, fontFamily: "Lato-Regular" }}>5</Text>
                        </View>

                        <View style={{
                            marginLeft: 10, flexDirection: 'row', width: 50,
                            padding: 5, alignItems: "center", justifyContent: "space-between"
                        }} >
                            <Icon name={'heart'} size={18} color={colors.secondary} />
                            <Text style={{ fontSize: 14, fontFamily: "Lato-Regular" }}>12</Text>
                        </View>
                    </View>

                    <View style={{
                        width: '40%',
                        justifyContent: 'center', alignItems: "flex-end"
                    }}>
                        {/* <Text>dgndkl</Text> */}
                        <Icon name={'send'} color={'#4859f1'} size={22} />
                    </View>


                </View>
            </View>

        )
    }

    return (
        <View style={styles.container}>

            <View style={{
                borderRadius: 5,
                marginVertical:20, flexDirection: "row", alignItems: 'center',
            }}>
                <TouchableOpacity onPress={getDrawer} style={{ margin: 5,width:'10%', alignItems: "center" }}>
                    <Icon name={'menu'} color={colors.primary} size={24} style={{ marginLeft: 0 }} />
                </TouchableOpacity>

                <View style={{
                    backgroundColor:"blue",width:"80%",
                    borderRadius: 10, flexDirection: "row", backgroundColor: "#fff",
                    elevation: 5, alignItems: 'center'
                }}>
                    <Icon name={'search'} style={{ marginLeft: 10 }} color={'#717171'} size={18} />
                    <TextInput
                        placeholder={'Search'}
                        style={styles.textInput} />
                    <View style={{ margin: 5 }}>
                        <Image source={require('../../assets/filter.png')} style={{ marginLeft: 0, width: 20, height: 20, }} />
                    </View>
                </View>
            </View>


            <View style={{paddingBottom:350}}>
                <FlatList
                    data={myData}
                    renderItem={Renderitem}
                    keyExtractor={item => Renderitem(item.index)}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        // marginTop: 20,
    },
    textInput: {
        width: '80%',
        fontFamily: 'Lato-Regular',
        justifyContent: 'flex-end',
        height: 40,
        fontSize: 15,
    },

});

export default UserScreen
