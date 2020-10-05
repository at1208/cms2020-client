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
             addMemberContainer:{
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
             addMemBtn:{
                 background:"#d9d9d9",
             },
             memberTableCard:{
                 padding:"20px 30px 20px 30px"
             }
         }
}

export default SignInStyle;
