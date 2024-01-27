
import styles from "./Display.module.css"
export default function Display({displayVal}){
    
    return(
        <input type="text" className= {styles.display} readOnly value={displayVal}/>
    );
}