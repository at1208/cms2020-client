// import React, {  useState, useEffect } from 'react';
// import { isAuth } from '../../actions/auth'
// import Layout from '../layout/layout'
// import GroupStyle from './style';
// import TextField from '@material-ui/core/TextField';
// import SendIcon from '@material-ui/icons/Send';
// import { io as socket } from '../../helpers/socket';
// import { getMessages } from '../../actions/messages'
// import moment from 'moment';
// const styling = GroupStyle();
//
//
//
// const Chat = () => {
//
// const [messages, setMessages] = useState([]);
// const [sender, setSender] = useState();
//
//
// socket.emit('socketInfo', { data: isAuth().email })
// socket.on("message", (message) => {
//     setMessages(() => [...messages,  message.data.data ])
// })
//
// socket.on("online", (online) => {
//     console.log(online)
// })
//
//
// useEffect(() => {
//   getMessages()
//     .then((value) => {
//       console.log(value)
//       setMessages(value.msg)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// },[])
//
// const handleSubmit = (e) => {
//       e.preventDefault()
//       if(!sender){
//         return;
//       }
//        socket.emit('message', {data: { from: isAuth().firstName, toGroup: "Sachin", datetime: Date.now(), message: sender }})
//        setSender("")
// }
//
//
//
// const showMessages = () => {
//     return messages.map((item, i) => {
//       return <div key={i} style={styling.message} className="card">
//                <div className="row">
//                 <img src="https://i.stack.imgur.com/l60Hf.png"  width={30} height={30} style={styling.msgImg}/>
//                 <span style={styling.fromName}>{item.from}</span>
//                </div>
//                 <span style={styling.text}>{item.message}</span>
//                 <small style={styling.time}>{moment(item.datetime).format('hh:mm A')}</small>
//              </div>
//     })
// }
//   return <>
//          <Layout>
//               <div className="container-fluid">
//                   <div className="row col justify-content-center">
//                      <div className="col-md-2">
//                      </div>
//                      <div className="col-md-7">
//                       {showMessages()}
//                       <div className="typeMsgContainer">
//                       <TextField  placeholder="Type message here ..."
//                                   variant="outlined"
//                                   multiline
//                                   value={sender}
//                                   onChange={(e) => setSender(e.target.value)}
//                                   fullWidth />
//                        <SendIcon style={styling.sendIcon} className="sendIcon" onClick={handleSubmit}/>
//                       </div>
//                      </div>
//                      <div className="col-md-2" style={styling.groupchatRight}>
//                      </div>
//                   </div>
//               </div>
//          </Layout>
//          </>
// }
//
// export default Chat;
