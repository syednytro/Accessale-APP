
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";


const AddForm = () => {

    return (
        <View style={styles.container}>
            <View style={{height:'100%', margin: 15,justifyContent:'space-between' }}>
                <View style={{
                    height: 150, backgroundColor: "#fff",
                    alignItems: 'center', justifyContent: 'space-around', elevation: 5, borderRadius: 10, margin: 10
                }}>
                    <Image source={require('../../assets/ADS.png')} resizeMode={'contain'}
                        style={{ width: 80, height: 80 }} />
                    <Text style={{ fontFamily: "Lato-Bold", fontSize: 22, color: '#192650' }}>Create Ads</Text>
                </View>

                {/* <View style={{borderWidth:.5,borderBottomColor:'#eee'}} /> */}

                <View style={{
                    height: 150, backgroundColor: "#fff",
                    alignItems: 'center', justifyContent: 'space-around', elevation: 5, borderRadius: 10, margin: 10
                }}>
                    <Image source={require('../../assets/post.png')}
                        style={{ width: 80, height: 80 }} resizeMode={'contain'} />
                    <Text style={{ fontFamily: "Lato-Bold", fontSize: 22, color: '#192650' }}>Create Post</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 20,
        marginBottom: 150
    },

});

export default AddForm

