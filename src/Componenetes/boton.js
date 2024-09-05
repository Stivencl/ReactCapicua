import { useState } from "react";

function ButtonAnalizar(props){
    const[msm, setMessage] = useState("");
     let menss = "";
      if(msm){
        let textCelan = msm.normalize("NFC")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ /g, "")
        .toLowerCase();
let textInverted = textCelan.split('')
                  .reverse()
                  .join('')
                  .toLowerCase();
                  
if(textCelan === textInverted){
menss = "Is a word capicua";
}else{
menss = "Is not a word capicua";
}
      }else{
        menss = "Waiting for a word";
      }  
    
 return(
    <div>
        <button onClick={ ()=> setMessage(props.msm)}>
            {props.value}
           
        </button>
        <p>{menss}</p>
    </div>  
 );
    
}
export default ButtonAnalizar;