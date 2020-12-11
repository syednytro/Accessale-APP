import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { colors } from '../../theme/theme';
import AdsView from '../../screens/Add/AdsView'
import { actionAdsOffer } from '../../redux/user/action';
import { useDispatch, useSelector } from 'react-redux';

const CustomAdTopBar = (props) => {

    const [value, setValue] = useState(false);
    const dispatch = useDispatch();

    const _getOfferModal = () => {
        dispatch(actionAdsOffer(1))
    }

    return (
        <View style={{alignItems:'center',flex:1, flexDirection: "row", marginRight: 200 }}>
            <View style={{ alignItems: "center", flexDirection: 'row' }}>
                <View>
                    <Text style={{ fontSize: 18, fontFamily: "Lato-Regular" }}>Add view</Text>
                </View>
                <TouchableOpacity onPress={_getOfferModal} style={{
                    alignItems: "center", justifyContent: "center",
                    borderRadius: 5, width: 100, marginLeft: 50, backgroundColor: colors.secondary,
                    padding: 10
                }}>
                    <Text style={{ color: "#fff", fontSize: 16, fontFamily: 'Lato-Regular' }}>Top Ad</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default CustomAdTopBar;