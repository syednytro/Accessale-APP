import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, BackHandler, TouchableOpacity, Animated, TouchableWithoutFeedback, Easing, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme';
import { ScrollView } from 'react-native-gesture-handler';

const AddCard = [
    {
        type: "card",
        name: "Card",
    },
    {
        type: "paypal",
        name: "Paypal",
    },
]

const Cards = (props) => {

    const componentId = props.componentId;


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
        outputRange: [150, 0],
        extrapolate: 'clamp',
    });

    const _categoryData = (item) => {
        _closeAlert()
        props.cardType(item.type)
    }


    const renderItem = (item) => {
        return (
            <TouchableOpacity onPress={() => _categoryData(item)}
                style={{
                    margin:10,
                    padding:10,
                    width:190,justifyContent:'center',
                    alignItems: 'center'
                }}>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 20 }}>{item.type}</Text>
            </TouchableOpacity>
        )
    }


    return (
        <Animated.View style={{
            ...styles.container,
            height: 150,
            maxHeight: 150,
            padding: 20,
            width: 250,
            marginHorizontal: 80,
            backgroundColor: '#fff',
            transform: [
                { translateY: alertTranslateY }
            ]
        }}>

            <FlatList
                data={AddCard}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item, key) => key.toString()}
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
});


export default Cards;
