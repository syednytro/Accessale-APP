import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, BackHandler, ActivityIndicator, TextInput, TouchableOpacity, Animated, TouchableWithoutFeedback, Easing, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import { base_url } from '../../Api/Api';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';


const AdsLocation = (props) => {

    const componentId = props.componentId;

    const dispatch = useDispatch();
    const { userToken, } = useSelector(state => state.appReducerData)
    const [Loading, setLoading] = useState(true);
    const [Country, setCountry] = useState(null);
    const [address, setAddress] = useState("");
    const [Error, setError] = useState("");

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", back);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", back);
    }, []);

    const back = () => {
        Navigation.dismissOverlay(componentId);
        return true;
    };

    const [alertY, setalertY] = useState(new Animated.Value(0))

    const _closeAlert = () => {
        Navigation.dismissOverlay(props.componentId)
    };

    const alertTranslateY = alertY.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 0],
        extrapolate: 'clamp',
    });


    const _getStateId = (item) => {
        props.country(item)
        // console.log('item', item)
    }


    const _changeAddress = (text) => {
        // console.log('text', text)
        setAddress(text)
        props.Address(text)
    }

    const _onPostalcode = (text) => {
        props.PostalCode(text)
    }

    const CountryModal = () => {

        if (address == "") {
            setError("Please enter Address")
        }
        else {
            _closeAlert()
            Navigation.showOverlay({
                component: {
                    name: 'adscountry',
                    passProps: {
                        country: props.country,
                        stateSelect: props.SelectState,
                        city: props.SelectCity

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
    }

    return (
        <Animated.View style={{
            ...styles.container,
            height: '70%',
            backgroundColor: "#fff",
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop: 100,
            marginHorizontal: 10,
            transform: [
                { translateY: alertTranslateY }
            ]
        }}>


            <View style={{ margin: 15, width: "100%", height: '90%' }}>

               

                <View style={{
                    borderRadius: 10, flexDirection: "row", backgroundColor: "#fff",
                    elevation: 5, alignItems: 'center'
                }}>
                    <TextInput
                        placeholder={'Enter Address'}
                        onChangeText={(text) => _changeAddress(text)}
                        style={styles.textInput} />
                </View>

                <View style={{marginVertical:5,justifyContent:"center",alignItems:"center"}}>
                    {Error == "" ? <Text></Text> : <Text style={{ color: "red",fontFamily:"Lato-Regular", fontSize: 16 }}>{Error}</Text>}
                </View>


                <View style={{
                    marginVertical: 10, borderRadius: 10, flexDirection: "row", backgroundColor: "#fff",
                    elevation: 5, alignItems: 'center'
                }}>
                    <TextInput
                        placeholder={'Enter Postal Code'}
                        keyboardType="number-pad"
                        onChangeText={(text) => _onPostalcode(text)}
                        style={styles.textInput} />
                </View>

                <View style={{margin:0,justifyContent:"center",alignItems:"center"}}>
                    {Error == "" ? <Text></Text> : <Text style={{ color: "red",fontFamily:"Lato-Regular", fontSize: 16 }}>{Error}</Text>}
                </View>

                <TouchableOpacity onPress={CountryModal} style={{
                    marginVertical: 15, padding: 15, height: 55, borderRadius: 10, flexDirection: "row", backgroundColor: "#fff",
                    elevation: 5, alignItems: 'center'
                }}>

                    {Country == null ? <Text style={{ fontSize: 16, fontFamily: "Lato-Regular" }}>Selecty Country</Text>
                        : <Text style={styles.textInput}>{Country}</Text>}
                </TouchableOpacity>

            </View>


        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
    txt: {
        fontSize: 16,
        marginLeft: 20,
        color: colors.primary,
        textAlign: 'center',
        fontFamily: 'Lato-Regular'

    },
    icon: {
        alignSelf: 'center'
    },
    alertDetails: {
        marginVertical: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: '100%',
        fontFamily: 'Lato-Regular',
        fontSize: 15,
    },
});


export default AdsLocation;
