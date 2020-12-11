const ChatMessages = [
    {
      _id: 1,
      text: 'This is a system message',
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      system: true,
    },
    {
      _id: 2,
      text: 'Hello user',
      createdAt: new Date(Date.UTC(2016, 5, 12, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
   

   
 
  ];
  
  export default ChatMessages;