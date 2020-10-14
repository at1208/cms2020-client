import React, { useState, useEffect ,useRef} from 'react';
import Style from './style';
import Layout from '../layout/layout'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { isAuth } from '../../actions/auth';
import MessageCard from './messageCard';
// import socketIOClient from 'socket.io-client';
// import { getSingleMember, getMembers } from '../../actions/member';
const  styling = Style();


const PrivateChat = ({ match }) => {
   //
   // const socketRef = useRef();
   // socketRef.current = socketIOClient.connect("http://127.0.0.1:8000/privatechat");




   return <>
           <Layout>

           </Layout>
          </>
}

export default PrivateChat;
