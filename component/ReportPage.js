import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Animated, TouchableWithoutFeedback, Easing, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { colors } from '../theme/theme';


const ReportPage = (props) => {

    const [alertY, setalertY] = useState(new Animated.Value(0))

    const _closeAlert = () => {
        Navigation.dismissOverlay(props.componentId)
    }

    const alertTranslateY = alertY.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 0],
        extrapolate: 'clamp',
    });

    return (
        <Animated.View style={{
            ...styles.container,
            transform: [
                { translateY: alertTranslateY }
            ]
        }}>
            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>

                <View style={{
                    height: 80,
                    maxHeight: 80,
                    width: 120,
                    justifyContent: 'space-evenly',
                    // alignItems:'center',
                    padding: 10,
                    marginHorizontal: 20,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    elevation: 10
                }}>
                    <TouchableOpacity >
                        <Text style={{ fontSize: 18, fontFamily: 'Lato-Regular' }}>Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18, fontFamily: 'Lato-Regular' }}>Follow</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // borderRadius: 10,
        // shadowColor: "#000",
        // shadowOffset: {
        // width: 0,
        // height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // marginBottom:60
        // elevation: 10,
    },

    alertDetails: {
        marginVertical: 10,
        margin: 10,
        // flexDirection:'row',
        backgroundColor: "red"
        // width:0,
    },
});


export default ReportPage;
