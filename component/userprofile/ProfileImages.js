import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, BackHandler, TouchableOpacity, Animated, TouchableWithoutFeedback, Easing, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme';
import AvatarImages from './AvatarImages';
import { actionImage, actionImageAvatar,actionUserAvatarUrl } from '../../redux/user/action';
import { useDispatch } from 'react-redux';

const Details = [
    {
        id: "1",
        type_id: "1",
        image: require('../../assets/avatar/avatar1.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "2",
        type_id: "1",
        image: require('../../assets/avatar/avatar2.png'),
        image_name: 'avatar2.png'
    },
    {
        id: "3",
        type_id: "1",
        image: require('../../assets/avatar/avatar3.png'),
        image_name: 'avatar3.png'
    },
    {
        id: "4",
        type_id: "1",
        image: require('../../assets/avatar/avatar4.png'),
        image_name: 'avatar4.png'
    },
    {
        id: "5",
        type_id: "1",
        image: require('../../assets/avatar/avatar5.png'),
        image_name: 'avatar5.png'
    },
    {
        id: "6",
        type_id: "2",
        image: require('../../assets/avatar/avatar1.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "7",
        type_id: "2",
        image: require('../../assets/avatar/avatar2.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "8",
        type_id: "2",
        image: require('../../assets/avatar/avatar2.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "9",
        type_id: "2",
        image: require('../../assets/avatar/avatar4.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "10",
        type_id: "2",
        image: require('../../assets/avatar/avatar5.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "11",
        type_id: "3",
        image: require('../../assets/avatar/avatar1.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "12",
        type_id: "3",
        image: require('../../assets/avatar/avatar2.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "13",
        type_id: "3",
        image: require('../../assets/avatar/avatar3.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "14",
        type_id: "3",
        image: require('../../assets/avatar/avatar4.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "15",
        type_id: "3",
        image: require('../../assets/avatar/avatar5.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "16",
        type_id: "4",
        image: require('../../assets/avatar/avatar1.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "17",
        type_id: "4",
        image: require('../../assets/avatar/avatar2.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "18",
        type_id: "4",
        image: require('../../assets/avatar/avatar3.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "19",
        type_id: "4",
        image: require('../../assets/avatar/avatar4.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "20",
        type_id: "4",
        image: require('../../assets/avatar/avatar5.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "21",
        type_id: "5",
        image: require('../../assets/avatar/avatar1.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "22",
        type_id: "5",
        image: require('../../assets/avatar/avatar2.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "23",
        type_id: "5",
        image: require('../../assets/avatar/avatar3.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "24",
        type_id: "5",
        image: require('../../assets/avatar/avatar4.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "25",
        type_id: "5",
        image: require('../../assets/avatar/avatar5.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "26",
        type_id: "6",
        image: require('../../assets/avatar/avatar1.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "27",
        type_id: "6",
        image: require('../../assets/avatar/avatar1.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "28",
        type_id: "6",
        image: require('../../assets/avatar/avatar1.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "29",
        type_id: "6",
        image: require('../../assets/avatar/avatar1.png'),
        image_name: 'avatar1.png'
    },
    {
        id: "30",
        type_id: "6",
        image: require('../../assets/avatar/avatar1.png'),
        image_name: 'avatar1.png'
    },

    
]

const ProfileImages = (props) => {

    const componentId = props.componentId;

    useEffect(() => {
        // console.log('imagee',props.imageprop)
        BackHandler.addEventListener("hardwareBackPress", back);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", back);
    }, []);

    const back = () => {
        Navigation.dismissOverlay(componentId);
        return true;
    };


    const dispatch = useDispatch();


    const [alertY, setalertY] = useState(new Animated.Value(0))
    const [avtarimage, setavtarimage] = useState(Details)
    const [image, setimage] = useState('')


    const _closeAlert = () => {
        Navigation.dismissOverlay(props.componentId)
    }

    const alertTranslateY = alertY.interpolate({
        inputRange: [0, 1],
        outputRange: [150, 0],
        extrapolate: 'clamp',
    });

    const GetImage = (item) => {
        // console.warn(item, 'item')
        _closeAlert()
        dispatch(actionImageAvatar(item.image));
        props.imageprop(item.image_name)
        dispatch(actionUserAvatarUrl(item.image_name));
        dispatch(actionImage(null))

    }

    const AvtarImages = (item, ind) => {
        // console.log('index', ind)
        // console.log('props', props.data)
        if (item.type_id == props.data) {

            if (ind == 0) {
                return (
                    <View style={styles.alertDetails}>
                        <TouchableOpacity onPress={() => GetImage(item)} style={{
                            justifyContent: 'space-between', alignItems: 'center', width: '100%',
                            borderRadius: 30
                        }}>
                            {/* <Image height={100} width={100} source={require('./assets/avatar/avatar1.png')} /> */}
                            <Image height={100} width={100} source={item.image} />
                        </TouchableOpacity>
                    </View>
                )
            } else {
                return (
                    <View style={styles.alertDetails}>
                        <TouchableOpacity onPress={() => GetImage(item)} style={{
                            justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
                            backgroundColor: 'green',
                            borderRadius: 30
                        }}>
                            {/* <Image height={100} width={100} source={require('./assets/avatar/avatar1.png')} /> */}
                            <Image height={100} width={100} source={item.image} />
                        </TouchableOpacity>
                    </View>
                )
            }

        }
    }

    return (
        <Animated.View style={{
            ...styles.container,
            height: 400,
            maxHeight: 400,
            padding: 20,
            marginHorizontal: 20,
            backgroundColor: '#fff',
            transform: [
                { translateY: alertTranslateY }
            ]
        }}>

            <FlatList
                data={avtarimage}
                renderItem={({ item, index }) => AvtarImages(item, index)}
                numColumns={2}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },

    alertDetails: {
        marginVertical: 10,
        margin: 10,
        // flexDirection:'row',
        backgroundColor: "red"
        // width:0,
    },
});


export default ProfileImages;
