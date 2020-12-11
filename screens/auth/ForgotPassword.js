
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text, Image,
    TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../theme/theme';

const ForgotPassword = () => {


    return (
        <View style={styles.container}>

            <View style={{ margin: 15 }}>
                <View>
                    <Text style={styles.heading}>Reset Password</Text>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.textStyle}>Enter the email address
                     you used to create your accountand we will email you a link to reset your password</Text>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.textStyle}>Email Address</Text>
                    <TextInput style={styles.textInput} />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>Send Email</Text>
                </TouchableOpacity>


            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff'
    },

    heading: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.primary
    },

    textStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.primary
    },
    textInput: {
        fontFamily: 'Lato-Regular',
        borderBottomWidth: 1,
        justifyContent: 'flex-end',
        height: 40,
        fontSize: 15,
    },
    button: {
        marginVertical: 20,
        backgroundColor: colors.primary,
        width: 300,
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    buttontext: {
        fontSize: 18,
        color: colors.white,
        fontFamily: 'Lato-Bold'
    },

});

export default ForgotPassword
