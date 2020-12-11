import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { Navigation } from 'react-native-navigation';
import {colors} from '../../theme/theme'

const AdsPromoteCost = (props) => {
    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>
                <Text style={styles.heading}>Cost of promoting ads?</Text>
                <View style={styles.label}>
                    <Text style={styles.labeltext}>
                        $6.99 one time payment for 7 Days worth of top ad within selected location.
                        This is per ad you wish to promote.
                </Text>
                </View>

                <View style={styles.socialIcon}>
                    <TouchableOpacity style={[styles.socialcontainer, { marginRight: 10 }]}>
                        <Icon name={'facebook'} size={28} color={colors.primary} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialcontainer}>
                        <Icon name={'twitter'} size={28} color={colors.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    container: {
        flex: 1,
        marginTop: 50
    },
    heading: {
        fontSize: 18,
        fontFamily: "Lato-Regular"
    },
    label: {
        marginVertical: 15
    },
    labeltext: {
        fontFamily: "Lato-Regular",
        fontSize: 16,
        color: '#5F5F5F'
    },
    socialIcon: {
        marginVertical: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },
    socialcontainer: {
        width: 40,
        justifyContent: "center",
        alignItems: 'center'
    }
});

export default AdsPromoteCost;
