import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout'
import Style from './style';
import { Link } from 'react-router-dom'
import { isAuth } from '../../actions/auth';
import { getSingleMember, getMembers } from '../../actions/member';

const  styling = Style();


const Message = () => {

const [members, setMembers] = useState([]);

useEffect(() => {
  getMembers()
  .then((value) => {
    console.log(value)
    setMembers(value.result)
  })
  .catch((err) => {
    console.log(err)
  })
},[])



const memberList = () => {
 const individualMember = (data) => {
  return <div style={styling.memberContainer}>
            <img src="https://scontent.fdel3-2.fna.fbcdn.net/v/t1.0-9/88339928_553781082162452_485602196625293312_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=QJLB_q6x_RcAX853eKJ&_nc_ht=scontent.fdel3-2.fna&oh=671cd7ba8089e47f3cb66dde737f9c82&oe=5FAAF7DA" style={styling.memberImg}/>
            <span style={styling.memberName}>{data.fullName}</span>
         </div>
}
  return members.map((item, i) => {
    return <div key={i}>
             <Link to={`/message/${item._id}`}>
               {individualMember(item)}
             </Link>
           </div>
  })
}

  return <>
           <Layout>
               <div className="messageSideBar">
                {memberList()}
               </div>
           </Layout>
         </>
}
export default Message;
