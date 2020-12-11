import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler';

const PrivacyPolicy = (props) => {
    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    return (
        <ScrollView style={styles.container}>
            <View style={{ margin: 20 }}>
                <Text style={{ fontSize: 14, fontFamily: "Lato-Light" }}>Accessale is committed to providing a positive, friendly, informative and safe experience for all our users.
                This Policy explains how we collect, use, disclose and protect your Personal Information when providing our Services
                to you. By using our Services, you expressly consent to our collection, use, disclosure and retention of your Personal
                Information as described in this Policy.  {"\n"}
                </Text>
                <Text style={{ fontFamily: 'Lato-Regular' }}>Accessale.com will notify you of:</Text>
                <Text style={{ fontFamily: 'Lato-Light' }}>{"\n"}- What information is collected from you through the web site;{"\n"}{"\n"}
                - The organization collecting the information{"\n"}
                    {"\n"} - With whom the information may be shared;{"\n"}
                    {"\n"} - The kind of security procedures that are in place to protect the loss, misuse or alteration
                of information under Accessale.com control;{"\n"}

                    {"\n"} - How you can correct any inaccuracies in the information;{"\n"}

                    {"\n"}- How the information is used;{"\n"}
                    {"\n"}- What choices are available to you regarding collection, use and distribution of the
                 information{"\n"}

                    {"\n"} If you feel that Accessale.com is not abiding by its posted privacy policy, you wish to modify information previously given, or have any questions regarding the privacy policy, please contact us on page Help desk.

​             {"\n"} {"\n"}  INFORMATION COLLECTION AND USE{"\n"}{"\n"}
​Accessale.com is the sole owner of the information collected on this site. We will not sell, share or rent this information to others in ways different from what is disclosed in this statement. Accessale.com collects information from our users at several different points on our web site. Accessale.com collects information from users responding to ads regarding their Internet provider; this information may include the user's IP address, host name, country of origin and Internet provider being used.
                This collected information may be shared with the user placing the ad for the sole purpose of assisting this user in determining the validity and legitimacy of the response. Demographic and profile data is also collected at our site. This information is shared with advertisers on an aggregate basis. We may use information collected to promote other affiliate programs, products, web sites and services.
​                 Information about your computer hardware and software is automatically collected by Accessale.com and may be shared with third parties whose services are used for traffic analysis purposes. This information includes: your IP address, browser type, domain names, access times and referring Web site addresses. This information is used by Accessale.com to maintain and improve the quality of the service and to generate statistics regarding use of the Accessale.com website.
                 </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
});

export default PrivacyPolicy;
