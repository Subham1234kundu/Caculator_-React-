import styles from "./BtnsContainer.module.css"
export default function BtnContainer({onBtnClick}){
    let btnNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

    return(
        <div className= {styles.btnsContainer}>
            {
                btnNames.map((name)=>(
                <button onClick={()=>onBtnClick(name)}>{name}</button>
                ))
            }
      </div>
    )
}