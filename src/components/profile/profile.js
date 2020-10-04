import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout'
import ProfileStyle from './style';

const  styling = ProfileStyle();

const Profile = () => {
  const [member, setMember] = useState({
       name:"Aman Tiwari",
       designation:"Founder",
       department:"Content"
  })

  const tabularProfileData = () => {
       return Object.entries(member).map((item, i) => {
         return  <div className="row justify-content-center">
                    <div className="col-4">
                       <div className="row justify-content-start">
                         {item[0]}
                       </div>
                    </div>
                    <div className="col-4">
                       <div className="row justify-content-center">
                        {item[1]}
                       </div>
                    </div>
                 </div>
       })
  }
  return <>
           <Layout>
              <div className="row justify-content-center">
                <div className="col-md-5 card">
                   {tabularProfileData()}
                </div>
              </div>
           </Layout>
         </>
}
export default Profile;
