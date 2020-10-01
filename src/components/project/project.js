import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout';
import AddProject from './addProject';

const Project = () => {
  return <>
          <Layout>
              <AddProject />
          </Layout>
         </>
}

export default Project;
