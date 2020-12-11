import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, BackHandler, ActivityIndicator, TextInput, TouchableOpacity, Animated, TouchableWithoutFeedback, Easing, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import { base_url } from '../../Api/Api';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';


const AdsCity = (props) => {

    const componentId = props.componentId;

    const dispatch = useDispatch();
    const { userToken, } = useSelector(state => state.appReducerData)
    const [Loading, setLoading] = useState(true);
    const [Cities, setcity] = useState([]);
    const [text, setText] = useState('');


    useEffect(() => {
        getCities()
        BackHandler.addEventListener("hardwareBackPress", back);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", back);
    }, []);

    const back = () => {
        Navigation.dismissOverlay(componentId);
        return true;
    };

    const getCities = async () => {
        const id = props.CityId
        setLoading(true);
        await Axios.get(`${base_url}get-cities/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer ' + userToken
            }
        }).then(res => {
            console.log('states', res.data.Cities)
            if (res.status == 200) {
                setcity(res.data.Cities)
            }
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            console.log('errr', error)
        });
    }

    const [alertY, setalertY] = useState(new Animated.Value(0))

    const _closeAlert = () => {
        Navigation.dismissOverlay(props.componentId)
    };

    const alertTranslateY = alertY.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 0],
        extrapolate: 'clamp',
    });

    const searchData = (text) => {
        const newData = Cities.filter(item => {
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1
        });
        setText(text)
        setcity(newData)
    }

    const renderStates = (item) => {
        return (
            <TouchableOpacity onPress={() => _getStateId(item)}
                style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    const _getStateId = (item) => {
        _closeAlert()
        props.citySelect(item)
    }

    return (
        <Animated.View style={{
            ...styles.container,
            height: '85%',
            backgroundColor: "#fff",
            padding: 20,
            marginHorizontal: 10,
            transform: [
                { translateY: alertTranslateY }
            ]
        }}>

            <View style={{
                margin: 10, borderRadius: 10, flexDirection: "row", backgroundColor: "#fff",
                elevation: 5, alignItems: 'center'
            }}>
                <Icon name={'search'} style={{ marginLeft: 10 }} color={'#717171'} size={18} />
                <TextInput
                    placeholder={'Search'}
                    style={styles.textInput}
                    onChangeText={(text) => searchData(text)}
                />
                {/* <Image source={require('../../assets/filter.png')} style={{ width: 20, height: 20 }} /> */}
            </View>

            <View>
                <Text style={{ fontSize: 20, fontFamily: 'Lato-Bold' }}>Select city</Text>
            </View>

            <View style={{ marginVertical: 10, width: "100%", height: '70%' }}>
                {Loading ? (
                    <ActivityIndicator
                        color='red'
                        size={'large'}
                        style={styles.loader}
                    />
                ) :

                    <FlatList
                        data={Cities}
                        renderItem={({ item }) => renderStates(item)}
                        keyExtractor={(item, key) => key.toString()}
                    />

                }
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
        justifyContent: "center",
        alignItems: 'center'
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


export default AdsCity;
