import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout'
import ReactToPdf from 'react-to-pdf';
import Editor from "./editor";
import renderHTML from 'react-render-html';

const OfferLetter = () => {

const [filename, setFilename] = useState();
const [body, setBody] = useState("");


const ref = React.createRef();
// const options = {
//     orientation: 'landscape',
//     unit: 'in',
//     format: [4,2]
// };

const handleChangeEditor = (content) => {
       setBody(content)
}

  return <>
           <Layout>
               <div className="container">
                   <div className="mb-5">
                     <Editor  onChange={handleChangeEditor} data={body}/>
                     <ReactToPdf targetRef={ref} filename="div-blue.pdf"   x={.5} y={.5} scale={.8}>
                         {({toPdf}) => (
                             <button onClick={toPdf}>Generate pdf</button>
                         )}
                     </ReactToPdf>
                   </div>
                   <div>
                     <div ref={ref}>
                        {renderHTML(body)}
                     </div>
                   </div>
                   <div className="text-center mt-5">

                   </div>
               </div>
           </Layout>
         </>
}
export default OfferLetter;
