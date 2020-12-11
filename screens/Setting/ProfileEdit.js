
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/theme';
import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


const ProfileEdit = (props) => {

    const componentId = props.componentId;

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [image, setimage] = useState(null);
    const { usergender, userradio } = useSelector(state => state.appReducerData);

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    const onChange = (selectedValue) => {
        setShow(Platform.OS === 'ios');
        const currentDate = selectedValue || new Date();
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
        Navigation.showOverlay({
            component: {
                name: 'imagepick',
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

    const _radiopick = () => {
        Navigation.showOverlay({
            component: {
                name: 'radio',
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

    const formatDate = (date,) => {
        // console.warn(moment().add(date));
        // return(moment().add(date))
        return `${date.getDate()}/${date.getMonth() +
            1}/${date.getFullYear()}`;
    };

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
    return (
        <ScrollView contentContainerStyle={styles.container} >

            <View style={{ margin: 20 }}>


                <View style={styles.drawer}>
                    <TouchableOpacity onPress={_PickerImage} style={styles.drawerIcon}>
                        {usergender != '' ? <Image
                            source={usergender}
                            style={{ width: 80, height: 80, borderRadius: 100 / 2 }}
                        /> :
                            <Icon name={'camera'} size={25} style={{ position: 'absolute', }}
                                color={colors.primary} />
                        }

                    </TouchableOpacity>
                </View>

                <View style={styles.label}>
                    <Text style={styles.labeltext}>Username</Text>

                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInput} />
                        <Icon name={'edit-2'} size={20} color={'#230B34'} />
                    </View>
                </View>

                <View style={styles.label}>
                    <Text style={styles.labeltext}>Nickname</Text>

                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInput} />
                        <Icon name={'edit-2'} size={20} color={'#230B34'} />
                    </View>
                </View>


                <TouchableOpacity onPress={showDatepicker} style={{ height: 40, marginVertical: 15 }}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, color: colors.primary }}>Date of Birth</Text>

                    <View style={styles.datePicker}>
                        {/* <Text >{date == "" ? 'not' : {formatDate(date)} }</Text> */}
                        {date == "" ? <Text style={{ color: '#c3c3c3' }}>Month / Day / Year</Text> :
                            <Text>{formatDate(date)}</Text>}
                        {show && (
                            <DateTimePicker
                                testID='dateTimePicker'
                                timeZoneOffsetInMinutes={0}
                                value={date}
                                mode={mode}
                                display='default'
                                onChange={onChange}
                            />
                        )}
                    </View>
                </TouchableOpacity>
                
                <View style={styles.label}>
                    <Text style={styles.labeltext}>Email</Text>

                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInput} />
                        <Icon name={'edit-2'} size={20} color={'#230B34'} />
                    </View>
                </View>
                 
                <View style={styles.label}>
                    <Text style={styles.labeltext}>Phone</Text>

                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInput} />
                        <Icon name={'edit-2'} size={20} color={'#230B34'} />
                    </View>
                </View>

            </View>

                <TouchableOpacity
                    onPress={_bottomTab}
                    style={{
                         height: 50, backgroundColor: colors.primary,margin:10,
                        alignItems: 'center', justifyContent: 'center', borderRadius: 10
                    }}>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Lato-Bold' }}>Done</Text>
                </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        margin: 10,
    },

    heading: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
    },
    drawer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 130,
        marginVertical: 10
    },
    drawerIcon: {
        width: 100,
        height: 100,
        backgroundColor: '#E3E3E3',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    label: {
        borderBottomWidth: 1,
        height: 55,
        marginVertical: 10
    },
    labeltext: {
        fontFamily: 'Lato-Regular', fontSize: 16, color: colors.primary
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },

    bottomView:{
 
        width: '100%', 
        height: 50, 
        backgroundColor: '#FF9800', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
      },

    textStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.primary
    },
    textInput: {
        fontFamily: 'Lato-Regular',
        height: 40,
        width: '90%',
        fontSize: 15,
        // backgroundColor:'blue'
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
        width: 300,
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        bottom: 0,
    },
    buttontext: {
        fontSize: 18,
        color: colors.white,
        fontFamily: 'Lato-Bold'
    },

});

export default ProfileEdit
