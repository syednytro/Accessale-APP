import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList, Image, TouchableWithoutFeedback, TouchableOpacity, Linking, Switch, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navigation } from 'react-native-navigation';
import { TextInput } from 'react-native-gesture-handler';


const ByLocation = () => {

    return (
        <View style={styles.container}>
            <View style={{ margin: 15 }}>

                <View style={{
                    flexDirection: 'row', backgroundColor: "#F0F0F0", alignItems: 'center',
                    width: 200, borderRadius: 15
                }}>
                    <View style={{ padding: 10 }}>
                        <Icon name={'search'} size={16} color={'gray'} style={{ marginLeft: 10 }} />
                    </View>
                    <TextInput style={{ fontSize: 14, fontFamily: 'Lat0-Regular' }} placeholder={'Search Location'} />
                </View>

                <View style={{ margin: 15, flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/map.png')} style={{ width: 18, height: 20 }} />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontSize: 13, fontFamily: "Lato-Regular" }}>Use current location</Text>
                        <Text style={{ fontSize: 12, fontFamily: "Lato-Light" }}>toronto</Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ByLocation;
