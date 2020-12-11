import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler';

const Feedback = (props) => {
    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    return (
        <ScrollView style={styles.container}>
            <View style={{ margin: 20 }}>

                <View style={styles.label}>
                    <Text style={styles.labeltext}>Name</Text>

                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInput} />
                    </View>
                </View>

                <View style={styles.label}>
                    <Text style={styles.labeltext}>Email</Text>

                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInput} />
                    </View>
                </View>


                <View style={styles.label}>
                    <Text style={styles.labeltext}>Category</Text>

                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInput} />
                    </View>
                </View>

                <View style={styles.label}>
                    <Text style={styles.labeltext}>Username</Text>

                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInput} />
                    </View>
                </View>

                <View style={styles.label}>
                    <Text style={styles.labeltext}>Message</Text>

                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInput} />
                    </View>
                </View>

                <View style={{ marginVertical: 15 }}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>Experience</Text>
                    <View style={{ flexDirection: "row", marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', width: '60%', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity>
                                <Icon name={'star'} color={'#FFC107'} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name={'star'} color={'#FFC107'} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name={'star'} color={'#FFC107'} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name={'star'} color={'#FFC107'} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name={'star'} color={'#FFC107'} size={20} />
                            </TouchableOpacity>
                        

                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontFamily: "Lato-Regular", fontSize: 16 }}>Rate us</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                         height: 50, backgroundColor: colors.primary,
                        alignItems: 'center', justifyContent: 'center', borderRadius: 10
                    }}>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Lato-Bold' }}>Send Feedback</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },

    label: {
        borderBottomWidth: 1,
        height: 55,
        marginVertical: 15
    },
    labeltext: {
        fontFamily: 'Lato-Regular', fontSize: 16, color: colors.primary
    },
    textInputContainer: {
        // flexDirection: 'row',
        // justifyContent: "space-between",
        // alignItems: "center"
    },

    feedback: {
        height: 55,
        marginVertical: 15
    },

    bottomView: {

        width: '100%',
        height: 50,
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },

    textStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.primary
    },
    textInput: {
        fontFamily: 'Lato-Regular',
        height: 40,
        fontSize: 16,
    },

    button: {
        marginVertical: 20,
        backgroundColor: colors.primary,
        width: 300,
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        bottom: 0,
    },
    buttontext: {
        fontSize: 18,
        color: colors.white,
        fontFamily: 'Lato-Bold'
    },

});

export default Feedback;
