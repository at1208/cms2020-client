import React from 'react';
import ProjectStyle from './style';
const  styling = ProjectStyle();

const Card = ({ data }) => {
  console.log(data)
 return <div className="col-md-2">
          <div style={styling.cardContainer}>
          </div>
        </div>
}
export default Card;
