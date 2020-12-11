import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../theme/theme'
import { Avatar, Bubble, SystemMessage, Message, MessageText } from 'react-native-gifted-chat';

export const renderAvatar = (props) => (
    <Avatar
    {...props}
    containerStyle={{ left: { borderWidth: 3 }, right: {} }}
    // imageStyle={{ left: { borderWidth: 3 }, right: {} }}
    />
);

export const renderBubble = (props) => (
    <Bubble
        {...props}
        renderTime={() => <Text style={{ color: 'red' }}>05:10 PM</Text>}
        // renderTicks={() => <Text>Ticks</Text>}
        containerStyle={{
            left: { borderColor: 'teal', borderWidth: 8 },
            right: {},
        }}
        wrapperStyle={{
            left: { borderWidth: 0 },
            right: {},
        }}
        bottomContainerStyle={{
            left: { borderWidth: 0 },
            right: {},
        }}
        tickStyle={{}}
        usernameStyle={{ fontWeight: '100' }}
        containerToNextStyle={{
            left: { borderWidth: 0 },
            right: {},
        }}
        containerToPreviousStyle={{
            left: { borderWidth: 0 },
            right: {},
        }}
    />
);


export const renderMessage = (props) => (
    <Message
        {...props}
        // renderDay={() => <Text>Date</Text>}
        // containerStyle={{
        //     left: { backgroundColor: '#fff' },
        //     right: { backgroundColor: colors.primary },
        // }}
    />
);

export const renderMessageText = (props) => (
    <MessageText
        {...props}
        // containerStyle={{
        //     left: { backgroundColor: '#fff' },
        //     right: { backgroundColor: colors.primary },
        // }}
        textStyle={{
            left: { color: '#2E3034' },
            right: { color: '#fff' },
        }}
        linkStyle={{
          left: { color: 'orange' },
          right: { color: 'orange' },
        }}
        customTextStyle={{ fontSize: 18, lineHeight: 24, fontFamily: 'Lato-Regular' }}
    />
);

export const renderCustomView = ({ user }) => (
    <View>
        <Text> 
            {/* {user.name} */}
            mohsin
        </Text>
    </View>
);