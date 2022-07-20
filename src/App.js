import React, {useReducer, useState} from "react";
import Form from "./components/Form";
import SvgComponent from "./components/SvgComponent/SvgComponent";
import './App.css'






const App=()=>{

  const initialState={
    nameSpace:'',
    domain:'',
    colorTheme:'',
    image:null
  }

  const reducer=(state, action)=>{

    switch (action.type) {
      case 'SET_NAMESPACE':
        return{
          ...state,
          nameSpace:action.payload
        }

      case 'SET_DOMAIN':
        return{
          ...state,
          domain:action.payload
        }
      
      case 'SET_COLOR_THEME':
        return{
          ...state,
          colorTheme:action.payload
        }

      case 'SET_IMAGE':
        return{
          ...state,
          image:action.payload
        }
        
        
    
      default:
        return state
    }
  }
  



const [state, dispatch]=useReducer(reducer, initialState);

const {nameSpace, domain, colorTheme, image}=state

const updateData=(type, data)=>{

    switch (type) {
        case 'nameSpace':
          dispatch({
            type:'SET_NAMESPACE',
            payload:data
          })
          break;

        case 'domain':
         dispatch({
          type:'SET_DOMAIN',
          payload:data
         })
          break;

        case 'image':
         dispatch({
          type:'SET_IMAGE',
          payload:data
         })
          break;

        case 'color':
          dispatch({
            type:'SET_COLOR_THEME',
            payload:data
          })
          break;
      
        default:
          break;
  }
}



  return(
    <section className="content" >
      <div className="form-content">
        <Form updateData={updateData}  ></Form>
      </div>
      


    <div className="svg-content">
          <SvgComponent name={nameSpace} domain={domain} color={colorTheme} image={image}></SvgComponent>
    </div>


     
    </section>
  )


}

export default App