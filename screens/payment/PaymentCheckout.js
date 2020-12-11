import React, { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Navigation } from "react-native-navigation";
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { colors } from '../../theme/theme';

const Radio = [
    {
        key: 'master',
        text: 'master',
        image: require('../../assets/p.png'),
        image_key: false,
    },
    {
        key: 'visa',
        text: 'visa',
        image: require('../../assets/visa.png'),
        image_key: false,
    },
    {
        key: 'paypal',
        text: 'paypal',
        image: require('../../assets/p.png'),
        image_key: false,
    },
];

const PaymentCheckout = (props) => {

    const componentId = props.componentId;

    const [Card, setCard] = useState(props.CardItem);

    useEffect(() => {
        setCard(props.CardItem)
        console.log('item', props.CardItem)
    }, [])

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    const [abc, setAbc] = useState(Radio)
    const [value, setvalue] = useState(null);
    const [show, setshow] = useState(false);

    const cardDetails = {
        number: Card.card_no,
        expMonth: Card.month,
        expYear: Card.year,
        cvc: Card.cvc,
      }

    return (
        <View style={styles.container}>

            <TouchableOpacity  style={{ margin: 5 }}>
                <ImageBackground
                    style={styles.backdrop}
                    source={require('../../assets/debit.png')}>
                    <View style={styles.backdropView}>
                        <View style={{ bottom: 20 }}>
                            <Text style={{ fontSize: 20, fontFamily: "Lato-Bold", color: '#fff' }}>{Card.type}</Text>
                        </View>
                        <View style={{ bottom: 40, left: 200 }}>
                            {Card.type == 'card' ? <Image source={require('../../assets/master.png')} /> :
                                <Image source={require('../../assets/paypal.png')} />
                            }
                        </View>

                        <Text style={{ fontFamily: 'Lato-Light', fontSize: 20, color: "#fff" }}>{Card.card_name}</Text>
                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: 10 }}>
                            <Text style={{ fontFamily: "Lato-Light", color: '#fff' }}>{Card.card_no}</Text>
                            <Text style={{ fontFamily: "Lato-Light", color: '#fff' }}>{Card.cvc}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

            <View style={styles.bottomView}>
                <View>
                    <Text style={{ fontSize: 24, fontFamily: "Lato-Bold", color: colors.primary }}>$7.99</Text>
                </View>
                <View  style={{ width: 120, alignItems: 'center', backgroundColor: colors.primary, padding: 15, borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, color: '#fff', fontFamily: "Lato-Bold" }}>pay</Text>
                </View>
            </View>
        </View >
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
    },

    bottomView: {

        width: '98%',
        height: 60,
        margin: 5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },

    cardText: {
        fontFamily: "Lato-Regular",
        fontSize: 20,
    },
    radioCircle: {
        height: 30,
        width: 30,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backdropView: {
        height: 165,
        marginTop: 40,
        padding: 30,
        marginLeft: 20,
        justifyContent: 'flex-end',
        width: 320,
    },
    backdrop: {
        height: Dimensions.get('window').width * (3 / 5),
        width: Dimensions.get('window').width,
    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: colors.secondary,
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },

})

export default PaymentCheckout;