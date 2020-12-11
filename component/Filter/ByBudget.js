import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList, Image, TextInput,TouchableWithoutFeedback, TouchableOpacity, Linking, Switch, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navigation } from 'react-native-navigation';


const ByBudget = () => {

    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>

                <View style={{ marginHorizontal: 30, justifyContent: 'center' }}>
                    <Text style={{ textAlign: "center", fontSize: 14,color:'#7C7C7C', fontFamily: 'Lato-Regular' }}>choose a range below</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 16 }}>Min  $</Text>
                    <TextInput style={{ fontSize: 16 }} placeholder={'Price'} />
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 16 }}>Max  $</Text>
                    <TextInput style={{ fontSize: 16 }} placeholder={'Price'} />
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

export default ByBudget;
