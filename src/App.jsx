import styles from "./App.module.css";
import Display from "./display";
import BtnContainer from "./btnsContainer";
import { useState } from "react"


function App() {

  let [calVal,setCalVal] = useState("");
  const onBtnClick = (btnText)=>{
    if(btnText === "C"){
      setCalVal("");
    }else if(btnText === "="){
      const result = eval(calVal);
      setCalVal(result)
    }else{
      const newDisplayVal = calVal + btnText
      setCalVal(newDisplayVal);
    }
  }
  return (
    <>
     <div className={styles.calculator}>
      <Display displayVal={calVal}/>
      <BtnContainer onBtnClick = {onBtnClick} />
     
     </div>
    </>
  )
}

export default App;
