
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";

let backbtn;
let exitbtn;
Icon.getImageSource('chevron-left', 25, colors.primary).then(source => backbtn = source);
Icon.getImageSource('x', 25, colors.primary).then(source => exitbtn = source);


const ChatCall = () => {


    return (
        <View style={styles.container}>
            <View style={{marginVertical:10}}>
                <Text>Messages</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    textInput: {
        width: '80%',
        fontFamily: 'Lato-Regular',
        justifyContent: 'flex-end',
        height: 40,
        fontSize: 15,
    },

});

export default ChatCall
