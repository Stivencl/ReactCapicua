import {useState} from "react";
import ButtonAnalizar from "./boton";


function CapicuaInput(){
    //Hook

const [message, setMessage] = useState("");
//Doble via
return(
    <div>
        <input
        type="text"
        value={message}
        placeholder="¡Write the text to be analized!"
        onChange={e => setMessage(e.target.value)}
        />
        <h2>
            {message}
        </h2>
        <ButtonAnalizar msm={message} value="Analyze"/>
        
    </div>
    
);
}
export default CapicuaInput;

