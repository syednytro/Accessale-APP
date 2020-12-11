import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, BackHandler, TouchableOpacity, Animated, Easing, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';
import { colors } from '../../theme/theme';
import { actionImage, actionImageAvatar } from '../../redux/user/action';
import { useDispatch } from 'react-redux';
import { User_Avatar } from '../../redux/types';
import RNFS from 'react-native-fs';

const ImagePick = (props) => {

    const componentId = props.componentId;

    const [image, setimage] = useState();

    useEffect(() => {
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

    const _closeAlert = () => {
        Navigation.dismissOverlay(props.componentId)
    };

    const _selectAvatar = () => {
        _closeAlert()
        Navigation.showOverlay({
            component: {
                name: 'avatar',
                passProps:{
                    dataimage: props.reload
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

    const chooseFile = async () => {

        var options = {
            title: 'Select Image',

            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error:', response.error);
            } else {
                let source = response;
                 getBase64(source.uri)
                dispatch(actionImage(source.uri));
                dispatch(actionImageAvatar(null))
                // console.log('uri',source.uri)
            }
        });
        _closeAlert()
    }

    const getBase64 = async (photo) => {
        const filepath = photo;
        const imageUriBase64 = await RNFS.readFile(filepath, 'base64');
        let imgData = imageUriBase64;
        console.log('ppp', imgData)
        // setimage(imgData);
        props.reload(imgData)
        // dispatch(actionImage(imgData));
        return imgData;
    }

    

    const alertTranslateY = alertY.interpolate({
        inputRange: [0, 1],
        outputRange: [150, 0],
        extrapolate: 'clamp',
    });
    return (
        <Animated.View style={{
            ...styles.container,
            height: 150,
            maxHeight: 150,
            margin: 50,
            backgroundColor: '#fff',
            justifyContent: 'center', alignItems: 'center',
            transform: [
                { translateY: alertTranslateY }
            ]
        }}>
            <View>

                <TouchableOpacity onPress={chooseFile} style={styles.alertDetails}>
                    <Image source={require('../../assets/boy.png')} height={30} width={30} style={styles.icon} />
                    <Text style={styles.txt}>Select from gallery</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={_selectAvatar} style={styles.alertDetails}>
                    <Image source={require('../../assets/smile.png')} height={30} width={30} style={styles.icon} />
                    <Text style={styles.txt}>Choose Avatar</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={{justifyContent:"flex-end"}} onPress={_closeAlert}>
                    <Icon name={'x-circle'} size={25} color={'#E90800'} style={styles.icon} />
                </TouchableOpacity> */}
            </View>

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
        margin: 20,
        // width:320,
        justifyContent: 'center',

        elevation: 10,
    },
    txt: {
        fontSize: 16,
        marginLeft: 20,
        color: colors.primary,
        textAlign: 'center',
        fontFamily: 'Lato-Regular'

    },
    // icon: {
    //     alignSelf: 'flex-end'
    // },
    alertDetails: {
        marginVertical: 10,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        // flex: 1
    },
});
export default ImagePick;
