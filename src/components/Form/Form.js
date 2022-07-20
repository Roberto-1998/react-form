import React, {useState} from "react";
import './Form.css'

import {useForm} from 'react-hook-form'

/* MATERIAL UI */
import {Avatar, Button, ButtonGroup, RadioGroup, FormControl,FormControlLabel, Radio} from '@mui/material'
import { ChromePicker, CirclePicker } from 'react-color';
import {UnarchiveSharp,ErrorOutlineSharp} from '@mui/icons-material'







const Form=(props)=>{

    const {getNameSpace, getDomain, getColorTheme, getImage}=props


    const {register, handleSubmit, watch}=useForm({
        defaultValues:{
            privacy:"private"
        }
    })
       

    const [image, setImage] = useState(null)
    const [nameSpace, setNameSpace]=useState('')
    const [domain, setDomain]=useState('')
    const [peopleWork, setPeopleWork]=useState('11-25')
    const [color, setColor]=useState('#39b0ff')
    const [isColorPickerActive, setColorPickerActive]=useState(false)
   



    const handleText=(e)=>{
        if(e.target.name==='nameSpace'){
            setNameSpace(e.target.value)
            getNameSpace(e.target.value)
        }

        if(e.target.name==='domain'){
            setDomain(e.target.value)
            getDomain(e.target.value)
        }

    }


    const handleColor=(colorPicked)=>{     
        setColor(colorPicked)
        getColorTheme(colorPicked)

    }

   


   const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
          getImage(URL.createObjectURL(event.target.files[0]));

        }
       }


    const onSubmit=(data)=>{


        const payload={
            ...data,
            nameSpace,
            domain,
            peopleWork,
            image,
            color 
        }

        console.log(payload)
    }


    const resetForm=()=>{
              setColor('')
        getColorTheme('')

        setDomain('')
        getDomain('')

        setNameSpace('')
        getNameSpace('')
        
       
        setImage(null)
        getImage(null)

        setPeopleWork('')
    }


    return(
        <div className="main-content">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <h1>Configuración</h1>
                <div className="flex-column margin-15">
                    <h4>Logo del espacio</h4>
                    
                    <div className="flex-row align-items-center margin-10">
                        {image ? (<img src={image} alt="" className="image-uploaded" />) : (<Avatar className="avatar-logo">B</Avatar>)}
                       
                        <Button variant="outlined" className="button-logo button-all button-gray"  startIcon={<UnarchiveSharp />} component='label'>
                        Subir logo
                        <input type="file" onChange={onImageChange} hidden  />
                        </Button>
                    </div>
                    
                    <div className="flex-row margin-10">
                      
                    <ErrorOutlineSharp className="warning-icon"></ErrorOutlineSharp>
                      
                        <div className="icon-text">
                           <p>Este logo identificará tu espacio entre el resto</p>  
                           <p>Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo transparente</p>
                        </div>
                    </div>
                </div>

               
                  
                    <div className="flex-column margin-15">
                            <label htmlFor="nameSpace" className="bold">Nombre del espacio</label>
                            <input className="input-text" type="text" placeholder="Ep: Mi espacio de trabajo" value={nameSpace} onChange={handleText}  name='nameSpace'  autoComplete="new-password"   />
                    </div>

                    <div className="flex-column margin-15">
                            <label htmlFor="domain" className="bold">URL del espacio (dirección web)</label>
                            <div className="input-wrapper">
                                <input className="input-text place-last" type="text" placeholder="Ep:mi.dominio" value={domain} onChange={handleText} name="domain"   autoComplete="new-password"   /> 
                            </div>
                              
                            <div className="flex-row"> 
                                    <ErrorOutlineSharp className="warning-icon"></ErrorOutlineSharp>
                                    <div className="icon-text" >
                                        <p>Puedes cambiar la URL de tu espacio (dirección web) en cualquier momento, pero por cortesía hacia tus compañeros de trabajo y otros usuarios de Plankton, por favor no lo hagas muy seguido :)</p>
                                        <p>Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde la antigua dirección hacia la nueva. En cualquier caso, deberías asegurarte que tus compañeros sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada por otro espacio en el futuro</p>
                                    </div>
                            </div>
                    </div>
                 
                   

                    <div className="flex-column margin-15">
                        <h4 className="bold">¿Cuántas personas trabajarán contigo, incluyéndote a ti ?</h4>
                        <div className="flex-row margin-10">
                            <ButtonGroup variant="text" aria-label="text button group">
                            <Button  variant="outlined" className={`button-work-people button-all button-gray color-button-black ${peopleWork==='1' ? 'active-color' :''}`} onClick={()=>setPeopleWork('1')} >Sólo yo</Button>
                            <Button  variant="outlined" className={`button-work-people button-all button-gray color-button-black ${peopleWork==='2-10' ? 'active-color' :''}`} onClick={()=>setPeopleWork('2-10')}>2-10</Button>
                            <Button  variant="outlined" className={`button-work-people button-all button-gray color-button-black ${peopleWork==='11-25' ? 'active-color' :''}`} onClick={()=>setPeopleWork('11-25')}>11-25</Button>
                            <Button  variant="outlined" className={`button-work-people button-all button-gray color-button-black ${peopleWork==='26-50' ? 'active-color' :''}`} onClick={()=>setPeopleWork('26-50')}>26-50</Button>
                            <Button  variant="outlined" className={`button-work-people button-all button-gray color-button-black ${peopleWork==='51-100' ? 'active-color' :''}`} onClick={()=>setPeopleWork('51-100')}>51-100</Button>
                            <Button  variant="outlined" className={`button-work-people button-all button-gray color-button-black ${peopleWork==='500+' ? 'active-color' :''}`} onClick={()=>setPeopleWork('500+')}>500+</Button>
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
                            <div className="flex-row margin-10 circle-picker" >

                              
                                    <CirclePicker   color={color} onChange={updatedColor=>handleColor(updatedColor.hex)} width="100%" colors={['#39b0ff','#04B58B', '#3E9C4B', '#B6BC00', '#E59100', '#EE1F50','#D6198A', '#B321F1']}>
                                    </CirclePicker>
                                   
                                        <span className="pickerColor" onClick={()=>setColorPickerActive(!isColorPickerActive)}>
                                        <span></span>
                                        </span>
                                    
                            </div>
                            {(isColorPickerActive &&  <ChromePicker className="margin-10 chrome-picker" color={color} onChange={updatedColor=>handleColor(updatedColor.hex)} ></ChromePicker>)}                 
                        </div>
                       
                    </div>

                    <div>
                        <div className="flex-row margin-15">
                        <FormControl>
                            <h4>Privacidad del espacio</h4>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                            >
                                <div className="flex-row margin-10">
                                    <div className={`radio-box flex-row ${watch('privacy')==='private' ? 'active-color' : ''}`} >
                                        <FormControlLabel className="align-self-start" value="private" control={<Radio />} {...register('privacy')} checked={watch('privacy')==='private'}   />
                                        <div >
                                            <h4>Privado</h4>
                                            <p>El contenido será visible sólo para tí y los miembros de tu Organización</p>
                                        </div>
                                
                                    </div>
                                    
                                    <div className={`radio-box flex-row ${watch('privacy')==='public' ? 'active-color' : ''}`} >
                                        <FormControlLabel className="align-self-start" value="public"  control={<Radio />} {...register('privacy')}  checked={watch('privacy')==='public'}   />
                                        <div >
                                            <h4>Público</h4>
                                            <p>Cualquiera con el vínculo podrá ver la actividad de tu Organización</p>
                                        </div>
                                
                                    </div>
                                </div>
                               
                            </RadioGroup>
                        </FormControl>
                        </div>
                    </div>


                 <div className="margin-15">
                    <Button variant="contained" color="primary" type="submit" className="button-save-form button-all padding-form-button capitalize">Guardar cambios</Button>
                    <Button variant="outlined" className="button-all button-gray padding-form-button color-button-black" onClick={resetForm}>Descartar</Button>
                </div>


            </form>
        </div>
    )
}

export default Form