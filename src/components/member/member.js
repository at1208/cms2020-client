import React from 'react';
import MemberStyle from './style';
import Layout from '../layout/layout'
import AddMember from './addMember'

const  styling = MemberStyle();

const Member = () => {
   return <>
           <Layout>
              <AddMember />
           </Layout>
          </>
}

export default Member;
