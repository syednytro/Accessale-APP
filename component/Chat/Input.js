import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { InputToolbar, Actions, Composer, Send } from 'react-native-gifted-chat';


export const renderInputToolbar = (props) => (
  <InputToolbar
    // {...props}
    containerStyle={{
      backgroundColor: '#fff',
    //   width:'80%',
      margin:5,
    //   elevation:5,
    //   padding:10,
      borderRadius:10,
      justifyContent:'center',
    //   paddingTop: 6,
    }}
    primaryStyle={{ alignItems: 'center' }}
  />
);

export const renderActions = (props) => (
  <Actions
    {...props}
    containerStyle={{
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor:'red',
      marginLeft: 4,
      marginRight: 4,
      marginBottom: 0,
    }}
    icon={() => (
        <Icon name={'image'} color={'#BABABA'} size={24}  />
    )}
    options={{
      'Choose From Library': () => {
        console.log('Choose From Library');
      },
      Cancel: () => {
        console.log('Cancel');
      },
    }}
    optionTintColor="#222B45"
  />
);

export const renderComposer = (props) => (
  <Composer
    // {...props}
    textInputStyle={{
    //   color: '#222B45',
      backgroundColor: 'gray',
    //   borderWidth: 1,
      borderRadius: 5,
      borderColor: '#E4E9F2',
      paddingTop: 8.5,
      paddingHorizontal: 12,
      marginLeft: 0,
    }}
  />
);

export const renderSend = (props) => (
  <Send
    {...props}
    disabled={!props.text}
    containerStyle={{
      width: 44,
      height: 44,
      // backgroundColor:"red",
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 4,
    }}
  >
    {/* <Image
      style={{ width: 32, height: 32 }}
      source={{
        uri: 'https://placeimg.com/32/32/any',
      }}
    /> */}
    <Icon name={'send'} color={'#BABABA'} size={30}  />
  </Send>
);