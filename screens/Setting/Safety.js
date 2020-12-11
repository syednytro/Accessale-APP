import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme'

const Safety = (props) => {
    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    return (
        <View style={styles.container}>
            <View style={{ margin: 15 }}>
                <TouchableOpacity style={styles.label}>
                    <View style={{ width: '85%' }}>
                        <Text style={styles.labeltext}>Tips for safe transactions (meet in private setting, make sure to check products) </Text>
                    </View>
                    <Icon name={'chevron-forward-circle-sharp'} size={20} color={'#d6d6d6'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    label: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15
    },
    labeltext: {
        fontFamily: 'Lato-Regular',
        fontSize: 16
    },
});

export default Safety;
