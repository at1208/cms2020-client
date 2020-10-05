import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout'
import ProfileStyle from './style';
import { getSingleMember } from '../../actions/member';
import { isAuth } from '../../actions/auth';

const  styling = ProfileStyle();

const Profile = () => {
  const [member, setMember] = useState({})

  useEffect(() => {
   getSingleMember(isAuth() && isAuth()._id)
     .then(response => {
       if(response.error){
         return console.log(response.error)
       }
       setMember(response.result)
     })
     .catch((err) => {
       console.log(err)
     })
  },[])


const showMemberData = () => {
   return Object.entries(member).map((item, i) => {
        return <div className="row" style={styling.eachrow}>
                 <div className="col-6">
                   {item[0]}
                 </div>
                 <div className="col-6">

                 </div>
              </div>
      })
}

 
  return <>
           <Layout>
              <div className="row  justify-content-center">
                <div className="col-md-6 text-center" style={styling.profileCard}>
                   <img src={member.photo} height={150} width={170}/>
                    {showMemberData()}
                </div>
              </div>
           </Layout>
         </>
}
export default Profile;
