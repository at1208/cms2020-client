const InvitationStyle = () => {
         return {
              centerCard:{
                backgroundColor:"white",
                minHeight:"380px",
                position:"fixed",
                margin:"0px 10px 0px 10px",
                boxShadow:"0 .5rem 1rem rgba(0,0,0,.15)",
                top:"18%",
                left:"35%",
                right:"35%",
                padding:"15px 20px 15px 20px",
                textAlign:"center"
              },
              passwordInput:{
                marginTop:"8px",
              },
              submitButton:{
                fontSize:"20px",
                fontWeight:"500",
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                marginTop:"20px",
              },
              companyName:{
                fontSize:"23px",
                fontWeight:"500"
              },
              title:{
                textAlign:"center",
                marginTop:"66px",
                letterSpacing: ".25rem",
                fontSize:"34px",
                color:"#434343",
                fontWeight:"400"
              },
              form:{
                marginTop:"120px"
              },
              warningContainer:{
                 height:"15px"
              }
         }
}

export default InvitationStyle;
