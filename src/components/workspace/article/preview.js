import React, { useState, useEffect } from 'react';
import renderHTML from 'react-render-html';

const Preview = ({ data }) => {
  return <>
           <div className="container">
              {renderHTML(data.body)}
           </div>
         </>
}
export default Preview;
