const DepartmentStyle = () => {
         return {
           outerContainer:{
             position: "fixed",
             top:"100px",
             right:"0px",
             left:"0px",
             zIndex:"1100"
           },
            addDepartmentCard:{
              borderBottom:"3px solid #FE6B8B",
              padding:"30px 20px 30px 20px",
              minHeight:"310px"
            },
            title:{
              textAlign:"center",
              marginTop:"25px",
              fontSize:"35px",
              marginBottom:"40px"
            },
            addDepartmentContainer:{
              height:"40px",
              padding:"0px 40px 0px 40px",
              textAlign:"right"
            },
            closeBtn:{
              position:"absolute",
              zIndex:"200",
              top:"0px",
              right:"0px"
            },
            createBtn:{
              background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              marginTop:"30px"
            },
            addDepBtn:{
                background:"#d9d9d9",
            },
            departmentTableCard:{
                padding:"20px 30px 20px 30px"
            }
         }
}

export default DepartmentStyle;
