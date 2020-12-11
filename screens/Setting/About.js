import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler';

const About = (props) => {

    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    return (
        <ScrollView style={styles.container}>
            <View style={{ margin: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '40%' }}>
                        <Image source={require('../../assets/Logo.png')} style={{ width: 120, height: 120 }} resizeMode="contain" />
                    </View>
                    <View style={{ width: '60%', justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 18, fontFamily: "Lato-Bold" }}>Why buying & selling with Accessale? </Text>
                        <Text style={{ fontSize: 16, fontFamily: "Lato-Regular", color: '#5F5F5F' }}>The worldwide classified platform where  everyone exchange.</Text>

                    </View>
                </View>

                <View style={{ marginVertical: 20 }}>
                    <Text style={{ fontSize: 18, fontFamily: "Lato-Bold" }}>OUR DNA</Text>
                    <Text style={{ fontFamily: 'Lato-Light', fontSize: 15 }}>{"\n"}We are he Home buyers & sellers across America. A Worldwide online classified platform for buyers and sellers to exchange. Based in the United States & Canada, we make transactions between buyers and sellers Fast & Simple.{"\n"}{"\n"}
                    Tired of spending too much on your promotions and online purchases? Accessale is the solution.{"\n"}{"\n"}
                    Our team is made up of ordinary people like you who are looking to sell or buy at a reasonable price and without unnecessary expenses.{"\n"}{"\n"}
Many of us are the victims of some e-commerce giants who make tens of millions of dollars a day in fake Ads and clicks. We pay monthly for a zero income dashboard. Amazon alone earns more than $ 215 million a day.{"\n"}{"\n"}
Accessale says enough is enough; we are all entitled to a free promotion, it is time we pay for what function. And that's what Accessale offers: Free promotion for some and for others only $ 1 a day for Top Ads on a worldwide classified platform.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
    },

});

export default About;
