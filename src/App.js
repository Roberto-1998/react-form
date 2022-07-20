import React, {useState} from "react";
import Form from "./components/Form";
import SvgComponent from "./components/SvgComponent/SvgComponent";
import './App.css'


const App=()=>{

const [nameSpace, setnameSpace] = useState('');
const [domain, setDomain] = useState('');
const [colorTheme, setColorTheme] = useState('');
const [image, setImage]=useState(null)


/* const getNameSpace=(text)=>{
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
} */


const updateData=(type, data)=>{

    switch (type) {
        case 'nameSpace':
          setnameSpace(data)
          break;

        case 'domain':
          setDomain(data)
          break;

        case 'image':
          setImage(data)
          break;

        case 'color':
          setColorTheme(data)
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