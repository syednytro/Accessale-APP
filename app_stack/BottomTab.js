// import { Navigation } from 'react-native-navigation';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { colors } from '../theme/theme'

// const title = {
//     text: 'dssdg',
//     component: {
//         name: 'imagepick',
//         alignment: 'center',
//     },
// };

// const BottomTab = async () => {

//     Promise.all([
//         Icon.getImageSource('home', 25, '#95a5a6'),
//         Icon.getImageSource('md-chatbubble-ellipses-outline', 25, '#95a5a6'),
//         Icon.getImageSource('add-circle', 35, '#95a5a6'),
//         Icon.getImageSource('person', 25, '#95a5a6'),
//         Icon.getImageSource('settings', 25, '#95a5a6'),
//     ]).then(([Home, message, add, user, setting]) => {
//         Navigation.setRoot({
//             root: {
//                 bottomTabs: {
//                     id: 'main-tabs',
//                     options: {
//                         topBar: {
//                             visible: false,
//                         },
//                         bottomTabs: {
//                             drawBehind: false,
//                             animate: true,
//                             alignment: 'center',
//                             titleDisplayMode: 'alwaysHide',
//                             currentTabIndex: 0,
//                             elevation: 5,
//                         },
//                         statusBar: {
//                             style: 'dark',
//                             backgroundColor: '#fff'
//                         }
//                     },
//                     children: [
//                         {
//                             stack: {
//                                 options: {
//                                     bottomTab: {
//                                         icon: Home,
//                                         selectedIconColor: colors.secondary,
//                                         selectedTextColor: colors.secondary,
//                                     },
//                                 },
//                                 children: [
//                                     {
//                                         component: {
//                                             name: 'home',
//                                             id: 'home-tab',
//                                             options: {
//                                                 layout: {
//                                                     orientation: ['portrait'],
//                                                     backgroundColor: "#F5F6F8",
//                                                     componentBackgroundColor: '#F5F6F8',
//                                                 },
//                                                 statusBar: {
//                                                     style: 'dark',
//                                                     visible: true,
//                                                     backgroundColor: '#F5F6F8',
//                                                 },
//                                                 topBar: {
//                                                     visible: false
//                                                 },
//                                             },
//                                         },
//                                     },
//                                 ],
//                             },
//                         },

//                         {
//                             stack: {
//                                 options: {
//                                     bottomTab: {
//                                         icon: message,
//                                         selectedIconColor: colors.secondary,
//                                         selectedTextColor: colors.secondary,
//                                     },
//                                 },
//                                 children: [
//                                     {
//                                         component: {
//                                             name: 'allchat',
//                                             id: 'chat-tab',
//                                             options: {
//                                                 layout: {
//                                                     orientation: ['portrait'],
//                                                     backgroundColor:"#F5F6F8",
//                                                     componentBackgroundColor: '#F5F6F8',
//                                                 },
//                                                 statusBar: {
//                                                     style: 'dark',
//                                                     visible: true,
//                                                     backgroundColor: '#F5F6F8',
//                                                 },
//                                                 topBar: {
//                                                     visible: false
//                                                 },
//                                             },
//                                         },
//                                     },
//                                 ],
//                             },
//                         },

//                         {
//                             stack: {
//                                 options: {
//                                     bottomTab: {
//                                         icon: add,
//                                         selectedIconColor: colors.secondary,
//                                         selectedTextColor: colors.secondary,
//                                         animate: false,
//                                         titleDisplayMode: 'alwaysShow',
//                                     },
//                                 },
//                                 children: [
//                                     {
//                                         component: {
//                                             name: 'addhome',
//                                             id: 'add-tab',
//                                             options: {
//                                                 layout: {
//                                                     orientation: ['portrait'],
//                                                     backgroundColor:"#F5F6F8",
//                                                     componentBackgroundColor: '#F5F6F8',
//                                                 },
//                                                 statusBar: {
//                                                     style: 'dark',
//                                                     visible: true,
//                                                     backgroundColor: '#F5F6F8',
//                                                 },
//                                                 topBar: {
//                                                     visible: false
//                                                 },
//                                             },
//                                         },
//                                     },
//                                 ],
//                             },
//                         },

//                         {
//                             stack: {
//                                 options: {
//                                     bottomTab: {
//                                         icon: user,
//                                         selectedIconColor: colors.secondary,
//                                         selectedTextColor: colors.secondary,
//                                     },
//                                 },
//                                 children: [
//                                     {
//                                         component: {
//                                             name: 'userscreen',
//                                             id: 'userscreen-tab',
//                                             options: {
//                                                 layout: {
//                                                     orientation: ['portrait'],
//                                                     backgroundColor: "#F5F6F8",
//                                                     componentBackgroundColor: '#F5F6F8',
//                                                 },
//                                                 statusBar: {
//                                                     style: 'dark',
//                                                     visible: true,
//                                                     backgroundColor: '#F5F6F8',
//                                                 },
//                                                 topBar: {
//                                                     visible: false
//                                                 },
//                                             },
//                                         },
//                                     },
//                                 ],
//                             },
//                         },

//                         {
//                             stack: {
//                                 options: {
//                                     bottomTab: {
//                                         selectedIconColor: colors.secondary,
//                                         selectedTextColor: colors.secondary,
//                                         icon: setting,

//                                     },
//                                 },
//                                 children: [
//                                     {
//                                         component: {
//                                             name: 'setting',
//                                             id: 'setting-tab',
//                                             options: {
//                                                 layout: {
//                                                     orientation: ['portrait'],
//                                                     backgroundColor: "#F5F6F8",
//                                                     componentBackgroundColor: '#F5F6F8',
//                                                 },
//                                                 statusBar: {
//                                                     style: 'dark',
//                                                     visible: true,
//                                                     backgroundColor: '#F5F6F8',
//                                                 },
//                                                 topBar: {
//                                                     visible: false
//                                                 },
//                                             },
//                                         },
//                                     },
//                                 ],
//                             },
//                         },

//                     ],
//                 },
//             },
//         });
//     });
//     // Navigation.showOverlay({
//     //     component: {
//     //         name: 'overlay',
//     //         options: {
//     //             overlay: {
//     //                 interceptTouchOutside: true,
//     //             },
//     //         },
//     //     },
//     // });

// };

// export default BottomTab;



import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/Feather';
import { View, Image, StyleSheet, TouchableOpacity, ImageBackground, Text } from 'react-native';
import Home from '../screens/Home/Home';
// import Tabbar from './src/StaticTabbar';
import AllChat from '../screens/chat/Allchat'
import UserScreen from '../screens/Home/UserScreen'
import Setting from '../screens/Setting/Setting'
import AddForm from '../screens/Add/AddForm'
import { ScrollView } from "react-native-gesture-handler";

const tabs = [
    {
        name: "home",
        isSelected: true
    },
    {
        name: "message-circle",
    },
    {
        name: "plus",
    },
    {
        name: "user",
    },
    {
        name: "settings",
    },
];

const BottomTab = () => {

    const [selected, setselected] = useState(0)
    const [currentTabIndex, setcurrentTabIndex] = useState(0)

    const toggleHomepage = (index) => {
        this.setState({
            selected: index
        })
    }

    const onPress = (index) => {
        setcurrentTabIndex(index)
    }

    const TabbarPage = () => {
        return tabs.map((tab, key) => {
            return (
                <TouchableOpacity key={key} onPress={() => onPress(key)}
                    style={key == 2 ? styles.actionBtn : styles.button}>
                    <Icon name={tab.name} size={25}
                        style={key == 2 ? { color: 'white' } : currentTabIndex == key ?
                            { color: '#FF595F' } : { color: 'gray' }} />
                </TouchableOpacity>
            )
        })
    }

    return (

        <View style={styles.MainContainer}>
            <View>
                {
                    currentTabIndex == 0 ? <Home /> :
                        currentTabIndex == 1 ? <AllChat /> :
                            currentTabIndex == 2 ? <AddForm /> :
                                currentTabIndex == 3 ? <UserScreen /> :
                                    currentTabIndex == 4 ? <Setting /> :
                                        <Text>Not tabs</Text>
                }
            </View>
            <ImageBackground style={styles.tabimage} source={require('../assets/bottomtab.png')}>
                <View style={styles.tabcontainer}>
                    {TabbarPage()}
                </View>
            </ImageBackground>
        </View>
    );

}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
    },
    tabimage: {
        position: 'absolute',
        bottom: 0,
        height: 100,
        width: '100%',
    },
    tabcontainer: {
        marginTop: 40,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        padding: 8,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionBtn: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 50,
        backgroundColor: "#FF595F",
        borderRadius: 60,
        padding: 10
    }
});

export default BottomTab