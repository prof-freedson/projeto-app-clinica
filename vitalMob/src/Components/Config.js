import React,{useState} from "react";
import { Modal , View , Text } from "react-native";
import ToggleSwitch from 'toggle-switch-react-native'
import myStyle from '../../Css/Style';

const style = {
    container: myStyle[1]
};

const confingVisual = () =>{

    const [activi , setActivit] = useState(false)

    return(
       <ToggleSwitch 
            isOn={activi}
            onToggle={()=>{
                setActivit(true)
                if(activi === true){
                    setActivit(false)
                }
                else{
                    setActivit(true)
                }
            }}
       />
    )
}


export default confingVisual
