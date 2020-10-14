const  Style = () => {
         return {
            cardContainer:{
              backgroundColor:"white",
              boxShadow: "#E9ECEE 0px 0.1rem .3rem",
              padding:"0px 10px 4px 0px",
              marginBottom:"20px"
            },
            name:{
              fontSize:"15px",
              fontWeight:"600",
              paddingBottom:"3px"
            },
            time:{
              paddingLeft:"5px",
              fontSize:"12px",
              color: "grey"
            },
            message:{
              fontSize:"15px"
            },
            closeBtn:{
              position:"absolute",
              zIndex:"200",
              top:"0px",
              right:"0px"
            },
         }
}

export default  Style;
