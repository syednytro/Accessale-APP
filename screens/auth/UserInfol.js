
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { colors } from '../../theme/theme';
import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import { actionUser, actionToken,actionImageAvatar } from '../../redux/user/action';
import moment from 'moment';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import RNFS from 'react-native-fs';
import { registerApi } from '../../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';



const UserInfo = (props) => {

    const componentId = props.componentId;

    const [isSelectDate, setisSelectDate] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [Error, setError] = useState(null);
    const [email, setEmail] = useState(useravatar !== null ? useravatar : userimage);
    // const [Loading, setLoading] = useState(true);
    const [loginProgress, setLoginProgress] = useState(false);
    const [Errorv, seterrorV] = useState(false);


    const { userimage, useravatar, useravatarurl, userradio } = useSelector(state => state.appReducerData);
    const [gender, setgender] = useState("");
    // const [image, setimage] = useState(useravatarurl !== null ? useravatarurl : userimage);
    const [image, setimage] = useState(useravatar !== null ? useravatar : userimage);

    const dispatch = useDispatch();

    useEffect(() => {
        getUser()
    }, []);

    async function getUser() {
        setEmail(props.users.email)
        // console.log('mohsin', useravatarurl)
        // console.log('mohsin', useravatar)
        // console.log('mohsin', userimage)
    }

    const _imageLoad = (item) => {
        // console.log('item', item)
        setimage(item)
    }

    useNavigationButtonPress(e => {
       dispatch(actionImageAvatar(null))
       setimage(null)
    }, componentId);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const _PickerImage = () => {
        setimage('')
        Navigation.showOverlay({
            component: {
                name: 'imagepick',
                passProps: {
                    reload: _imageLoad
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

    const _GenderSelect = (item) => {
        console.log('gender',item)
        setgender(item)
    }

    const _radiopick = () => {
        Navigation.showOverlay({
            component: {
                name: 'radio',
                passProps: {
                    genderSelect: _GenderSelect
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

    const _bottomTab = () => {
        // BottomTab()
        Navigation.push(componentId, {
            component: {
                name: "userprofile",

                options: {
                    statusBar: {
                        backgroundColor: '#fff',
                        style: 'dark',
                    },
                    topBar: {
                        visible: false
                    }
                }

            }

        })
    }

    const _onEmail = name => setEmail(name);

    const _signUp = () => {

        var eighteenYearsAgo = moment().subtract(18, "years");
        var birthday = date;

        if (image == null) {
            setError('please select an image');
        }

        else if (email == "") {
            setError('please enter email address');
        }

        else if (gender == "") {
            setError('please Select Gender')
        }

        else if (!eighteenYearsAgo.isAfter(birthday)) {
            setError('you have to be at least 18 years old')
        }

        else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(email) === false) {
                setError('Email is not valid')
                return false;
            }
            else
                setLoginProgress(true);
            setError('');
            let user = {
                name: props.users.name,
                email: email,
                password: props.users.password,
                dob: date,
                profile_img: image,
                gender: gender
            };
            // console.warn(user)
            registerApi(user)
                .then(res => {
                    // console.log('res', res)
                    if (res.data.status == 'success') {
                        AsyncStorage.setItem('token', res.data.access_token);
                        dispatch(actionToken(res.data.access_token));
                        dispatch(actionUser(res.data.user));
                        _bottomTab()
                    }
                    setLoginProgress(false);

                }).catch(error => {
                    setLoginProgress(false);
                    console.log(error.response.status, 'errr')
                    if (error.response.data.status == 'error') {
                        seterrorV(error.response.data.errors)
                    }

                })
        }
    }

    const getBase64 = async (photo) => {
        const filepath = photo;
        const imageUriBase64 = await RNFS.readFile(filepath, 'base64');
        let imgData = imageUriBase64;
        console.log('ppp', imgData)
        setimage(imgData);
        // dispatch(actionImage(imgData));
        return imgData;
    }

    const _renderButtonProgress = () => {
        if (loginProgress) {
            return <ActivityIndicator size="small" color="#fff" animating={loginProgress} />
        } else {
            return <Text style={styles.buttontext}>Done</Text>
        }
    }

    const printError = (obj) => {
        let errorr = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                errorr.push(
                    <Text key={key} style={{ fontFamily: 'Lato-Regular', fontSize: 18, color: 'red' }}>{obj[key][0]}</Text>
                );
            }
        }
        return errorr;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={{ margin: 15 }}>
                <View>
                    <Text style={styles.heading}>Last Step!</Text>
                </View>


                <View style={styles.drawer}>
                    <TouchableOpacity onPress={_PickerImage} style={styles.drawerIcon}>

                        {
                            useravatar == null && userimage == null ?
                                <Icon name={'camera'} size={25} style={{ position: 'absolute', }}
                                    color={colors.primary} />
                                :
                                useravatar !== null ?
                                    <Image
                                        source={useravatar}
                                        style={styles.image}
                                    /> :
                                    <Image
                                        source={{ uri: userimage }}
                                        style={styles.image}
                                    />
                        }

                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center', alignItems: "center", padding: 10
                }}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 18, color: 'red' }}>{Error}</Text>
                    {printError(Errorv)}
                </View>

                <View style={styles.textbox}>
                    <Text style={styles.textStyle}>Email Address</Text>
                    <TextInput
                        value={email}
                        onChangeText={_onEmail}
                        style={styles.textInput} />
                </View>

                <View style={styles.textbox}>
                    <Text style={styles.textStyle}>Gender</Text>
                    <TouchableOpacity style={styles.Input} onPress={_radiopick}>
                        {gender == "" ? <Text style={{ color: '#cecece',fontFamily:"Lato-Bold" }}>Select Gender</Text> :
                            <Text style={{ color: colors.primary }}>{gender}</Text>
                        }
                        <Icon name={'chevron-down'} size={18} color={colors.accent} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={showDatepicker} style={styles.textbox}>
                    <Text style={styles.textStyle}>Date of Birth</Text>
                    <View style={styles.datePicker}>
                        {date == "" ? <Text style={{ color: '#c3c3c3' }}>Month / Day / Year</Text> :
                            // <Text>date</Text>}
                            <Text>{date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()}</Text>}
                        {show ?
                            <DateTimePicker
                                value={date}
                                mode={'date'}
                                onChange={onChange}
                            /> : null
                        }
                    </View>
                </TouchableOpacity>

            </View>

            <View style={{ justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={_signUp}
                    style={styles.button}>
                    {_renderButtonProgress()}
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        margin: 10,
        backgroundColor: '#fff'
    },

    heading: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
    },

    image: {
        width: 80, height: 80, borderRadius: 100 / 2
    },
    drawer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    drawerIcon: {
        width: 100,
        height: 100,
        backgroundColor: '#E3E3E3',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textbox: {
        height: 45, marginVertical: 20
    },

    textStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.primary
    },
    textInput: {
        fontFamily: 'Lato-Regular',
        borderBottomWidth: 1,
        justifyContent: 'flex-end',
        height: 40,
        fontSize: 15,
    },
    datePicker: {
        fontFamily: 'Lato-Regular',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 40
    },

    Input: {
        fontFamily: 'Lato-Regular',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        fontSize: 15,
    },
    button: {
        marginVertical: 20,
        backgroundColor: colors.primary,
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    buttontext: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Lato-Bold'
    },

});

export default UserInfo
