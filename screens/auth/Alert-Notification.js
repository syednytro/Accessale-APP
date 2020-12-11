import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Animated, Easing, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Fontisto';

class AlertNotification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alertY: new Animated.Value(0),
        };
        Navigation.events().bindComponent(this);
    }

    componentDidMount() {
        this.alertTimeout = setTimeout(() => {
            Animated.timing(this.state.alertY, {
                toValue: 0,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start(() => this._closeAlert());
        }, 3000);

        // console.log(this.props.errordata)
    }

    componentDidAppear = () => {
        Animated.timing(this.state.alertY, {
            toValue: 1,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true,
        }).start();
    };
    componentDidDisappear = () => {
        clearTimeout(this.alertTimeout);
    };
    _closeAlert = () => {
        Animated.timing(this.state.alertY, {
            toValue: 0,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start(() => Navigation.dismissOverlay(this.props.componentId));

    };

    render() {
        const alertTranslateY = this.state.alertY.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 0],
            extrapolate: 'clamp',
        });
        return (
            <Animated.View style={{
                ...styles.container,
                height: 70,
                maxHeight: 70,
                padding : 10,
                marginTop : 21,
                marginHorizontal : 10,
                backgroundColor : '#fff',
                transform : [
                    {translateY : alertTranslateY}
                ]
            }}>
                <Image source={{uri : 'warning_icon'}} height={30} width={30} style={styles.icon}/>
                <View style={styles.alertDetails}>
                    <Text style={styles.title}>Whoops... </Text>
                    <Text style={styles.txt}>{this.props.text}</Text>
                </View>
                <TouchableOpacity onPress={this._closeAlert}>
                    <Icon name={'close'} size={15}/>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius : 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    txt: {
        fontSize: 12,
        color: 'red',
        fontFamily: 'Lato-Regular'

    },
    icon : {
        height : 30,
        width: 30,
        alignSelf : 'center'
    },
    alertDetails : {
        alignSelf: 'center',
        marginHorizontal: 10,
        flex : 1
    },
    title : {
        marginBottom : 5,
        fontFamily : 'Lato-Bold'
    }
});
export default AlertNotification;
