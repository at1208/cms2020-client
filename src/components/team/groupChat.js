import React, { useState, useEffect, useRef} from 'react';
import Layout from '../layout/layout';
import socketIOClient from 'socket.io-client';
import { isAuth } from '../../actions/auth'
import GroupStyle from './style';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import MessageCard from './messageCard';
import { getGroupChats } from '../../actions/groupchat'
const styling = GroupStyle();





const GroupChat = ({ match }) => {

 const [chats, setChats] = useState([]);
 const [liveStatus, setLiveStatus] = useState(false);

 const [createMessage, setCreateMessage] = useState({
    sender: "",
    group: "",
    message: ""
 });



 const socketRef = useRef();
 const {room} = match.params;

 socketRef.current = socketIOClient("http://localhost:8000/groupchat", {
    query: {room}
  });


useEffect(() => {
   socketRef.current.emit("join", room);

   socketRef.current.on('connect', () => {
      setLiveStatus(true);
   });

   // socketRef.current.on('connect_error', (error) => {
   //   console.log("connect error")
   //   setLiveStatus(false)
   // })
   //
   //  socketRef.current.on('connect_timeout', (timeout) => {
   //      console.log("connection timeout")
   //  });
   //
   //  socketRef.current.on('reconnecting', (attemptNumber) => {
   //     // console.log(attemptNumber)
   // });
   //
   //  socketRef.current.on('reconnect_failed', () => {
   //    console.log("failed to reconnect")
   //  });

    socketRef.current.on("newMessage", (message) => {
      console.log(message)
          setChats((prevState) => [...prevState, message]);
       });

    socketRef.current.on("activity", (typing) => {
       console.log(typing)
    })

  return () => {
        socketRef.current.disconnect();
      };

}, [room])



useEffect(() => {
    if(createMessage.message){
      socketRef.current.emit("typing",  `${isAuth() && isAuth().firstName} is typing ...`)
    }
}, [createMessage.message])


useEffect(() => {
  // getGroupChats("5f84b9231ae7e26191ddc51c")
  // .then(response => {
  //   console.log(response)
  //   setChats(response.result)
  // })
  // .catch((err) => {
  //   console.log(err)
  // })
},[])



const sendMessage = () => {
  socketRef.current.emit("createMessage", createMessage);
  setCreateMessage({
    message: ""
  })
  // setChats(() => [...chats, createMessage])
  // console.log(createMessage)
};



 const chatsList = () => {
   return chats && chats.map((message, i) => {
     return <MessageCard  data={message} online={liveStatus} key={i}/>
   })
 }



  return <>
          <Layout>

            <div className="chatList">
              {chatsList()}
            </div>

            <div className="message-container">
            <TextField
              placeholder="Type message here ..."
              variant="outlined"
              multiline
              value={createMessage.message}
              onChange={(e) => setCreateMessage({...createMessage, message: e.target.value, sender: isAuth() && isAuth()._id, group:"5f84b9231ae7e26191ddc51c" })}
              fullWidth />
              <button onClick={sendMessage}>Send</button>
            </div>

          </Layout>
         </>
}

export default GroupChat;
