import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, BackHandler, TouchableOpacity, Animated, TouchableWithoutFeedback, Easing, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';


const AdsCategory = (props) => {

    const componentId = props.componentId;

    const dispatch = useDispatch();
    const { productCategory } = useSelector(state => state.appReducerData)

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
    // const [avtarimage, setavtarimage] = useState(Details)

    const _closeAlert = () => {
        Navigation.dismissOverlay(props.componentId)
    };

    const alertTranslateY = alertY.interpolate({
        inputRange: [0, 1],
        outputRange: [150, 0],
        extrapolate: 'clamp',
    });

    const _categoryData = (item) => {
        console.log('cat',item)
        _closeAlert()
        props.catGet(item)
    }


    const renderItem = (item) => {
        return (
            <TouchableOpacity onPress={() => _categoryData(item)}
                style={{
                    marginVertical: 15, justifyContent: 'space-between',
                    alignItems: 'center', flexDirection: 'row',
                    marginHorizontal: 15
                }}>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>{item.category_name}</Text>
                {/* <Icon name={'chevron-forward-circle-sharp'} size={20} color={'gray'} /> */}
            </TouchableOpacity>
        )
    }


    return (
        <Animated.View style={{
            ...styles.container,
            height: 280,
            maxHeight: 280,
            padding: 20,
            width: 250,
            marginHorizontal: 80,
            backgroundColor: '#fff',
            transform: [
                { translateY: alertTranslateY }
            ]
        }}>

            <FlatList
                data={productCategory}
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


export default AdsCategory;
