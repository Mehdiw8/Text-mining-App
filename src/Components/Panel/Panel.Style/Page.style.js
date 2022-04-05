import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme)=>({
  container:{
          paddingRight:'20px',
          marginBottom:'2rem',
          
  },
  headContent:{
          width:'95%',
          backgroundColor:'#0faf73',
          boxShadow:'0 3px 4px rgb(0 0 0 / 10%)',
          borderRadius:'8px',
          lineHeight:'24px',
          padding:'8px 15px 12px 15px',
          marginTop:'-30px',
          
          [theme.breakpoints.down('xs')]:{
                  width:'100%',
          }
          
  },
  ttext:{
          color:'#fff',
          fontSize:'12px',
          
          
  },
  responseText:{
        lineHeight:'2rem'
  },
  texxt:{
          fontSize:'16px',
          margin:'0 0 8px 0 '
  },
  contentWrapper:{
          backgroundColor:'#fff',
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center',
          width:'80%',
          borderRadius:'8px',
          marginTop:'5rem',
          marginRight:'5.2rem',
          boxShadow:'0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
          [theme.breakpoints.down('xs')]:{
                  width:'98%',
                  
                  marginRight:'0rem',
                 
          }

  },
  mytextarea:{
          minHeight:'32px',
          width:"95%",
          margin:'25px auto 20px auto ',
          resize: 'none',
          border:'none',
          outline:'none',
          display: 'block',
         
          [theme.breakpoints.down('xs')]:{
                  width:'100%',
          }
  },
  formWrapper:{
          width:"100%",
          padding:'0 7px 0 0',
          display: "flex",
          justifyContent: 'center',
          alignItems: 'baseline',
          minHeight: '200px',
          maxHeight: '400px',
          position: 'relative',
  },
  btnWrpper:{
          width:'100%',
          display:'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          margin: '20px 0 5px 115px',
          [theme.breakpoints.down('xs')]:{
                  margin:'20px 0 5px auto',
                  fontSize:'12px',
          }
  },
  btnText:{
          margin:' 0px 10px 0 5px',
          fontSize:'12px',
          
  },
  wrpbtn:{
          padding:'7px 10px',
          margin:'0 10px',
  },
  resultWrapper:{
          width:'100%',
          padding: '2rem 3rem',
          borderTop: '1px dashed #aaa ',
          marginTop: '1rem',
          color: '#666',
         
  },
  formWrapper2:{
          width:'100%',
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'baseline',
          padding:'7px 20px',
          [theme.breakpoints.down('xs')]:{
                  padding:'7px 5px',
          }
  },
  formInput2:{
          fontSize:'16px',
          width:'80%',
          paddingRight:'10px',
          
          [theme.breakpoints.down('xs')]:{
                  width:'100%'
          }
  },
  formLabel:{
          fontSize:'14px',
          color:'#aaa',
          
          
  },
  erorrW:{
          color:'red',
          animation: "$erro 1s ease-in-out alternate infinite",
          marginBottom:"10px"
  },
  "@keyframes erro": {
          "0%": {
       
            transform: "scale(1)"
          },
          "50%": {
                
                  transform: "scale(1.02)"
                },
          "100%": {
                
                  transform: "scale(1.03)"
          }
        },
        labelArea:{
                fontSize:'10px',
                opacity:'0.8',
                position:'absolute',
                right:'24px',
                top:'9px'
                

        },
        wrongText:{
                borderBottom:'1px solid red'
        },
        suggestedText:{
                margin:'7px 5px',
                fontSize:'16px',
                [theme.breakpoints.down('xs')]:{
                        fontSize:'14px',
                }
        },
        suggestedText2:{
                margin:'8px 5px',
                fontSize:'14px',
                [theme.breakpoints.down('xs')]:{
                        fontSize:'12px',
                }
        },
        description:{
               
                fontSize:'12px',
                [theme.breakpoints.down('xs')]:{
                        fontSize:'10px',
                }
        },
        orginalColor:{
                borderBottom:'3px solid red'
        },
        checkBoxWrapper:{
                padding:"22px 20px 0 0",
                width:"100%",
                color:"#777"
        }



}));