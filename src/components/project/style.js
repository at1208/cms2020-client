const SignInStyle = () => {
         return {
           outerContainer:{
             position: "fixed",
             top:"100px",
             right:"0px",
             left:"0px",
             zIndex:"1100"
           },
            addProjectCard:{
              borderBottom:"3px solid #FE6B8B",
              padding:"30px 20px 30px 20px"
            },
            title:{
              textAlign:"center"
            },
            createBtn:{
              background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              marginTop:"30px"
            },
            closeBtn:{
              position:"absolute",
              zIndex:"200",
              top:"0px",
              right:"0px"
            },
            addProjectContainer:{
               height:"40px",
              padding:"0px 40px 0px 40px",
              textAlign:"right"
            },
            addProBtn:{
               background:"#d9d9d9",
            },
            cardContainer:{
              height:"100px",
              margin:"10px",
              width:"100px",
              backgroundColor:"brown"
            }
         }
}

export default SignInStyle;
