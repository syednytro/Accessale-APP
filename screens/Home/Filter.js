import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList, Image, TouchableWithoutFeedback, TouchableOpacity, Linking, Switch, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navigation } from 'react-native-navigation';
import { RNNDrawer, SideMenuView } from "react-native-navigation-drawer-extension";
import { colors } from '../../theme/theme';
import ByLocation from '../../component/Filter/ByLocation'
import ByBudget from '../../component/Filter/ByBudget';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'

const windowHeight = Dimensions.get('window').height;

const Filter = (props) => {


    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    const [Budgetdata, setBudgetdata] = useState(false);

    const _Budget = () => {
        setBudgetdata(!Budgetdata)
    }

    const _closeModal = () => {
        console.log('click')
        Navigation.dismissModal(componentId);
    }

    const renderFilterData = () => {

        if (data == '0') {
            <ByBudget />
        } else {
            <ByLocation />
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => _closeModal()} style={{ height: 80 }}>
            </TouchableOpacity>
            <View style={{ flex: 1, borderTopEndRadius: 30, borderBottomRightRadius: 30, backgroundColor: "#fff", paddin: 10 }}>

                <View style={{ alignItems: 'center', justifyContent: "center" }}>
                    <Icon name={'remove-outline'} size={40} />
                </View>

                <View style={{ height: 50, justifyContent: "center", borderBottomColor: '#eee', borderBottomWidth: 1 }}>
                    <Text style={{ marginLeft: 20, fontSize: 20, fontFamily: ":Lato-Regular" }}>Filters</Text>
                </View>

                <View style={{ height: 400, flexDirection: "row" }}>

                    <View style={{ width: 126, backgroundColor: '#F5F6F8', height: '100%', }}>

                        <TouchableOpacity onPress={() => _Budget()} style={{ padding: 10, alignItems: "center" }}>
                            <Text style={{ fontFamily: 'Lato-Bold' }}>By budget</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => _Budget()} style={{ padding: 10, alignItems: "center" }}>
                            <Text style={{ fontFamily: 'Lato-Bold' }}>By Location</Text>
                        </TouchableOpacity>

                    </View>

                    <View>
                        {Budgetdata ? <ByBudget /> : <ByLocation />}
                    </View>

                </View>

            </View>

            <View style={styles.bottomView}>
                <View style={{
                    marginVertical: 20,
                    // height: 55,
                    width: 120,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 15
                }}>
                    <Text style={{ color: colors.primary, fontSize: 18, fontFamily: 'Lato-Bold' }}>Clear All</Text>
                </View>

                <View style={{
                    marginVertical: 20,
                    backgroundColor: colors.primary,
                    width: 120,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 15
                }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Lato-Bold' }}>Apply</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomView: {
        width: '100%',
        flexDirection: "row",
        height: 70,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
});

export default Filter;
