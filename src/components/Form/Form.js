import React, { useReducer, useState} from "react";
import './Form.css'

import {useForm} from 'react-hook-form'

/* MATERIAL UI */
import {Avatar, Button, ButtonGroup, RadioGroup, FormControl, Radio, useMediaQuery, Popover} from '@mui/material'
import { ChromePicker, CirclePicker } from 'react-color';
import {UnarchiveSharp,ErrorOutlineSharp} from '@mui/icons-material'


const Form=(props)=>{


    // POPOVER
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

// END POPOVER


    // Función recibida desde App, a traves de la cual se enviará data
    const {updateData}=props

    const {register, handleSubmit, watch, reset, setValue}=useForm({})

    const isDesktop=useMediaQuery('(min-width:960px)');
       

    const initialState={
        image:null,
        peopleWork:'',
        color:'',
        isColorPickerActive:false,
      
    }

    const reducer=(state, action)=>{
      switch (action.type) {
        case 'SET_COLOR':
            return{
                ...state,
                color:action.payload
            }

        case 'SET_IMAGE':
            return{
                ...state,
                image:action.payload
            }

        case 'SET_PEOPLE_WORK':
        return{
            ...state,
            peopleWork:action.payload
        }

        case 'SET_COLOR_PICKER_ACTIVE':
            return{
                ...state,
                isColorPickerActive:action.payload
            }

        case 'RESET':
            return{
                ...initialState
            }
        default:
            return state
      }
    } 
  
   
    const [state, dispatch]=useReducer(reducer, initialState);

    const {image,peopleWork, color,isColorPickerActive }=state



 
  
// Obtener el texto de los Inputs y enviárselos a App
    const handleText=(e)=>{
        if(e.target.name==='nameSpace'){
            updateData('nameSpace',e.target.value)
        }

        if(e.target.name==='domain'){
            updateData('domain',e.target.value)
        }

    }

// Obtener color, actualizar estado y enviarlo a App
    const handleColor=(colorPicked)=>{     
       dispatch({
        type:'SET_COLOR',
        payload:colorPicked
       })
        updateData('color',colorPicked)
    }


// COLOR PICKER FUNCTION
const handleColorPicker=(e)=>{

    dispatch({type:'SET_COLOR_PICKER_ACTIVE', payload:!isColorPickerActive})

    handleClick(e)

}

// Obtener image, actualizar estado y enviarla a App
   const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            dispatch({
                type:'SET_IMAGE',
                payload:URL.createObjectURL(event.target.files[0])
            })
        
          updateData('image',URL.createObjectURL(event.target.files[0]));

        }
       }

// Envío de formulario 
    const onSubmit=(data)=>{
       const payload={
            ...data,
            peopleWork,
            image,
            color 
        }
        console.log({payload})
        resetForm();
    }


    // Descartar cambios de formulario
    const resetForm=()=>{
        // Actualizar estados a valor inicial
       dispatch({type:'RESET'})

        //Reset Forms Fields
        reset()

        // Actualizar información a enviar a App
        updateData('color', '')
        updateData('domain', '')
        updateData('nameSpace', '')
        updateData('image', null)
     
    }


  
    
  



    return(
        <div className="main-content">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <h1>Configuración</h1>
                <div className="flex-column margin-15">
                    <h4>Logo del espacio</h4>
                    
                    <div className="flex-row align-items-center margin-10 wrap gap">
                        {image ? (<img src={image} alt="" className="image-uploaded" />) : (<Avatar className="avatar-logo">B</Avatar>)}
                       
                        <Button variant="outlined" className="button-logo button-all button-gray"  startIcon={<UnarchiveSharp />} component='label'>
                        Subir logo
                        <input type="file" onChange={onImageChange} hidden  />
                        </Button>
                    </div>
                    
                    <div className="flex-row margin-10">
                      
                    <ErrorOutlineSharp className="warning-icon"></ErrorOutlineSharp>
                      
                        <div className="icon-text">
                           <p>Este logo identificará tu espacio entre el resto.</p>  
                           <p>Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo transparente.</p>
                        </div>
                    </div>
                </div>

               
                  
                    <div className="flex-column margin-15">
                            <label htmlFor="nameSpace" className="bold">Nombre del espacio</label>
                            <input className="input-text" type="text" placeholder="Ep: Mi espacio de trabajo"  name='nameSpace'  autoComplete="new-password"  {...register('nameSpace')} onChange={handleText}  />
                    </div>

                    <div className="flex-column margin-15">
                            <label htmlFor="domain" className="bold">URL del espacio (dirección web)</label>
                            <div className="input-wrapper">
                                <input className="input-text place-last" type="text" placeholder="Ep:mi.dominio"  name="domain"    autoComplete="new-password" {...register('domain')} onChange={handleText}  /> 
                            </div>
                              
                            <div className="flex-row"> 
                                    <ErrorOutlineSharp className="warning-icon"></ErrorOutlineSharp>
                                    <div className="icon-text" >
                                        <p>Puedes cambiar la URL de tu espacio (dirección web) en cualquier momento, pero por cortesía hacia tus compañeros de trabajo y otros usuarios de Plankton, por favor no lo hagas muy seguido :)</p>
                                        <p>Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde la antigua dirección hacia la nueva. En cualquier caso, deberías asegurarte que tus compañeros sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada por otro espacio en el futuro.</p>
                                    </div>
                            </div>
                    </div>
                 
                   

                    <div className="flex-column margin-15">
                        <h4 className="bold">¿Cuántas personas trabajarán contigo, incluyéndote a ti ?</h4>
                        <div className="flex-row margin-10">
                            <ButtonGroup variant="text" aria-label="text button group" style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
                            <Button  variant="outlined" className={`button-work-people button-all button-gray color-button-black ${peopleWork==='1' ? 'active-color-button' :''}`} onClick={()=>dispatch({type:'SET_PEOPLE_WORK', payload:'1'})}  >Sólo yo</Button>
                            <Button  variant="outlined" className={`button-work-people button-all button-gray color-button-black ${peopleWork==='2-10' ? 'active-color-button' :''}`} onClick={()=>dispatch({type:'SET_PEOPLE_WORK', payload:'2-10'})}  >2-10</Button>
                            <Button  variant="outlined" className={`button-work-people button-all button-gray color-button-black ${peopleWork==='11-25' ? 'active-color-button' :''}`} onClick={()=>dispatch({type:'SET_PEOPLE_WORK', payload:'11-25'})} >11-25</Button>
                            <Button  variant="outlined" className={`button-work-people button-all button-gray color-button-black ${peopleWork==='26-50' ? 'active-color-button' :''}`} onClick={()=>dispatch({type:'SET_PEOPLE_WORK', payload:'26-50'})} >26-50</Button>
                            <Button  variant="outlined" className={`button-work-people button-all button-gray color-button-black ${peopleWork==='51-100' ? 'active-color-button' :''}`} onClick={()=>dispatch({type:'SET_PEOPLE_WORK', payload:'51-100'})} >51-100</Button>
                            <Button  variant="outlined" className={`button-work-people button-all button-gray color-button-black ${peopleWork==='500+' ? 'active-color-button' :''}`} onClick={()=>dispatch({type:'SET_PEOPLE_WORK', payload:'500+'})} >500+</Button>
                            </ButtonGroup>
                    </div>

                    <div className="flex-row margin-10">
                      
                      <ErrorOutlineSharp className="warning-icon"></ErrorOutlineSharp>
                        
                       <div className="icon-text">
                            <p>Este logo identificará tu espacio entre el resto</p>  
                            <p>Preferiblemente sube una imagen .png igual o superior a 65px a 72 ppp con fondo transparente</p>
                        </div>
                    </div>
                        
                    </div>



                    <div className="flex-column margin-15">
                        <h4>Color del tema</h4>
                        <div className="flex-column align-items-start"  >
                            <div className="flex-row margin-10 circle-picker" style={{justifyContent:'space-between'}} >
                                    <CirclePicker circleSpacing={18} circleSize={isDesktop ? 45 : 25}   color={color} onChange={updatedColor=>handleColor(updatedColor.hex)} width="100%" colors={['#39b0ff','#04B58B', '#3E9C4B', '#B6BC00', '#E59100','#E55C00' ,'#EE1F50','#D6198A', '#B321F1']}>
                                    </CirclePicker>
                                    <span className="pickerColor" onClick={handleColorPicker}  aria-describedby={id}>
                                        <span></span>
                                    </span>  

                                    <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                    }}
                                >
                                    <ChromePicker className="margin-10 chrome-picker" color={color} onChange={updatedColor=>handleColor(updatedColor.hex)} ></ChromePicker>
                                     </Popover>
                            </div>

                           

                                        
                        </div>
                    </div>

                    <div className="margin-15">
                        <FormControl>
                            <h4>Privacidad del espacio</h4>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                            >
                                <div className="flex-row margin-10 wrap gap" >
                                    <div className={`radio-box flex-row ${watch('privacy')==='private' ? 'active-radio-box' : ''}`} onClick={()=>setValue('privacy', 'private')}>
                                        <Radio className="align-self-start" size="small" value="private" sx={{color:`${watch('privacy')==='private' ? '#48b5fe' :'#CFD0D2'}`}} {...register('privacy')} checked={watch('privacy')==='private'}   />
                                        <div className="radio-box-content" >
                                            <h4>Privado</h4>
                                            <p>El contenido será visible sólo para tí y los miembros de tu Organización</p>
                                        </div>
                                
                                    </div>
                                    
                                    <div className={`radio-box flex-row ${watch('privacy')==='public' ? 'active-radio-box' : ''}`} onClick={()=>setValue('privacy', 'public')} >
                                        <Radio className="align-self-start" size="small" value="public"  sx={{color:`${watch('privacy')==='public' ? '#48b5fe' :'#CFD0D2'}`}} {...register('privacy')}  checked={watch('privacy')==='public'}   />
                                        <div  className="radio-box-content"  >
                                            <h4>Público</h4>
                                            <p>Cualquiera con el vínculo podrá ver la actividad de tu Organización</p>
                                        </div>
                                    </div>
                                </div>
                               
                            </RadioGroup>
                        </FormControl>
                    </div>

                 <div className="button-submit-group flex-row wrap gap">
                    <Button variant="contained" color="primary" type="submit" className="button-save-form button-all padding-form-button">Guardar cambios</Button>
                    <Button variant="outlined" className="button-all button-gray padding-form-button color-button-black" onClick={resetForm}>Descartar</Button>
                </div>
            </form>
        </div>
    )
}

export default Form