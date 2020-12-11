import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, BackHandler, ActivityIndicator, TextInput, TouchableOpacity, Animated, TouchableWithoutFeedback, Easing, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import { base_url } from '../../Api/Api';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';


const AdsStates = (props) => {

    const componentId = props.componentId;

    const dispatch = useDispatch();
    const { userToken, } = useSelector(state => state.appReducerData)
    const [Loading, setLoading] = useState(true);
    const [States, setstates] = useState([]);
    const [text, setText] = useState('');


    useEffect(() => {
        getStates()
        console.log('iddd', props.stateId)
        BackHandler.addEventListener("hardwareBackPress", back);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", back);
    }, []);

    const back = () => {
        Navigation.dismissOverlay(componentId);
        return true;
    };

    const getStates = async () => {
        const id = props.stateId
        setLoading(true);
        await Axios.get(`${base_url}get-states/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer ' + userToken
            }
        }).then(res => {
            console.log('states', res.data.States)
            if (res.status == 200) {
                setstates(res.data.States)
            }
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            console.log('errr', error)
        });
    }


    const [alertY, setalertY] = useState(new Animated.Value(0))
    // const [avtarimage, setavtarimage] = useState(Details)

    const _closeAlert = () => {
        Navigation.dismissOverlay(props.componentId)
    };

    const alertTranslateY = alertY.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 0],
        extrapolate: 'clamp',
    });

    const searchData = (text) => {
        const newData = States.filter(item => {
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            // console.log('filtt',itemData.indexOf(textData) > 1)
            return itemData.indexOf(textData) > -1
        });
        setText(text)
        setstates(newData)
    }

    const renderStates = (item) => {
        // console.log(item)
        return (
            <View style={{ margin: 5 }}>
                <TouchableOpacity style={{ padding: 5, backgroundColor: "red", }}
                    onPress={() => _SelectCity(item)}
                    style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const _SelectCity = (item) => {
        _closeAlert()
        // console.log('item', item)
        props.stateSelect(item)

        Navigation.showOverlay({
            component: {
                name: 'adscity',
                passProps: {
                    CityId: item.id,
                    citySelect: props.city
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

            <View >
                <Text style={{ fontSize: 20, fontFamily: 'Lato-Bold' }}>Select State</Text>
            </View>

            <View style={{ width: "100%", height: '90%' }}>
                {Loading ? (
                    <ActivityIndicator
                        color='red'
                        size={'large'}
                        style={styles.loader}
                    />
                ) :

                    <FlatList
                        data={States}
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


export default AdsStates;
