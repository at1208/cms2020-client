const SignInStyle = () => {
         return {
           outerContainer:{
             position: "fixed",
             top:"100px",
             right:"0px",
             left:"0px",
             zIndex:"1100"
           },
             memberInput:{
               marginTop:"10px!important",
               marginBottom:"10px"
             },
             addMemberCard:{
               borderBottom:"3px solid #FE6B8B",
               padding:"30px 20px 30px 20px",
               // minHeight:"310px"

             },
             createGroupContainer:{
               height:"40px",
               padding:"0px 40px 0px 40px",
               textAlign:"right"
             },
             title:{
               textAlign:"center",
               marginTop:"25px",
               fontSize:"35px",
               marginBottom:"40px"
             },
             addMemberForm:{
               textAlign:"center"
             },
             closeBtn:{
               position:"absolute",
               zIndex:"200",
               top:"0px",
               right:"0px"
             },
             inviteBtn:{
               background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
               marginTop:"30px"
             },
             createGrpBtn:{
                 background:"#d9d9d9",
             },
             memberTableCard:{
                 padding:"20px 30px 20px 30px"
             },
              sendIcon:{
                cursor: "pointer",
                position: "absolute",
                right: "10px",
                top:"30%",
                fontSize:"28px",
                zIndex:"2000"
              },
              message:{
                margin:"10px 0px 10px 0px",
                borderRadius:"12px 0px 12px 12px",
                backgroundColor:"white",
                padding:"5px 5px 13px 0px"
              },
              msgImg:{
                borderRadius:"100%"
              },
              fromName:{
                fontWeight:"600",
                padding:"2px 10px 0px 10px"
              },
              text:{
                padding:"5px 0px 0px 8px"
              },
              time:{
                position:"absolute",
                right:"10px",
                bottom:"1px"
              },
              groupchatRight:{
                // height:"91vh",
                // position:"fixed",
                // right:"0px",
                // top:"9vh",
                // backgroundColor:"white"
              }
         }
}

export default SignInStyle;
