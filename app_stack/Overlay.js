
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../theme/theme';
import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get("window");


const Overlay = () => {

    return (
        <View style={{
            width: 64, height: 64, backgroundColor: colors.secondary,
            position: 'absolute', left: width / 2 - 64 / 2, borderRadius: 64 / 2, justifyContent: 'center',
            alignItems: 'center',
            right: 0, bottom:18,elevation:10
        }} >
            <Icon name={'add'} color={'#fff'} size={30} />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        margin: 10,
        backgroundColor: '#fff'
    },

});

export default Overlay
