import {AsyncStorage} from 'react-native';
import data from '../data/.json'


const Database = () =>{


    function save(elemento){
        console.log(elemento)
    }

    return(
       data.forEach(element => {
            save(element)
       })
    )


}

export default Database