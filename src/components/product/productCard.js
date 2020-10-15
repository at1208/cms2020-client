import React from 'react';
import Style from './style';


const Card = ({ data }) => {
  const  styling = Style();


 return <div style={styling.cardContainer}>
           <span>Geeksocean.com</span>
           <img alt=""/>
           <div><small>1 open task</small><small>10 task completed</small></div>
            <div>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit.
                Donec vel elit neque. Class aptent
                taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos....
              </div>
              <h6>Project Leader</h6>
               <img src=""/>
               <h6>Team</h6>
                <img src=""/>
        </div>
}
export default Card;
