import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList, Image, TouchableWithoutFeedback, TouchableOpacity, Linking, Switch, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navigation } from 'react-native-navigation';
import { RNNDrawer, SideMenuView } from "react-native-navigation-drawer-extension";
import { colors } from '../theme/theme'

const windowHeight = Dimensions.get('window').height;

const CategoryDrawer = (props) => {



    useEffect(() => {
        console.log(props.categoryitem, 'drawerrr')
    }, [])

    const _categoryDetail = (item) => {
        console.log('cat_id', item.id)
        RNNDrawer.dismissDrawer();
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

    const _renderDrawwerItem = (item, index) => {
        return (
            <TouchableOpacity onPress={() => _categoryDetail(item)}
                style={{
                    marginVertical: 15, justifyContent: 'space-between',
                    alignItems: 'center', flexDirection: 'row',
                    marginHorizontal: 15
                }}>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>{item.category_name}</Text>
                <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>

            <View style={{ marginVertical: 15 }}>
                <View style={{
                    justifyContent: 'space-between', alignItems: 'center',
                    flexDirection: 'row', marginHorizontal: 20
                }}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>Categories</Text>
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>All</Text>
                </View>
            </View>

            <FlatList
                data={props.categoryitem}
                renderItem={({ item, index }) => _renderDrawwerItem(item, index)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopEndRadius: 50,
        paddingBottom: 50
    },
    drawerlink: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },
    sidebartext: {
        marginLeft: 15,
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
    },

    headername: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
    },
    drawerIcon: {
        width: 65,
        height: 65,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    useremail: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: '#fff'
    },
    drawer: {
        padding: 10,
        backgroundColor: colors.primary,
        flexDirection: 'row',
    },
    drawerItem: {
        padding: 5,
        marginLeft: 10
    },
    drawerLabel: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 16

    }
});

export default CategoryDrawer;
