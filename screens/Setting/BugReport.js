import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme'

const BugReport = (props) => {
    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center", margin: 10 }}>
                <Image source={require('../../assets/bug1.png')} style={{ width: 100, height: 100 }} />
            </View>

            <View style={{ margin: 20 }}>
                <Text style={{ fontSize: 20, fontFamily: 'Lato-Bold' }}>What went wrong?</Text>

                <TextInput style={{
                    justifyContent: 'flex-end',
                    backgroundColor: "#fff", borderRadius: 10,
                    marginVertical: 20,
                    fontFamily: 'Lato-Regular',
                    color: "#F0F0F0",
                    height: 180,
                    fontSize: 16,
                }} placeholder={'Please type here'} />

                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={{ marginRight: 10 }}>
                        <Image source={require('../../assets/camera.png')} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/photo.png')} style={{ width: 25, height: 25 }} />
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
});

export default BugReport;
