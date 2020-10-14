import React from 'react';
import GroupStyle from './style';
import moment from 'moment';
const styling = GroupStyle();

const MessageCard = ({ data, online }) => {
  const checkOnline = (status) => {
      if(status){
        return {
          marginLeft:"5px",
          height: "10px",
          width: "10px",
          backgroundColor: "green",
          borderRadius: "50%",
          display: "inline-block",
        }
      }  return {
        marginLeft:"5px",
        height: "10px",
        width: "10px",
        backgroundColor: "red",
        borderRadius: "50%",
        display: "inline-block",
      }
  }

  return <div style={styling.cardContainer}>
            <div className="row">
              <div className="messageImg">

              </div>
              <div className="messageContent">
              <div style={styling.name}>{data.sender.fullName}<small style={styling.time}>{moment(data.createdAt).format("hh:mm A")}</small> {/*online && <span style={checkOnline(online)} />*/}</div>

              <div style={styling.message}>
               {data.message}
              </div>


              </div>
            </div>
         </div>
}

export default MessageCard;
