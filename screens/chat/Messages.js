import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { StyleSheet, ScrollView, View, Text, BackHandler, } from 'react-native';
import initialMessages from '../../component/Chat/chatMessages';
import { renderInputToolbar, renderActions, renderComposer, renderSend } from '../../component/Chat/Input';
import {
  renderAvatar,
  renderBubble,
  renderSystemMessage,
  renderMessage,
  renderMessageText,
  renderCustomView,
} from '../../component/Chat/Messagecontainer';
import { useNavigationButtonPress } from 'react-native-navigation-hooks';
import { Navigation } from "react-native-navigation";

const Messages = (props) => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const componentId = props.componentId;

  useNavigationButtonPress(e => {
    if (e.buttonId === 'phone') {
      _call()
      // Navigation.pop(componentId)
    } else if (e.buttonId === 'back') {
      Navigation.dismissModal(componentId);
    };
  }, componentId);

  const back = () => {
    Navigation.dismissModal(componentId);
    return true;
  };

  useEffect(() => {
    console.log(props.updatedata)
    BackHandler.addEventListener("hardwareBackPress", back);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", back);
  }, []);


  const _call = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'call',
              options: {
                layout: {
                  orientation: ['portrait'],
                  backgroundColor: "#192650",
                  componentBackgroundColor: '#192650',
                },
                statusBar: {
                  style: 'dark',
                  visible: true,
                  backgroundColor: '#192650',
                },
                topBar: {
                  visible: false,
                  noBorder: true,
                  elevation: 0,
                },
              },
            },
          },
        ],
      },
    });
  }

  useEffect(() => {
    setMessages(initialMessages.reverse());
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <GiftedChat
      messages={messages}
      text={text}
      onInputTextChanged={setText}
      onSend={onSend}
      // user={{
      //   _id: 1,
      //   name: 'Aaron',
      //   avatar: 'https://placeimg.com/150/150/any',
      // }}
      alignTop
      alwaysShowSend
      scrollToBottom
      showUserAvatar
      renderAvatarOnTop
      renderUsernameOnMessage
      bottomOffset={26}
      // onPressAvatar={console.warn('mohsin')}
      // renderInputToolbar={renderInputToolbar}
      renderActions={renderActions}
      // renderComposer={renderComposer}
      renderSend={renderSend}
      // renderAvatar={renderAvatar}
      alwaysShowSend
      // renderBubble={renderBubble}
      // renderSystemMessage={renderSystemMessage}
      renderMessage={renderMessage}
      renderMessageText={renderMessageText}
      renderMessageImage
      // renderCustomView={renderCustomView}
      // isCustomViewBottom
      messagesContainerStyle={{ backgroundColor: '#F5F6F8' }}
    />
  );
};

export default Messages;