import React from 'react';
import './index.css';
function Contactt(props){
    return(
        <input
							type="text"
							placeholder={props.nom}
							name={props.nom}
							className="input"
						/>
    )
}
export default Contactt