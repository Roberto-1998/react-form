import React, {useState} from "react";
import Form from "./components/Form";
import SvgComponent from "./components/SvgComponent/SvgComponent";
import './App.css'


const App=()=>{

const [nameSpace, setnameSpace] = useState('');
const [domain, setDomain] = useState('');
const [colorTheme, setColorTheme] = useState('');
const [image, setImage]=useState(null)


const getNameSpace=(text)=>{
  setnameSpace(text)
}


const getDomain=(text)=>{
  setDomain(text)
}

const getColorTheme=(color)=>{
setColorTheme(color)
}

const getImage=(image)=>{
  setImage(image)
}



  return(
    <section className="content" >
      <div className="form-content">
        <Form getNameSpace={getNameSpace} getDomain={getDomain} getColorTheme={getColorTheme} getImage={getImage}  ></Form>
      </div>
      


    <div className="svg-content">
          <SvgComponent name={nameSpace} domain={domain} color={colorTheme} image={image}></SvgComponent>
    </div>


     
    </section>
  )


}

export default App