import React, { useState, useContext, useEffect } from 'react';
import {
  GiftedChat,
  Bubble,
  Send,
  SystemMessage
} from 'react-native-gifted-chat';
import { ActivityIndicator, View, StyleSheet, Text, image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import initialMessages from './component/Chat/chatMessages';
// import { TabBar } from 'react-native-tab-view';
// import { IconButton } from 'react-native-paper';
// import { AuthContext } from '../navigation/AuthProvider';
// import firestore from '@react-native-firebase/firestore';
// import useStatsBar from '../utils/useStatusBar';

export default function App() {
  // useStatsBar('light-content');

  const [messages, setMessages] = useState([]);
  // const { thread } = route.params;
  // const { user } = useContext(AuthContext);
  // const currentUser = user.toJSON();

  useEffect(() => {
    setMessages(initialMessages.reverse());
  }, []);

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#6646ee'
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}
      />
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#6646ee' />
      </View>
    );
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <Icon icon='send' size={32} color='#6646ee' />
        </View>
      </Send>
    );
  }

  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon='chevron-double-down' size={36} color='#6646ee' />
      </View>
    );
  }

  function renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        wrapperStyle={styles.systemMessageWrapper}
        textStyle={styles.systemMessageText}
      />
    );
  }

  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <View style={{ alignItems: "center", width: '25%' }}>
          <View style={{
            marginVertical: 5,
            width: 51, height: 51, alignItems: 'center', justifyContent: "center",
            backgroundColor: '#FE8D00', borderRadius: 17
          }}>
            <Icon name={'mail'} size={16} />
          </View>
          <View style={{ marginVertical: 10, height: 12, backgroundColor: "green", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 12 }}>Vehicles</Text>
          </View>
        </View>

        <View style={{ alignItems: "center", width: '25%' }}>
          <View style={{
            marginVertical: 5,
            width: 51, height: 51, alignItems: 'center', justifyContent: "center",
            backgroundColor: '#FE8D00', borderRadius: 17
          }}>
            <Icon name={'mail'} size={16} />
          </View>
          <View style={{ marginVertical: 10, height: 12, backgroundColor: "green", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 12 }}>Vehicles</Text>
          </View>
        </View>

        <View style={{ alignItems: "center", width: '25%' }}>
          <View style={{
            marginVertical: 5,
            width: 51, height: 51, alignItems: 'center', justifyContent: "center",
            backgroundColor: '#FE8D00', borderRadius: 17
          }}>
            <Icon name={'mail'} size={16} />
          </View>
          <View style={{ marginVertical: 10, height: 12, backgroundColor: "green", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 12 }}>Vehicles</Text>
          </View>
        </View>

        <View style={{ alignItems: "center", width: '25%' }}>
          <View style={{
            marginVertical: 5,
            width: 51, height: 51, alignItems: 'center', justifyContent: "center",
            backgroundColor: '#FE8D00', borderRadius: 17
          }}>
            <Icon name={'mail'} size={16} />
          </View>
          <View style={{ marginVertical: 10, height: 12, backgroundColor: "green", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 12 }}>Vehicles</Text>
          </View>
        </View>
        
        <View style={{ alignItems: "center", width: '25%' }}>
          <View style={{
            marginVertical: 5,
            width: 51, height: 51, alignItems: 'center', justifyContent: "center",
            backgroundColor: '#FE8D00', borderRadius: 17
          }}>
            <Icon name={'mail'} size={16} />
          </View>
          <View style={{ marginVertical: 10, height: 12, backgroundColor: "green", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 12 }}>Vehicles</Text>
          </View>
        </View>
        
         <View style={{ alignItems: "center", width: '25%' }}>
          <View style={{
            marginVertical: 5,
            width: 51, height: 51, alignItems: 'center', justifyContent: "center",
            backgroundColor: '#FE8D00', borderRadius: 17
          }}>
            <Icon name={'mail'} size={16} />
          </View>
          <View style={{ marginVertical: 10, height: 12, backgroundColor: "green", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 12 }}>Vehicles</Text>
          </View>
        </View>

        <View style={{ alignItems: "center", width: '25%' }}>
          <View style={{
            marginVertical: 5,
            width: 51, height: 51, alignItems: 'center', justifyContent: "center",
            backgroundColor: '#FE8D00', borderRadius: 17
          }}>
            <Icon name={'mail'} size={16} />
          </View>
          <View style={{ marginVertical: 10, height: 12, backgroundColor: "green", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 12 }}>Vehicles</Text>
          </View>
        </View>
      
        <View style={{ alignItems: "center", width: '25%' }}>
          <View style={{
            marginVertical: 5,
            width: 51, height: 51, alignItems: 'center', justifyContent: "center",
            backgroundColor: '#FE8D00', borderRadius: 17
          }}>
            <Icon name={'mail'} size={16} />
          </View>
          <View style={{ marginVertical: 10, height: 12, backgroundColor: "green", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 12 }}>Vehicles</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    // flex: 1,
    backgroundColor: 'red',

    // alignItems: 'center',
    // justifyContent: ''
  },
  boxStyle: {
    height: 100,
    width: 50,
    borderWidth: 1,
    backgroundColor: 'orange',
    marginBottom: 5
  },


});